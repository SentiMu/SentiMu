/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import ReviewChartItem from "./ReviewChartItem";

interface ChartThreeState {
  series: number[];
}

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
};

const DetailedReviewChart: React.FC = () => {



  const [state, setState] = useState<ChartThreeState>({
    series: [80, 14, 6],
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-4">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Review Analysis
          </h5>
        </div>
      </div>

      {/* Chart */}
      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart options={options} series={state.series} type="donut" />
        </div>
      </div>
      {/* End of Chart */}

      <div className="-mx-8 flex flex-wrap px-5 items-center justify-center gap-y-3">
        <ReviewChartItem
          label="Positive"
          percentage={state.series[0]}
          color="#69AE34"
        />
        <ReviewChartItem
          label="Negative"
          percentage={state.series[1]}
          color="#FE6E73"
        />
        <ReviewChartItem
          label="Neutral"
          percentage={state.series[2]}
          color="#7D8998"
        />
      </div>
    </div>
  );
};

export default DetailedReviewChart;