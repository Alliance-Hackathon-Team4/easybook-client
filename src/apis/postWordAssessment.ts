import instance from "../lib/axios";

export interface IWordAssessmentRequest {
  word: string;
  knows: boolean;
}

export interface IWordAssessmentResponse {
  word: string;
  knows: boolean;
  word_level: number;
  word_level_name: string;
}

export interface IAssessmentResult {
  words: IWordAssessmentResponse[];
  estimated_level: number;
  estimated_level_name: string;
  explanation: string;
}

export const postWordAssessment = async (
  words: IWordAssessmentRequest[]
): Promise<IAssessmentResult> => {
  const res = await instance.post(`/api/words/evaluate`, { words });
  return res.data;
};
