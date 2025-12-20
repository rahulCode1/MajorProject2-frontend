import { useState } from "react";
import axios from "axios";
import {
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../utils/toast";
import SubmitLoadingSpinner from "../components/SubmitLoadingSpinnr";
import useLeadContext from "../context/LeadContext";

const CommentPage = ({ leadId }) => {
  const initialData = {
    author: "",
    commentText: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const { salesAgent } = useLeadContext();

  const onChangeForm = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmitComment = async (e) => {
    const toastId = showLoadingToast("Adding comment...");
    e.preventDefault();

    if (!formData.author || formData.commentText.trim() === "") {
      return showErrorToast(toastId, "Please add comment & select author.");
    }

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/leads/${leadId}/comments`,
        formData
      );

    
      showSuccessToast(
        toastId,
        response?.data?.message || "Comment added successfully."
      );
      setFormData(initialData);
      setIsLoading(false);
    } catch (error) {
      showErrorToast(
        leadId,
        error.response?.data?.message || "Error occurred while add comment."
      );
    }
  };

  return (
    <>
      <div className="mt-4">
        <form onSubmit={handleSubmitComment}>
          <div className="card bg-light border-0">
            <div className="card-body">
              <h6 className="fw-bold mb-3">Add a Comment</h6>

              <div className="mb-3">
                <label htmlFor="author" className="form-label fw-semibold">
                  Author
                </label>
                <select
                  id="author"
                  className="form-select"
                  value={formData.author}
                  onChange={onChangeForm}
                  required
                >
                  <option disabled value="">
                    Select Author
                  </option>
                  {salesAgent.map((agent) => (
                    <option key={agent.id} value={agent.id}>
                      {agent.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="commentText" className="form-label fw-semibold">
                  Comment
                </label>
                <textarea
                  id="commentText"
                  className="form-control"
                  rows="3"
                  placeholder="Write your comment here..."
                  value={formData.commentText}
                  onChange={onChangeForm}
                  required
                />
              </div>

              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-primary d-flex align-items-center gap-2"
                  disabled={isLoading}
                >
                  {isLoading && <SubmitLoadingSpinner />}
                  {isLoading ? "Adding comment..." : "Add Comment"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentPage;
