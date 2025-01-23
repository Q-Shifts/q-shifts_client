import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant: keyof typeof variants;
}

const variants = {
  success: "bg-green-accent text-green-normal",
  orange: "bg-orange-accent text-orange-normal",
  danger: "bg-deepOrange-accent text-deepOrange-normal"
};

export default function Badge({ children, variant }: Props) {
  return (
    <span className={`rounded-lg px-12 py-4 text-14 ${variants[variant]}`}>
      {children}
    </span>
  );
}
