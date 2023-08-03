const deleteEntryService = async (entryId, token) => {
  const res = await fetch(`http://localhost:8080/entries/${entryId}`, {
    method: 'delete',
    headers: {
      Authorization: token,
    },
  });

  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message);
  }
};

export default deleteEntryService;
