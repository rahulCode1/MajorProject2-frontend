import SalesAgentsCard from "../components/SalesAgentCard";
import useLeadContext from "../context/LeadContext";
const SalesAgent = () => {
   const { salesAgent } = useLeadContext();
  return (
    <>
      <SalesAgentsCard salesAgent={salesAgent}/>
    </>
  );
};

export default SalesAgent;
