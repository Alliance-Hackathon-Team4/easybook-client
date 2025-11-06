export const ErrorContent = ({ error }: { error: unknown }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      <p className="text-lg font-semibold text-red-600 mb-1">
        문제가 발생했습니다
      </p>
      <p className="text-sm text-gray-600">
        {error instanceof Error
          ? (error as Error).message
          : "알 수 없는 오류입니다."}
      </p>
    </div>
  );
};
