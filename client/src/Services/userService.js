//Cualquier fallo que haya lo captura el catch de LoginForm
const userService = async (token) => {

  const res = await fetch('http://localhost:8080/users', {
    headers: {
      Authorization: token,
    },
  });
  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message);
  }
  return body.data.user;
};

export default userService;
