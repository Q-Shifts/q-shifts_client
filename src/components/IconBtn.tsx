import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: VoidFunction;
  variant: keyof typeof variants;
}

const variants = {
  secondary: "bg-blue-light-hover text-blue-normal",
  primary: "bg-blue-normal hover:bg-blue-normal-hover text-white",
  default: "bg-blueGray-accent text-blueGray-normal"
};

export default function IconBtn({ children, variant, onClick }: Props) {
  return (
    <button className={`rounded-sm p-2 ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}
