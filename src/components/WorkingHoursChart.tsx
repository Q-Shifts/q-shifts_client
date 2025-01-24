import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  ChartOptions,
  ChartData
} from "chart.js";
import { useRef } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const data = [
  { day: "Mon", start: 36000, end: 64800 }, // 10:00 AM to 6:00 PM
  { day: "Tue", start: 43200, end: 57600 }, // 12:00 PM to 4:00 PM
  { day: "Wed", start: 36000, end: 68400 }, // 10:00 AM to 7:00 PM
  { day: "Thu", start: 50400, end: 64800 }, // 2:00 PM to 6:00 PM
  { day: "Fri", start: 43200, end: 57600 }, // 12:00 PM to 4:00 PM
  { day: "Sat", start: 54000, end: 61200 }, // 3:00 PM to 5:00 PM
  { day: "Sun", start: 50400, end: 64800 } // 2:00 PM to 6:00 PM
];

// Helper function to format time
const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
};

// Transform data for Chart.js
const chartData: ChartData<"bar"> = {
  labels: data.map(d => d.day),

  datasets: [
    {
      data: data.map(d => d.end / 3600 - d.start / 3600), // Bar height (hours)
      backgroundColor: "#E6EEF5",
      borderRadius: 40,
      borderSkipped: false,
      base: data.map(d => d.start / 3600), // Bar start position
      barThickness: 22,
      hoverBackgroundColor: "#3354F4"
    }
  ]
};

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
      external: context => {
        // Get tooltip model
        const { tooltip } = context;
        const chart = context.chart;

        // Remove previous tooltips
        let tooltipEl = document.getElementById("chartjs-custom-tooltip");
        if (!tooltipEl) {
          tooltipEl = document.createElement("div");
          tooltipEl.id = "chartjs-custom-tooltip";
          tooltipEl.style.position = "absolute";
          tooltipEl.style.pointerEvents = "none";
          tooltipEl.style.transition = "all 0.2s ease";
          document.body.appendChild(tooltipEl);
        }

        if (tooltip.opacity === 0) {
          tooltipEl.style.opacity = "0";
          return;
        }

        // Get hovered bar index
        const activeElement = chart.getActiveElements()[0];
        if (!activeElement) return;
        const index = activeElement.index;

        // Calculate positions
        const bar = chart.getDatasetMeta(0).data[index];
        const barX = bar.x;
        const barYTop = bar.y; // Top of the bar
        const barYBottom = bar.base; // Bottom of the bar

        // Tooltip content
        const startTime = formatTime(data[index].start);
        const endTime = formatTime(data[index].end);

        // HTML for tooltips
        tooltipEl.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
            <div style="
              background: #EDF2F7;
              color: #3354F4;
              font: 600 12px 'SF Pro Text';
              padding: 10px 12px;
              border-radius: 12px;
              white-space: nowrap;
              transform: translateY(-15px);
            ">
              ${endTime}
            </div>
            <div style="
              background: #EDF2F7;
              color: #3354F4;
              font: 600 12px 'SF Pro Text';
              padding: 10px 12px;
              border-radius: 12px;
              white-space: nowrap;
              transform: translateY(15px);
            ">
              ${startTime}
            </div>
          </div>
        `;

        // Position tooltip
        tooltipEl.style.opacity = "1";
        tooltipEl.style.left = `${chart.canvas.offsetLeft + barX}px`;
        tooltipEl.style.top = `${
          chart.canvas.offsetTop + (barYTop + barYBottom) / 2
        }px`;
      }
    }
  }
};

export default function Chart() {
  const tooltipElm = useRef<HTMLDivElement>();
  const toolTipTop = useRef<HTMLDivElement>();
  const toolTipBottom = useRef<HTMLDivElement>();

  return (
    <div className="relative" style={{ height: "400px" }}>
      <div className="tooltip flex flex-col absolute" ref={tooltipElm}>
        <div ref={toolTipTop}></div>
        <div ref={toolTipBottom}></div>
      </div>
      <Bar data={chartData} options={options} />
    </div>
  );
}
