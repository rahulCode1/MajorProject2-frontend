import { Bar } from "react-chartjs-2";

const LeadsClosedByAgent = ({ leads }) => {
  const data = {
    labels: leads.map((lead) => lead.salesAgent),
    datasets: [
      {
        label: "Days to Close",
        data: leads.map((lead) => lead.closedLeads),
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
      <Bar data={data} />
    </>
  );
};

export default LeadsClosedByAgent;
