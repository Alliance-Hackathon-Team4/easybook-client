import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="font-hsjandari text-white w-full py-3 text-2xl rounded-2xl bg-[#5eb5a8]">
      {children}
    </button>
  );
}
