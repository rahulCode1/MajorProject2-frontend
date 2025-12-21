import axios from "axios";
import { redirect } from "react-router-dom";
import LeadManagement from "../components/leads/LeadManagement";
import {
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../utils/toast";

const LeadManagementPage = () => {


  return (
    <>
      <LeadManagement />
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

export const actions = async ({ request, params }) => {
  const formData = await request.formData();
  const leadId = params.id;
  const toastId = showLoadingToast("Adding new agent...");

  const data = {
    name: formData.get("name"),
    author: formData.get("author"),
    commentText: formData.get("commentText"),
  };

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/leads/${leadId}/comments`,
      data
    );

    showSuccessToast(
      toastId,
      response?.data?.message || "Comment added successfully."
    );
    return redirect(`/leads/${leadId}`);
  } catch (error) {
    showErrorToast(
      leadId,
      error.response?.data?.message || "Error occurred while add comment."
    );
  }
};
