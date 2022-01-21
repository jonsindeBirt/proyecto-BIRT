async function login(user) {
  const query = `http://10.2.10.43/login/login.php?login=${user.email}&password=${user.password}`;
  const response = await fetch(query, { method: "POST" }).catch(
    (error) => error.response
  );

  if (response.status !== 200) {
    const error = await response.json();
    return Promise.reject(error.error);
  }
  const data = (await response.text()).trim().split('"').join("");

  if (data === "login correcto") {
    return Promise.resolve(data);
  } else {
    return Promise.reject(data);
  }
  return data;
}

export { login };
