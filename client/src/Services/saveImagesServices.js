const saveImagesService = async (entryId, token, images) => {
  //const url = ruta con el endpoint de guardar img
  const formData = new FormData();

  formData.append('entryId', entryId);
  formData.append('token', token);

  // Agregar todas las imágenes al formData
  images.forEach((image, index) => {
    formData.append(`image${index}`, image);
  });

  const requestOptions = {
    method: 'post',
    headers: {
      Authorization: token,
    },
    body: formData,
  };

  const response = await fetch(url, requestOptions);

  if (!response.ok) {
    throw new Error('Error al enviar las imágenes al servidor.');
  }

  const responseData = await response.json();
  return responseData;
};

export default saveImagesService;
