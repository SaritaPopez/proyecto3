const likeEntryService = async (entryId, likedByMe, token) => {
  // Definimos si vamos a eliminar o a crear el like.
  const method = likedByMe ? 'delete' : 'post';

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
