import { ReactNode } from "react";
import Aside from "../Aside";
import Header from "../Header";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <div className="flex h-screen">
        <Aside />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 overflow-y-auto bg-gray-light-1 rounded-tl-lg px-24 pt-24">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
