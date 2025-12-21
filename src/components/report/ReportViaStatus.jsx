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
        backgroundColor: ["#3B82F6", "#F59E0B", "#8B5CF6", "#0EA5E9", "#22C55E"],
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
          padding: 15, // 🔥 THIS IS THE KEY FIX
        },
      },
      y: {
        beginAtZero: true,
        grace: "10%", // 🔥 adds headroom for tall bars
      },
    },
  };

  return (
    <div className="" style={{height: '600px'}}>
      <Bar data={data} options={options}/>
    </div>
  );
};

export default ReportViaStatus;
