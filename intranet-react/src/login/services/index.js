function login() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve({
            data: {
              token: "12345",
            },
          })
        : reject({
            error: {
              message: "Usuario o contrase�a incorrectos",
            },
          });
    }, 1000);
  });
  return promise;
}

export { login };
