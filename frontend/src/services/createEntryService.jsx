const entryCreateService = async (description, file, token) => {
  // Si queremos enviar un body en formato "form-data" es necesario crear un objeto de este
  // mismo tipo y "pushear" en él los elementos que queremos enviar.
  const formData = new FormData();

  // Pusheamos las propiedades con "append".
  formData.append('description', description);

  // Si existe imagen la agregamos.
  if (file) formData.append('photo', file);

  const res = await fetch('http://localhost:8080/entries', {
    method: 'post',
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
