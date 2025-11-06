import { useState } from "react";
import { usePostWordAssessment } from "../../hooks";
import type { IWordAssessmentRequest } from "../../apis/postWordAssessment";
import { useNavigate, useParams } from "react-router-dom";

type Word = {
  word: string;
  knows: boolean;
};

export const Test1 = () => {
  const { id } = useParams<{ id: string }>();
  const { mutate, error, isPending } = usePostWordAssessment(id ?? "");
  const navigate = useNavigate();

  const words: Word[] = [
    { word: "한탄", knows: false },
    { word: "부귀", knows: false },
    { word: "폐단", knows: false },
    { word: "고뇌", knows: false },
    { word: "파멸", knows: false },
    { word: "읊조리다", knows: false },
    { word: "어폐", knows: false },
    { word: "권세", knows: false },
    { word: "각설하다", knows: false },
  ];

  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  const toggleWord = (word: string) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((w) => w !== word));
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleSubmit = () => {
    // API 요청 형식에 맞게 변환
    const wordAssessments: IWordAssessmentRequest[] = words.map((item) => ({
      word: item.word,
      knows: selectedWords.includes(item.word),
    }));

    console.log("전송 데이터:", wordAssessments);
    mutate(wordAssessments);
  };

  const handleSkip = () => {
    // 모든 단어를 knows: false로 설정
    if (!id) return;
    navigate(`/read/${id}/1`);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-lg">
        {/* 제목 */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            알고 있는 단어를
            <br />
            골라보세요.
          </h1>
          <p className="text-base text-gray-400">
            선택한 책에서 발췌된 어휘입니다
          </p>
        </div>

        {/* 단어 그리드 */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {words.map((item, index) => (
            <button
              key={index}
              onClick={() => toggleWord(item.word)}
              disabled={isPending}
              className={`
                py-6 px-3 rounded-xl text-xl sm:text-2xl font-bold
                transition-all duration-200
                ${
                  selectedWords.includes(item.word)
                    ? "bg-teal-500 text-white shadow-lg scale-105"
                    : "bg-gray-50 text-gray-300"
                }
                hover:scale-105 active:scale-95
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
              {item.word}
            </button>
          ))}
        </div>

        {/* 버튼 그룹 */}
        <div className="space-y-3">
          {/* 선택완료 버튼 */}
          <button
            onClick={handleSubmit}
            className="w-full bg-teal-500 text-white py-5 rounded-2xl text-xl font-bold
             hover:bg-teal-600 active:bg-teal-700 transition-all
             shadow-lg hover:shadow-xl"
          >
            선택완료
          </button>

          {/* 건너뛰기 버튼 (작고 회색) */}
          <button
            onClick={handleSkip}
            disabled={isPending}
            className="w-full mt-4 text-sm text-gray-400 font-medium
             bg-transparent shadow-none hover:text-gray-500 transition-colors"
          >
            건너뛰기
          </button>
        </div>

        {/* 에러 메시지 */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-600 text-sm">
              오류가 발생했습니다. 다시 시도해주세요.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
