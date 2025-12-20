import { Pie } from "react-chartjs-2";

const TotalLeadsClosed = ({ leads }) => {
  const data = {
    labels: ["Leads in pipeline"],
    datasets: [
      {
        data: [leads],
        backgroundColor: ["#4ade80"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Pie data={data}  />
    </>
  );
};

export default TotalLeadsClosed;
