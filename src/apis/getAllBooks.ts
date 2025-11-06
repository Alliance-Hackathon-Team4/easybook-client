import instance from "../lib/axios";

export const getAllBooks = async () => {
  const res = await instance.get(`/books`);
  return res.data;
};
