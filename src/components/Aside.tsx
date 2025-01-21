import { useState } from "react";
import AsideItem from "./AsideItem";
import HomeIcon from "~/assets/icons/home.svg?react";
import CalenderOutline from "~/assets/icons/calendar-outline.svg?react";
import DocumentsLinear from "~/assets/icons/documents-linear.svg?react";
import NotificationIcon from "~/assets/icons/notification.svg?react";
import SupportIcon from "~/assets/icons/support.svg?react";
import SettingsIcon from "~/assets/icons/setting-outline.svg?react";

export default function Aside() {
  const [activeItem, setActiveItem] = useState("Dashboard"); // TODO:
  const navLinks = [
    {
      label: "Dashboard",
      icon: <HomeIcon />
    },
    {
      label: "Shift Planning",
      icon: <CalenderOutline />
    },
    {
      label: "My Documents",
      icon: <DocumentsLinear />
    },
    {
      label: "Notifications",
      icon: <NotificationIcon />
    }
  ];
  const bottomNavLinks = [
    {
      label: "Support",
      icon: <SupportIcon />
    },
    {
      label: "Settings",
      icon: <SettingsIcon />
    }
  ];

  const onRouteChange = (to: string) => {
    setActiveItem(to);
  };

  return (
    <aside className="w-[250px] flex-shrink-0 py-26 pr-24 flex flex-col h-screen">
      <div className="pl-24 text-34">SHIFTU</div>
      <div className="mt-32">
        {navLinks.map(item => (
          <AsideItem
            onClick={() => onRouteChange(item.label)}
            isActive={item.label === activeItem}
            key={item.label}
            icon={item.icon}
          >
            {item.label}
          </AsideItem>
        ))}
      </div>
      <div className="flex-grow"></div>
      <div>
        {bottomNavLinks.map(item => (
          <AsideItem
            onClick={() => onRouteChange(item.label)}
            isActive={item.label === activeItem}
            key={item.label}
            icon={item.icon}
          >
            {item.label}
          </AsideItem>
        ))}
      </div>
    </aside>
  );
}
