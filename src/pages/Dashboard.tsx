import BriefcaseIcon from "~/assets/icons/briefcase.svg?react";
import PlaneSolidIcon from "~/assets/icons/clarity_plane-solid.svg?react";
import DocumentsIcon from "~/assets/icons/documents-linear.svg?react";
import SunIcon from "~/assets/icons/tabler_sun-filled.svg?react";
import OwlIcon from "~/assets/icons/light_owl-rounded.svg?react";
import PlaneIcon from "~/assets/icons/clarity_plane-solid.svg?react";
import ArrowLeft from "~/assets/icons/arrow-left.svg?react";
import ArrowRight from "~/assets/icons/arrow-right.svg?react";
import CalenderCheckIn from "~/assets/icons/calendar-check-in.svg?react";
import CalenderCheckOut from "~/assets/icons/calendar-check-out.svg?react";
import DotsVertical from "~/assets/icons/dots-vertical.svg?react";
import Calendar from "~/components/Calender";
import EventCard from "~/components/EventCard";
import RadialChart from "~/components/RadialChart";
import TimeCard from "~/components/TimeCard";
import Badge from "~/components/Badge";
import IconBtn from "~/components/IconBtn";
import WorkingHoursChart from "~/components/WorkingHoursChart";

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

  const leaves = [
    {
      description: "Medical Leave",
      date: "18 Oct 2024",
      status: {
        variant: "orange",
        label: "Pending"
      }
    },
    {
      description: "Medical Leave",
      date: "17 Oct 2024",
      status: {
        variant: "success",
        label: "Approved"
      }
    },
    {
      description: "Emergency",
      date: "12 Aug 2024",
      status: {
        variant: "success",
        label: "Approved"
      }
    },
    {
      description: "Casual Leave",
      date: "13 Jun 2024",
      status: {
        variant: "success",
        label: "Approved"
      }
    },
    {
      description: "Yearly Leave",
      date: "12 Jun 2024",
      status: {
        variant: "success",
        label: "Approved"
      }
    }
  ] as const;

  return (
    <div className="flex flex-col gap-16 mb-10">
      <div className="flex gap-[16px]">
        <div className="rounded-md flex gap-16 flex-col items-center p-24 bg-white w-[330px]">
          <h2 className="text-center text-20 font-semibold">Daily Hours</h2>
          <RadialChart />
          <div className="flex gap-4 w-full">
            <IconBtn variant="primary">
              <ArrowLeft />
            </IconBtn>
            <div className="flex-grow flex text-14 font-medium border border-gray-light-active rounded-sm bg-gray-light-hover items-center justify-center">
              12 Dec 2024
            </div>
            <IconBtn variant="primary">
              <ArrowRight />
            </IconBtn>
          </div>
          <div className="grid grid-cols-2 gap-8 w-full">
            <TimeCard
              icon={<CalenderCheckIn />}
              time="10:09 AM"
              title="Check in"
              variant="success"
            />
            <TimeCard
              icon={<CalenderCheckOut />}
              time="07:09 PM"
              title="Check out"
              variant="danger"
            />
          </div>
          <button className="py-16 text-16 font-semibold w-full text-white rounded-lg bg-blue-normal hover:bg-blue-normal-hover">
            Check Out
          </button>
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
                  <strong className="text-20 font-semibold text-dark-active">
                    {item.subtitle}
                  </strong>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-md bg-white flex gap-24 p-25 mt-16">
            <Calendar />
            <div className="flex-grow py-10">
              {events.map((e, i) => (
                <EventCard {...e} className="mb-4" key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16">
        <div className="rounded-md bg-white p-25">
          <div className="flex justify-between">
            <h2 className="text-20 font-semibold">Working Hours</h2>

            <div className="flex gap-4">
              <IconBtn variant="secondary">
                <ArrowLeft />
              </IconBtn>
              <div className="flex-grow flex text-14 font-medium border border-gray-normal rounded-sm text-gray-dark-active items-center justify-center px-8">
                Oct 08 - Oct 17
              </div>
              <IconBtn variant="secondary">
                <ArrowRight />
              </IconBtn>
            </div>
          </div>

          <WorkingHoursChart
            data={[
              { day: "Mon", start: 36000, end: 64800 },
              { day: "Tue", start: 43200, end: 57600 },
              { day: "Wed", start: 36000, end: 68400 },
              { day: "Thu", start: 50400, end: 64800 },
              { day: "Fri", start: 43200, end: 57600 },
              { day: "Sat", start: 54000, end: 61200 },
              { day: "Sun", start: 50400, end: 64800 }
            ]}
          />
        </div>
        <div className="rounded-md bg-white pt-25">
          <h2 className="text-20 font-semibold text-gray-darker px-25 mb-16">
            Leaves
          </h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-light-active text-left border-b border-blueGray-accent">
                <th className="px-6 py-16 font-medium text-14 text-primary-gray">
                  Reason
                </th>
                <th className="px-6 py-16 font-medium text-14 text-primary-gray">
                  Requested Date
                </th>
                <th className="px-6 py-16 font-medium text-14 text-primary-gray">
                  Status
                </th>
                <th className="px-6 py-16 font-medium text-14 text-primary-gray"></th>
              </tr>
            </thead>
            <tbody>
              {leaves.map(
                ({ date, description, status: { label, variant } }, i) => (
                  <tr key={i} className="border-b border-blueGray-accent">
                    <td className="px-6 py-16 text-12">{description}</td>
                    <td className="px-6 py-16 text-12">{date}</td>
                    <td className="px-6 py-16 text-12">
                      <Badge variant={variant}>{label}</Badge>
                    </td>
                    <td className="px-6 py-16 text-12">
                      <IconBtn variant="default">
                        <DotsVertical />
                      </IconBtn>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
