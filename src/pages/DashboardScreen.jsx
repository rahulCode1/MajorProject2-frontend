import axios from "axios";
import DashboardItem from "../components/deshboard/DeshboardItem";
import useLeadContext from "../context/LeadContext";
import { useRouteLoaderData } from "react-router-dom";
const DashboardScreen = () => {
  const allLeads = useRouteLoaderData("allLeads");

  return (
    <>
      <div className="">
        <DashboardItem leads={allLeads} />
      </div>
    </>
  );
};

export default DashboardScreen;

export const loader = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/leads`
    );

    return response?.data?.leads;
  } catch (error) {
    throw new Response(
      JSON.stringify({
        message: error.response?.data?.message || "Failed to fetch leads.",
      }),
      { status: error.response?.status || 500 }
    );
  }
};
