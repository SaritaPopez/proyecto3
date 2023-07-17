const getEntryService = async (entryId, token) => {
  try {
    const response = await fetch(`http://localhost:8080/entries/${entryId}`, {
      headers: {
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener la entrada');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error al obtener la entrada');
  }
};

export default getEntryService;
