const registerService = async (username, email, password) => {
  const res = await fetch('http://localhost:8080/users/register', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message);
  }
};

export default registerService;
