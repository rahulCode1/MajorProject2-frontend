import { Bar } from "react-chartjs-2";

const LeadsClosedByAgent = ({ leads }) => {
  const data = {
    labels: leads.map(
      (lead) => `${lead && lead.salesAgent ? lead.salesAgent : "Unknown"}`
    ),
    datasets: [
      {
        label: "Leads closed by sales agent.",
        data: leads.map((lead) => lead.closedLeads),
        backgroundColor: [
          "#3B82F6",
          "#22C55E",
          "#F59E0B",
          "#EF4444",
          "#8B5CF6",
          "#0EA5E9",
          "#EC4899",
          "#10B981",
          "#F97316",
          "#6366F1",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
        <p className="text-muted mb-3">
          Performance breakdown by sales team member
        </p>

        {/* RESPONSIVE HEIGHT CONTAINER */}
        <div
          className="w-100"
          style={{
            height: "300px", // mobile
          }}
        >
          <div
            className="w-100 h-100 d-none d-md-block"
            style={{ height: "500px" }} // tablet & desktop
          >
            <Bar data={data} options={options} />
          </div>

          <div className="w-100 h-100 d-block d-md-none">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsClosedByAgent;
