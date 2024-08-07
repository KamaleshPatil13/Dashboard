import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {
  const data = {
    labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
    datasets: [
      {
        label: 'Activity',
        data: [5000, 8000, 6000, 7000, 2000, 10000, 12000, 15000, 9000, 11000, 7000],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Activity',
        color: '#FFFFFF',
        font: {
          size: 20,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#FFFFFF',
        },
      },
      y: {
        grid: {
          color: '#444444',
        },
        ticks: {
          color: '#FFFFFF',
        },
      },
    },
  };

  return (
    <div className="bg-gray-900 p-4 mt-5 max-h-fit rounded-lg w-full">
      <Bar data={data} options={options} style={{width: "100%", height: "70%"}} />
    </div>
  );
};

export default Chart;
