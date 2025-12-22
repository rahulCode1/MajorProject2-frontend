import { Bar } from "react-chartjs-2";

const ReportViaStatus = ({ allLeads }) => {
  const groupedLeads = allLeads.reduce((acc, curr) => {
    const key = curr.status;

    if (!acc[key]) {
      acc[key] = 0;
    }

    acc[key] += 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(groupedLeads).reverse(),
    datasets: [
      {
        label: "Leads via status",
        data: Object.values(groupedLeads),
        backgroundColor: [
          "#3B82F6",
          "#F59E0B",
          "#8B5CF6",
          "#0EA5E9",
          "#22C55E",
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
        <h5 className="card-title mb-2">Leads by their Status </h5>
        <p className="text-muted mb-3">
          Performance breakdown of leads via Status.
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

export default ReportViaStatus;
