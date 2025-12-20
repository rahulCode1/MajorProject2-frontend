import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SubmitLoadingSpinner from "../components/SubmitLoadingSpinnr";
import useLeadContext from "../context/LeadContext";

import {
  showLoadingToast,
  showSuccessToast,
  showErrorToast,
} from "../utils/toast";

const LeadForm = () => {
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
    const toastId = showLoadingToast("Adding lead...");

    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/leads`,
        formData
      );
      // console.log("Lead created:", response.data);

      setFormData(initialData);
      showSuccessToast(toastId, "New lead added successfully.");
    } catch (error) {
      setError(
        error.response?.data?.message || "Error occurred while add new lead."
      );
      showErrorToast(
        toastId,
        error.response?.data?.message || "Error occurred while adding lead ❌"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container-fluid p-0">
        {/* Header */}
        <div className="bg-white shadow-sm border-bottom sticky-top">
          <div className="container-fluid px-4 py-3">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="h3 mb-0 fw-bold">Add New Lead</h1>
              <Link to="/leads" className="btn btn-outline-secondary">
                <i className="bi bi-arrow-left me-2"></i>
                Back to Leads
              </Link>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit}>
                    {/* Lead Name */}
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Lead Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={formData.name}
                        onChange={onChangeForm}
                        required
                      />
                    </div>

                    {/* Source & Closed At */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="source" className="form-label">
                            Lead Source
                          </label>
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

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="closedAt" className="form-label">
                            Closed At
                          </label>
                          <input
                            type="date"
                            id="closedAt"
                            className="form-control"
                            value={formData.closedAt}
                            onChange={onChangeForm}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Status & Sales Agent */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="status" className="form-label">
                            Lead Status
                          </label>
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

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="salesAgent" className="form-label">
                            Assigned Sales Agent
                          </label>
                          <select
                            id="salesAgent"
                            className="form-select"
                            value={formData.salesAgent}
                            onChange={onChangeForm}
                            required
                          >
                            <option value="" disabled>
                              Assigned Sales Agent
                            </option>
                            {salesAgent.map((agent) => (
                              <option value={agent.id} key={agent.id}>{agent.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Time to Close & Priority */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="timeToClose" className="form-label">
                            Time to Close (days)
                          </label>
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

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="priority" className="form-label">
                            Priority
                          </label>
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
                    <div className="mb-4">
                      <label className="form-label">Tags</label>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="tag1"
                          value="High Value"
                          checked={formData.tags.includes("High Value")}
                          onChange={onChangeForm}
                        />
                        <label className="form-check-label" htmlFor="tag1">
                          High Value
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="tag2"
                          value="Follow-up"
                          checked={formData.tags.includes("Follow-up")}
                          onChange={onChangeForm}
                        />
                        <label className="form-check-label" htmlFor="tag2">
                          Follow-up
                        </label>
                      </div>
                    </div>

                    <div className="d-flex gap-2">
                      <button
                        disabled={isLoading}
                        type="submit"
                        className="btn btn-primary"
                      >
                        {isLoading && <SubmitLoadingSpinner />}
                        {isLoading ? "Adding..." : "Add New Lead"}
                      </button>
                    
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadForm;
