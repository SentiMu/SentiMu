import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { DataContext } from '@/app/layout';

const WordCloud: React.FC = () => {

    const { wordCloud } = React.useContext(DataContext);
    const wordCloudData = wordCloud || [];

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