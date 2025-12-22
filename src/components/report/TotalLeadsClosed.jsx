import { Pie } from "react-chartjs-2";

const TotalLeadsClosed = ({ leadsNotOrInPipeline }) => {
  const data = {
    labels: ["Active Leads", "Closed Leads"],
    datasets: [
      {
        data: [
          leadsNotOrInPipeline.activeLeads,
          leadsNotOrInPipeline.closedLeads,
        ],
        backgroundColor: ["#4ade80", "#FFBF00"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 14,
          font: { size: 13 },
        },
      },
      datalabels: {
        font: { weight: "bold", size: 14 },
      },
    },
  };

  return (
    <div className=" h-100">
      <div className="card-body d-flex flex-column justify-content-between">
        {/* TITLE */}
        <div className="text-center mb-3">
          <h5 className="fw-bold mb-1">Lead Status Overview</h5>
          <p className="text-muted mb-0">
            Active vs Closed leads
          </p>
        </div>

        {/* COUNTS (BIGGER) */}
        <div className="d-flex justify-content-center gap-5 mb-3">
          <div className="text-center">
            <div className="fw-bold text-success fs-3">
              {leadsNotOrInPipeline.activeLeads}
            </div>
            <small className="text-muted">Active</small>
          </div>

          <div className="text-center">
            <div className="fw-bold text-warning fs-3">
              {leadsNotOrInPipeline.closedLeads}
            </div>
            <small className="text-muted">Closed</small>
          </div>
        </div>

        {/* CHART (RESPONSIVE SIZE) */}
        <div
          className="mx-auto w-100"
          style={{
            maxWidth: "360px",   // 🔥 bigger on desktop
            minHeight: "320px",  // 🔥 prevents small look
          }}
        >
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TotalLeadsClosed;
