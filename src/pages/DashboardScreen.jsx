import DashboardItem from "../components/deshboard/DeshboardItem";
import useLeadContext from "../context/LeadContext";
const DashboardScreen = () => {
  const { allLeads } = useLeadContext();
  return (
    <>
      <div className="">
        <DashboardItem leads={allLeads} />
      </div>
    </>
  );
};

export default DashboardScreen;
