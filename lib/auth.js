import redirect from "./redirect";
import { setCookie, getCookie, removeCookie } from "./session";
import { authenticate } from "../services/authApi";
import { createUser } from "../services/userApi";
import { validateCredentials, validateNewUser } from "./validation";

export const signIn = async (username, password) => {
  const error = validateCredentials(username, password);
  if (error) {
    return error;
  }

  const res = await authenticate(username, password);
  if (!res.jwt) {
    return res;
  }

  setCookie("jwt", res.jwt);
  redirect("/user");
  return null;
};

export const signUp = async (name, username, password, password_confirmation) => {
  const error = validateNewUser(name, username, password, password_confirmation);
  if (error) {
    return error;
  }

  const res = await createUser(name, username, password);

  if (res.error) {
    return res;
  }

  setCookie("success", `${name}, your account was created.`);
  redirect("/auth/login");
  return null;
};

export const signOut = (ctx = {}) => {
  if (process.browser) {
    removeCookie("jwt");
    redirect("/auth/login", ctx);
  }
};

export const getJwt = ctx => {
  return getCookie("jwt", ctx.req);
};

export const isAuthenticated = ctx => !!getJwt(ctx);

export const redirectIfAuthenticated = ctx => {
  if (isAuthenticated(ctx)) {
    redirect("/user", ctx);
    return true;
  }
  return false;
};

export const redirectIfNotAuthenticated = ctx => {
  if (!isAuthenticated(ctx)) {
    redirect("/auth/login", ctx);
    return true;
  }
  return false;
};