import axios from "axios";
import { useRouteLoaderData } from "react-router-dom";
import LeadManagement from "../components/leads/LeadManagement";

const LeadManagementPage = () => {
  const { lead, comments } = useRouteLoaderData("leadId");

  return (
    <>
      <LeadManagement lead={lead} comments={comments} />
    </>
  );
};

export default LeadManagementPage;

export const loader = async ({ request, params }) => {
  const leadId = params.id;

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/leads/${leadId}`
    );

    return response.data;
  } catch (error) {
    throw new Response(
      JSON.stringify({
        message:
          error.response?.data?.message || "Failed to fetch lead details.",
      }),
      { status: error.response?.status || 500 }
    );
  }
};
