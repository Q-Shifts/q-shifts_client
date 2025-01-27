import { Bar } from "react-chartjs-2";
import { ChartOptions, ChartData, BarElement } from "chart.js";
import { useRef } from "react";

// Helper function to format time
const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const h12 = hours > 12 ? hours - 12 : hours;

  return `${h12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
};

export default function Chart({
  data
}: {
  data: { day: string; end: number; start: number }[];
}) {
  const tooltipEl = useRef<HTMLDivElement | null>(null);
  const toolTipTop = useRef<HTMLDivElement | null>(null);
  const toolTipBottom = useRef<HTMLDivElement | null>(null);
  const middleRef = useRef<HTMLDivElement | null>(null);

  // Transform data for Chart.js
  const chartData: ChartData<"bar"> = {
    labels: data.map(d => d.day),

    datasets: [
      {
        data: data.map(d => [d.start / 3600, d.end / 3600]), // Bar height (hours)
        backgroundColor: "#E6EEF5",
        borderRadius: 40,
        borderSkipped: false,
        barThickness: 22,
        hoverBackgroundColor: "#3354F4"
      }
    ]
  };

  console.log(chartData);

  // Chart.js options
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#333", font: { weight: "bold" } }
      },
      y: {
        min: 0,
        max: 24,
        ticks: {
          stepSize: 1,
          callback: (value: number | string) =>
            `${value.toString().padStart(2, "0")}:00`
        },
        grid: { color: "#F2F2F2" }
      }
    },
    plugins: {
      tooltip: {
        enabled: false,
        position: "average",
        external: context => {
          // Get tooltip model
          const { tooltip } = context;
          const chart = context.chart;

          if (tooltip.opacity === 0 && tooltipEl.current) {
            tooltipEl.current.style.opacity = "0";
            return;
          }

          // Get hovered bar index
          const activeElement = chart.getActiveElements()[0];
          if (!activeElement) return;
          const index = activeElement.index;

          // Calculate positions
          const bar = chart.getDatasetMeta(0).data[index] as BarElement;
          const barX = bar.x;
          const height = (bar as unknown as { height: number }).height;

          // Tooltip content
          const startTime = formatTime(data[index].start);
          const endTime = formatTime(data[index].end);

          if (toolTipTop.current) {
            toolTipTop.current.innerHTML = endTime;
          }

          if (toolTipBottom.current) {
            toolTipBottom.current.innerHTML = startTime;
          }

          // Position tooltip
          if (tooltipEl.current && middleRef.current) {
            middleRef.current.style.height = `${height + 30}px`;

            tooltipEl.current.style.opacity = "1";
            tooltipEl.current.style.left = `${
              chart.canvas.offsetLeft + barX
            }px`;
            tooltipEl.current.style.top = `${
              chart.canvas.offsetTop + tooltip.caretY - 60
            }px`;
          }
        }
      }
    }
  };

  return (
    <div className="relative" style={{ height: "400px" }}>
      <div
        className="flex flex-col absolute justify-between"
        style={{ transform: "translateX(-50%)", pointerEvents: "none" }}
        ref={tooltipEl}
      >
        <div
          className="bg-gray-light-active text-blue-normal py-10 px-12 font-semibold rounded-lg whitespace-nowrap"
          ref={toolTipTop}
        ></div>
        <div ref={middleRef}></div>
        <div
          className="bg-gray-light-active text-blue-normal py-10 px-12 font-semibold rounded-lg whitespace-nowrap"
          ref={toolTipBottom}
        ></div>
      </div>
      <Bar data={chartData} options={options} />
    </div>
  );
}
