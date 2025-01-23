import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  time: string;
  variant: keyof typeof variants;
}

const variants = {
  success: {
    parentClass: "bg-green-accent",
    timeClass: "text-green-normal"
  },
  danger: {
    parentClass: "bg-deepOrange-accent",
    timeClass: "text-deepOrange-normal"
  }
} as const;

export default function TimeCard({ icon, time, title, variant }: Props) {
  const { parentClass, timeClass } = variants[variant];
  return (
    <div className={`flex gap-12 p-8 rounded-12 ${parentClass}`}>
      <div className={`flex items-center ${timeClass}`}>{icon}</div>
      <div className="flex flex-col gap-[2px]">
        <h4 className="text-12">{title}</h4>
        <h2 className={`text-14 font-semibold ${timeClass}`}>{time}</h2>
      </div>
    </div>
  );
}
