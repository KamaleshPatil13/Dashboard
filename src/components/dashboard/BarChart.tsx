import Chart from "react-apexcharts";

type chartprops = {
  chartOptions: any;
  chartData: [];
};

const BarChart = ({ chartOptions, chartData }: chartprops) => {
  return (
    <>
      <div>BarChart</div>
      <Chart
        options={chartOptions}
        series={chartData}
        type="bar"
        width="100%"
        height="100%"
      />
    </>
  );
};

export default BarChart;
