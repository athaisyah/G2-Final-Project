export const delUsername = () => {
  return {
      type: "NAMA"
  }
}

export const setInput = (data) => {
    return {
      type: "INPUT",
      username: data.username,
      password: data.password,
    };
  };
  