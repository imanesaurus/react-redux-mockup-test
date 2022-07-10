
import {
    CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title,
    Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

export const LineCharts = ({ data }) => {
  return <Line options={options} data={data} />;
}
