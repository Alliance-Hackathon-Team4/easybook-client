import { ezbook } from "../assets";

export const Onboarding = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#5eb5a8]">
      <img
        src={ezbook}
        alt="이지북 로고"
        className="w-64 h-auto drop-shadow-[2px_4px_2px_rgba(0,0,0,0.4)]"
      />
    </div>
  );
};
