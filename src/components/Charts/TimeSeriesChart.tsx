"use client";

import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#69AE34", "#FE6E73", "#7D8998"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    custom: function({ series, dataPointIndex, w }) {
      const positiveValue = series[0][dataPointIndex];
      const negativeValue = series[1][dataPointIndex];
      const neutralValue = series[2][dataPointIndex];
      const totalReview = positiveValue + negativeValue + neutralValue;
      
      return `<div class="p-2 bg-white border rounded shadow">
        <div class="mb-1"><strong>${w.globals.categoryLabels[dataPointIndex]}</strong></div>
        <div class="text-[#69AE34]">Positive Review: ${positiveValue}</div>
        <div class="text-[#FE6E73]">Negative Review: ${negativeValue}</div>
        <div class="text-[#7D8998]">Neutral Review: ${neutralValue}</div>
        <div class="mt-1 pt-1 border-t"><strong>Total Review: ${totalReview}</strong></div>
      </div>`;
    }
  },
  stroke: {
    width: [2, 2, 2],
    curve: "straight",
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#69AE34 ", "#FE6E73", "#7D8998"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Sep", "Oct", "Nov", "Dec", "Jan", "Feb",
      "Mar", "Apr", "May", "Jun", "Jul", "Aug",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 200,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const TimeSeriesChart: React.FC = () => {
  const series: ChartOneState['series'] = [
    {
      name: "Positive Review",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
    },
    {
      name: "Negative Review",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
    },
    {
      name: "Neutral Review",
      data: [5, 7, 8, 5, 6, 8, 10, 7, 9, 8, 6, 7],
    },
  ];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#69AE34]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#69AE34]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#69AE34]">Positive Review</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#FE6E73]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#FE6E73]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#FE6E73]">Negative Review</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#7D8998]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#7D8998]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#7D8998]">Neutral Review</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default TimeSeriesChart;