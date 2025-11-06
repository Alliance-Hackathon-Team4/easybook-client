import instance from "../lib/axios";

export const getBook = async (bookId?: string) => {
  const res = await instance.get(`/books/${bookId}`);
  return res.data;
};
