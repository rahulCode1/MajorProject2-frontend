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
    layout: {
      padding: { top: 20 },
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "top",
        offset: 6,
        clamp: true,
        font: { weight: "bold" },
      },
    },
    scales: {
      x: {
        ticks: {
          padding: 15,
        },
      },
      y: {
        beginAtZero: true,
        grace: "10%",
      },
    },
  };

  return (
    <div style={{ width: "400px", height: "400px", margin: "auto" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default TotalLeadsClosed;
