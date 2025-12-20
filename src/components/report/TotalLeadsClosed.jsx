import { Pie } from "react-chartjs-2";

const TotalLeadsClosed = ({ leadsNotOrInPipeline }) => {
  const data = {
    labels: [
      `Active leads: ${leadsNotOrInPipeline.activeLeads} .`,
      `Closed leads: ${leadsNotOrInPipeline.closedLeads}. `,
    ],
    datasets: [
      {
        label: "Leads",
        data: [
          leadsNotOrInPipeline.activeLeads,
          leadsNotOrInPipeline.closedLeads,
        ],
        backgroundColor: ["#4ade80", "	#FFBF00"],
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
      <Pie data={data} />
    </>
  );
};

export default TotalLeadsClosed;
