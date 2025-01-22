import BriefcaseIcon from "~/assets/icons/briefcase.svg?react";
import PlaneSolidIcon from "~/assets/icons/clarity_plane-solid.svg?react";
import DocumentsIcon from "~/assets/icons/documents-linear.svg?react";
import Calendar from "~/components/Calender";

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

          <div className="rounded-md bg-white flex p-25 mt-16">
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
