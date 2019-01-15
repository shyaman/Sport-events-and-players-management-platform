import { post } from "../lib/request";

export const addNews = async (title, description) => {
  try {
    const res = await post("/news", {
        news: {
        name: title,
        description,
      }
    });

    return res.data;
  } catch (error) {
    return error.response && error.response.status === 500
      ? "Required field is missing!"
      : "Unknown error. Please try again";
  }
};