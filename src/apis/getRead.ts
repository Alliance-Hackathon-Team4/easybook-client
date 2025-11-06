import instance from "../lib/axios";

export const getRead = async (
  page?: number,
  readingLevel?: number,
  bookId?: string
) => {
  const res = await instance.get(`/books/${bookId}/contents`, {
    params: { page, readingLevel },
  });
  return res.data;
};
