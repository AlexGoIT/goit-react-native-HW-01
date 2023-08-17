export const loginValidate = (name) => {
  if (!name) {
    return false;
  }

  return /^[A-Za-z0-9]+([A-Za-z0-9]*|[._-]?[A-Za-z0-9]+)*$/.test(name);
};

export const emailValidate = (email) => {
  if (!email) {
    return false;
  }

  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
};

export const passwordValidate = (password) => {
  if (!password) {
    return false;
  }

  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
};
