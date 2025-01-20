import { useState } from "react";
import AsideItem from "./AsideItem";

export default function Aside() {
  const [activeItem, setActiveItem] = useState("Dashboard"); // TODO:
  const navLinks = [
    "Dashboard",
    "Shift Planning",
    "My Documents",
    "Notifications"
  ];
  const bottomNavLinks = ["Support", "Settings"];

  const onRouteChange = (to: string) => {
    setActiveItem(to);
  };

  return (
    <aside className="w-[250px] flex-shrink-0 py-26 pr-24 flex flex-col h-screen">
      <div className="pl-24 text-34">SHIFTU</div>
      <div className="mt-32">
        {navLinks.map(item => (
          <AsideItem
            onClick={() => onRouteChange(item)}
            isActive={item === activeItem}
            key={item}
          >
            {item}
          </AsideItem>
        ))}
      </div>
      <div className="flex-grow"></div>
      <div>
        {bottomNavLinks.map(item => (
          <AsideItem
            onClick={() => onRouteChange(item)}
            isActive={item === activeItem}
            key={item}
          >
            {item}
          </AsideItem>
        ))}
      </div>
    </aside>
  );
}
