import { Pie } from "react-chartjs-2";

const LastWeekClosedLeads = ({ leads }) => {
  const data = {
    labels: [leads.map((lead) => lead.name)],
  };
  return <></>;
};

export default LastWeekClosedLeads;
