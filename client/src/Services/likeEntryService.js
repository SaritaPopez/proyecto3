const likeEntryService = async (entryId, method, token) => {

  const res = await fetch(`http://localhost:8080/entries/${entryId}/likes`, {
    method,
    headers: {
      Authorization: token,
    },
  });

  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message);
  }
};

export default likeEntryService;
