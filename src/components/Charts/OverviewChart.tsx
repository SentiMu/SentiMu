/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApexOptions } from "apexcharts";
import React, { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import ReviewChartItem from "./OverviewChartItem";
import { DataContext } from "@/app/layout";

const DetailedReviewChart: React.FC = () => {

  const { overview } = useContext(DataContext);

  const series: number[] = overview
    ? [overview.positive, overview.negative, overview.neutral]
    : [0, 0, 0];

  const options: ApexOptions = {
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "donut",
    },
    colors: ["#69AE34", "#FE6E73", "#7D8998"],
    labels: ["Positive", "Negative", "Neutral"],
    legend: {
      show: false,
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
    series: series,
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-4">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Overview Analysis
          </h5>
        </div>
      </div>

      {/* Chart */}
      <div className="mb-2">
        <div className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={options.series}
            type="donut"
          />
        </div>
      </div>
      {/* End of Chart */}

      <div className="-mx-8 flex flex-wrap px-5 items-center justify-center gap-y-5">
        <ReviewChartItem
          label="Positive"
          percentage={series[0]}
          color="#69AE34"
        />
        <ReviewChartItem
          label="Negative"
          percentage={series[1]}
          color="#FE6E73"
        />
        <ReviewChartItem
          label="Neutral"
          percentage={series[2]}
          color="#7D8998"
        />
      </div>
    </div>
  );
};

export default DetailedReviewChart;