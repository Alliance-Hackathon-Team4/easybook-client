import { useMutation } from "@tanstack/react-query";
import { postWordAssessment } from "../apis/postWordAssessment";
import type { IWordAssessmentRequest } from "../apis/postWordAssessment";
import { useNavigate } from "react-router-dom";

export const usePostWordAssessment = (bookId: string) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (words: IWordAssessmentRequest[]) => postWordAssessment(words),
    onSuccess: () => {
      navigate(`/test2/${bookId}`);
    },
  });
};
