import { ReactNode } from "react";

interface Props {
  isActive: boolean;
  onClick: VoidFunction;
  icon?: ReactNode;
  children: ReactNode;
}

export default function AsideItem({
  children,
  icon,
  isActive,
  onClick
}: Props) {
  const onClickHandle = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a
      className={`flex gap-[16px] py-18 px-24 rounded-l-16 text-16 mb-8 ${
        isActive
          ? "bg-blue-normal text-white font-semibold hover:bg-blue-normal-hover"
          : "text-primary-gray"
      }`}
      href="#"
      onClick={onClickHandle}
    >
      {icon}
      {children}
    </a>
  );
}
