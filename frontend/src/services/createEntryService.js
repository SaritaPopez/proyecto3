const entryCreateService = async (
  title,
  city,
  neightborhood,
  district,
  description,
  photoA,
  photoB,
  photoC,
  token
) => {
  // Si queremos enviar un body en formato "form-data" es necesario crear un objeto de este
  // mismo tipo y "pushear" en él los elementos que queremos enviar.
  const formData = new FormData();

  // Pusheamos las propiedades con "append".
  formData.append("title", title);
  formData.append("city", city);
  formData.append("neightborhood", neightborhood);
  formData.append("district", district);
  formData.append("description", description);
  formData.append("photoA", photoA);
  formData.append("photoB", photoB);
  formData.append("photoC", photoC);

  const res = await fetch("http://localhost:8080/entries", {
    method: "post",
    headers: {
      Authorization: token,
    },
    body: formData,
  });

  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message);
  }
};

export default entryCreateService;
