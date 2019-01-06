export const validateNewUser = (
  name,
  username,
  password,
  password_confirmation
) => {
  if (!name) {
    return "Name field is required.";
  }

  if (password !== password_confirmation) {
    return "Password and confirmation password must match.";
  }

  return validateCredentials(username, password);
};

export const validateCredentials = (username, password) => {
  if (!username || !password) {
    return "username and password fields are required.";
  }


  if (!(password.length >= 8)) {
    return "Password needs at least 8 characters.";
  }

  return null;
};