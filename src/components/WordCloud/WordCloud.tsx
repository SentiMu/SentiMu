import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface WordCloudData {
    x: string;
    y: number;
    color?: string;
}

const wordCloudData: WordCloudData[] = [
    { x: "Excellent", y: 64, color: "#69AE34" },
    { x: "Good", y: 40, color: "#69AE34" },
    { x: "Average", y: 32, color: "#7D8998" },
    { x: "Poor", y: 14, color: "#FE6E73" },
    { x: "Terrible", y: 8, color: "#FE6E73" },
    { x: "Quality", y: 25, color: "#69AE34" },
    { x: "Service", y: 22, color: "#69AE34" },
    { x: "Price", y: 18, color: "#7D8998" },
    { x: "Delivery", y: 16, color: "#7D8998" },
    { x: "Support", y: 4, color: "#69AE34" },
];

const options: ApexOptions = {
    chart: {
        fontFamily: "Satoshi, sans-serif",
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ['#fff']
        },
        formatter: function (text: string) {
            return text;
        }
    },
    series: [{
        data: wordCloudData
    }],
    plotOptions: {
        treemap: {
            distributed: true,
            enableShades: false
        }
    },
    colors: wordCloudData.map(item => item.color)
};

const WordCloud: React.FC = () => {
    return (
        <div className="col-span-12 rounded-sm border h-full border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
            <div className="mb-6">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    Word Cloud
                </h4>
            </div>

            <div className="h-80">
                <ReactApexChart
                    options={options}
                    series={options.series}
                    type="treemap"
                    height="100%"
                />
            </div>
        </div>
    );
};

export default WordCloud;