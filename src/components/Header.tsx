import { useNavigate } from "react-router";
import { ezbookLogo, myIcon } from "../assets";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      {/* 로고 */}
      <div className="flex items-center">
        <img src={ezbookLogo} onClick={() => navigate("/")} />
      </div>

      {/* 우측 아이콘들 */}
      <div className="flex items-center gap-6">
        <img src={myIcon} onClick={() => navigate("/mybooks")} />
      </div>
    </header>
  );
};
