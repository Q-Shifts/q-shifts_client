import BriefcaseIcon from "~/assets/icons/briefcase.svg?react";
import PlaneSolidIcon from "~/assets/icons/clarity_plane-solid.svg?react";
import DocumentsIcon from "~/assets/icons/documents-linear.svg?react";
import SunIcon from "~/assets/icons/tabler_sun-filled.svg?react";
import OwlIcon from "~/assets/icons/light_owl-rounded.svg?react";
import PlaneIcon from "~/assets/icons/clarity_plane-solid.svg?react";
import Calendar from "~/components/Calender";
import EventCard from "~/components/EventCard";

const Dashboard = () => {
  const activityItems = [
    {
      title: "Hours Left Today",
      icon: <BriefcaseIcon color="#396AFF" />,
      subtitle: "4 Hours",
      className: "bg-accent-blue"
    },
    {
      title: "Monthly Leaves",
      icon: <PlaneSolidIcon color="#6C6C7F" />,
      subtitle: "2 Left",
      className: "bg-accent-gray"
    },
    {
      title: "Documents",
      icon: <DocumentsIcon color="#55B65B" />,
      subtitle: "04",
      className: "bg-accent-green"
    }
  ];

  const events = [
    {
      description: "10:00 AM - 11:00 PM",
      icon: <SunIcon className="w-[24px] h-[24px]" />,
      title: "Morning Shift",
      subtitle: "Tomorrow",
      variant: "orange"
    },
    {
      description: "10:00 AM - 11:00 PM",
      icon: <OwlIcon className="w-[24px] h-[24px]" />,
      title: "Night Shift",
      subtitle: "13 Oct 2024",
      variant: "purple"
    },
    {
      description: "10:00 AM - 11:00 PM",
      icon: <SunIcon className="w-[24px] h-[24px]" />,
      title: "Morning Shift",
      subtitle: "14 Oct 2024",
      variant: "orange"
    },
    {
      description: "10:00 AM - 11:00 PM",
      icon: <SunIcon className="w-[24px] h-[24px]" />,
      title: "Morning Shift",
      subtitle: "15 Oct 2024",
      variant: "orange"
    },
    {
      description: "Planned Off Day",
      icon: <PlaneIcon className="w-[24px] h-[24px]" />,
      title: "Leave",
      subtitle: "16 Oct 2024",
      variant: "default"
    }
  ] as const;

  return (
    <>
      <div className="flex gap-[16px]">
        <div className="rounded-md p-24 bg-white w-[330px] h-[520px]">
          <h2>Daily Hours</h2>
        </div>
        <div className="flex-grow">
          <div className="grid grid-cols-3 gap-[16px]">
            {activityItems.map(item => (
              <div
                key={item.title}
                className="flex gap-[16px] p-25 rounded-md bg-white"
              >
                <div
                  className={`rounded-xl ${item.className} flex justify-center items-center w-[60px] h-[60px]`}
                >
                  {item.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-14">{item.title}</h3>
                  <strong className="text-20">{item.subtitle}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-md bg-white flex gap-24 p-25 mt-16">
            <Calendar />
            <div className="flex-grow">
              {events.map((e, i) => (
                <EventCard {...e} className="mb-4" key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
