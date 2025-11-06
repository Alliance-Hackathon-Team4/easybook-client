import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="font-hsjandari text-white w-full py-3 text-2xl rounded-2xl bg-[#5eb5a8]"
      {...props}
    >
      {children}
    </button>
  );
}
