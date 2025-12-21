import { Bar } from "react-chartjs-2";

const LeadsClosedByAgent = ({ leads }) => {
  const data = {
    labels: leads.map((lead) => `${lead.salesAgent}`),
    datasets: [
      {
        label: "Leads closed by sales agent.",
        data: leads.map((lead) => lead.closedLeads),
        backgroundColor: "#4f46e5",
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
    <div className="card">
      <div className="card-body">
        <h5 className="card-title mb-2">Leads Closed by Agent</h5>
        <p className="text-muted mb-4">
          Performance breakdown by sales team member
        </p>
        <div className="ratio ratio-16x9">
          <div style={{ margin: "auto" , height: '500px'}}>
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeadsClosedByAgent;
