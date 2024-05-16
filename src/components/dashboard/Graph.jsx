import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    coc: 2000,
    amt: 2400,
  },
  {
    name: "Feb",
    coc: 3000,
    amt: 2210,
  },
  {
    name: "Mar",
    coc: 2000,
    amt: 2290,
  },
  {
    name: "Apr",
    coc: 2780,
    amt: 2000,
  },
  {
    name: "May",
    coc: 1890,
    amt: 2181,
  },
  {
    name: "Jun",
    coc: 2390,
    amt: 2500,
  },
  {
    name: "Jul",
    coc: 3490,
    amt: 2100,
  },
  {
    name: "Aug",
    coc: 1490,
    amt: 2100,
  },
  {
    name: "Sep",
    coc: 490,
    amt: 2100,
  },
  {
    name: "Oct",
    coc: 3490,
    amt: 2100,
  },
  {
    name: "Nov",
    coc: 790,
    amt: 2100,
  },
  {
    name: "Dec",
    coc: 3490,
    amt: 2100,
  },
];

export default function Graph() {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" padding={{ left: 10, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="coc" stroke="#82ca9d" />
    </LineChart>
  );
}
