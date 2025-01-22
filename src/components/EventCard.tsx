import { ReactNode } from "react";
import DotVertical from "~/assets/icons/dots-vertical.svg?react";

interface Props {
  title: string;
  icon: ReactNode;
  subtitle: string;
  description: string;
  variant?: keyof typeof variants;
  className?: string;
}

const variants = {
  orange: {
    parentClass: "bg-orange-accent border-orange-normal",
    iconClass: "text-orange-normal",
    subtitleClass: "text-micro",
    descriptionClass: "text-gray-dark-active"
  },
  purple: {
    parentClass: "bg-purple-accent border-purple-normal",
    iconClass: "text-purple-normal",
    subtitleClass: "text-micro",
    descriptionClass: "text-gray-dark-active"
  },
  default: {
    parentClass: "bg-blueGray-accent border-blueGray-normal",
    iconClass: "text-blueGray-normal",
    subtitleClass: "text-micro",
    descriptionClass: "text-gray-dark"
  }
} as const;

export default function EventCard({
  description,
  icon,
  subtitle,
  title,
  variant,
  className
}: Props) {
  const { iconClass, parentClass, subtitleClass, descriptionClass } =
    variants[variant || "default"];

  return (
    <div
      className={`flex items-center px-16 py-8 gap-[16px] border-l-[3px] ${parentClass} ${className}`}
    >
      <div className={iconClass}>{icon}</div>
      <div className="flex-grow">
        <h4 className="text-14 mb-4">{title}</h4>
        <div className={`text-12 ${subtitleClass}`}>{subtitle}</div>
      </div>
      <h2 className={`text-14 font-medium ${descriptionClass}`}>
        {description}
      </h2>
      <DotVertical className={`w-[20px] h-[20px] ${subtitleClass}`} />
    </div>
  );
}
