import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import {
  showLoadingToast,
  showErrorToast,
  showSuccessToast,
} from "../utils/toast";

const LeadContext = createContext();

const useLeadContext = () => useContext(LeadContext);

export default useLeadContext;

export const LeadProvider = ({ children }) => {
  const [allLeads, setLeads] = useState([]);
  const [isLeadsLoading, setIsLeadsLoding] = useState(false);
  const [salesAgent, setSalesAgent] = useState([]);
  const [leadsError, setLeadsError] = useState();
  const [lastWeekClosedLeads, setLastWeekClosedLeads] = useState([]);
  const [leadsNotOrInPipeline, setLeadsNotOrInPipeline] = useState(0);
  const [leadsClosedByAgent, setLeadsClosedByAgent] = useState([]);

  const apiUrl = process.env.REACT_APP_BACKEND_URL;

  const fetchAllLeads = async () => {
    try {
      const response = await axios.get(`${apiUrl}/leads`);
      const leads = response.data?.leads;

      // console.log(response)

      setLeads(leads || []);
    } catch (error) {}
  };
  const fetchAllSalesAgent = async () => {
    try {
      const response = await axios.get(`${apiUrl}/agents`);
      const salesAgent = response.data?.allSalesAgents;

      setSalesAgent(salesAgent || []);
    } catch (error) {}
  };

  const getAllLeadsClosedLastWeek = async () => {
    const response = await axios.get(`${apiUrl}/report/last-week`);
    setLastWeekClosedLeads(response?.data.leads);
  };
  const getTotalLeadsInPipeline = async () => {
    const response = await axios.get(`${apiUrl}/report/pipeline`);

    console.log(response);

    setLeadsNotOrInPipeline({
      activeLeads: response?.data.activeLeads,
      closedLeads: response?.data.closedLeads,
    });
  };
  const getLeadsClosedByAgent = async () => {
    const response = await axios.get(`${apiUrl}/report/closed-by-agent`);
    setLeadsClosedByAgent(response?.data.leads);
  };

  useEffect(() => {
    fetchAllLeads();
    fetchAllSalesAgent();
    getAllLeadsClosedLastWeek();
    getTotalLeadsInPipeline();
    getLeadsClosedByAgent();
  }, []);

  return (
    <LeadContext.Provider
      value={{
        allLeads,
        isLeadsLoading,
        leadsError,
        salesAgent,
        lastWeekClosedLeads,
        leadsNotOrInPipeline,
        leadsClosedByAgent,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
};
