import { ReactNode, useMemo } from "react";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> {
  icon?: ReactNode;
}

export default function Input({ className, icon, ...props }: Props) {
  const id = useMemo(() => crypto.randomUUID(), []);

  return (
    <div className={`flex px-24 items-center border rounded-md ${className}`}>
      {icon && (
        <label htmlFor={id} className="cursor-text">
          {icon}
        </label>
      )}
      <input
        id={id}
        className={`h-[50px] outline-none w-[100%] ${icon ? "ml-16" : ""}`}
        {...props}
      />
    </div>
  );
}
