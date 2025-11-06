export const LoadingContent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      <p className="text-base font-medium text-gray-700 mb-2">
        책 목록을 불러오는 중입니다
      </p>
      <p className="text-sm text-gray-500">잠시만 기다려주세요...</p>
    </div>
  );
};
