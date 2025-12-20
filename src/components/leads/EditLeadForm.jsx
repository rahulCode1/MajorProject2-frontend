import { useEffect, useState } from "react";
import { useNavigate, useParams, useRouteLoaderData } from "react-router-dom";
import axios from "axios";
import SubmitLoadingSpinner from "../../components/SubmitLoadingSpinnr";
import {
  showLoadingToast,
  showSuccessToast,
  showErrorToast,
} from "../../utils/toast";
import useLeadContext from "../../context/LeadContext";

const EditLeadForm = () => {
  const initialData = {
    name: "",
    source: "",
    salesAgent: "",
    status: "",
    tags: [],
    timeToClose: "",
    priority: "",
    closedAt: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { salesAgent } = useLeadContext();
  const leadId = useParams().id;
  const navigate = useNavigate();
  const { lead } = useRouteLoaderData("leadId");

  // handle all input changes
  const onChangeForm = (e) => {
    const { id, value, type, checked } = e.target;

    // handle checkboxes (tags)
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        tags: checked
          ? [...prev.tags, value]
          : prev.tags.filter((tag) => tag !== value),
      }));
      return;
    }

    // handle normal inputs & selects
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = showLoadingToast("Update lead...");

    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/leads/${leadId}`,
        formData
      );
      

        setFormData(initialData);
      showSuccessToast(toastId, "Lead  update successfully.");
    } catch (error) {
      setError(
        error.response?.data?.message || "Error occurred while update lead."
      );
      showErrorToast(
        toastId,
        error.response?.data?.message || "Error occurred while update lead ❌"
      );
    } finally {
      setIsLoading(false);
    }
    navigate(`/leads/${leadId}`);
  };



  useEffect(() => {
    setFormData(lead);
  }, []);

  return (
    <form className="container py-4" onSubmit={handleSubmit}>
      {/* Lead Name */}
      <div className="mb-3">
        <label className="form-label">Lead Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          onChange={onChangeForm}
          value={formData.name}
          required
        />
      </div>

      {/* Source & Closed At */}
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <label className="form-label">Lead Source</label>
            <select
              id="source"
              className="form-select"
              value={formData.source}
              onChange={onChangeForm}
              required
            >
              <option value="" disabled>
                Select Lead Source
              </option>
              <option value="Website">Website</option>
              <option value="Referral">Referral</option>
              <option value="Cold Call">Cold Call</option>
            </select>
          </div>
        </div>

        <div className="col">
          <div className="mb-3">
            <label className="form-label" htmlFor="closedAt">
              Closed At
            </label>
            <input
              type="date"
              id="closedAt"
              className="form-control"
              value={formData.closedAt.split("T")[0]}
              onChange={onChangeForm}
              required
            />
          </div>
        </div>
      </div>

      {/* Status & Sales Agent */}
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <label className="form-label">Lead Status</label>
            <select
              id="status"
              className="form-select"
              value={formData.status}
              onChange={onChangeForm}
              required
            >
              <option value="" disabled>
                Lead Status
              </option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Proposal Sent">Proposal Sent</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        <div className="col">
          <div className="mb-3">
            <label className="form-label">Assigned Sales Agent</label>
            <select
              id="salesAgent"
              className="form-select"
              value={formData.salesAgent._id}
              onChange={onChangeForm}
              required
            >
              {salesAgent.map((agent) => (
                <option value={agent.id} id="salesAgent">
                  {agent.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Time to Close & Priority */}
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <label className="form-label">Time to Close (days)</label>
            <input
              type="number"
              id="timeToClose"
              className="form-control"
              value={formData.timeToClose}
              onChange={onChangeForm}
              required
            />
          </div>
        </div>

        <div className="col">
          <div className="mb-3">
            <label className="form-label">Priority</label>
            <select
              id="priority"
              className="form-select"
              value={formData.priority}
              onChange={onChangeForm}
              required
            >
              <option value="" disabled>
                Priority
              </option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-3">
        <label className="form-label">Tags</label>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            value="High Value"
            checked={formData.tags.includes("High Value")}
            onChange={onChangeForm}
          />
          <label className="form-check-label">High Value</label>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            value="Follow-up"
            checked={formData.tags.includes("Follow-up")}
            onChange={onChangeForm}
          />
          <label className="form-check-label">Follow-up</label>
        </div>
      </div>

      <button disabled={isLoading} type="submit" className="btn btn-primary">
        {isLoading && <SubmitLoadingSpinner />}
        {isLoading ? "Update..." : "Update Lead"}
      </button>
    </form>
  );
};

export default EditLeadForm;

export const loader = async ({ request, params }) => {
  const leadId = params.id;

  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/leads/${leadId}`);

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
