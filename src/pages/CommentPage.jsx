import { useState } from "react";
import axios from "axios";
import {
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../utils/toast";
import SubmitLoadingSpinner from "../components/SubmitLoadingSpinnr";

const CommentPage = ({ leadId, salesAgentId, author }) => {
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitComment = async (e) => {
    const toastId = showLoadingToast("Adding comment...");
    e.preventDefault();

    if (!comment || comment.trim() === "" || !author || !salesAgentId) {
      return showErrorToast(toastId, "Please provide comment.");
    }

    const commentData = {
      salesAgentId,
      author,
      commentText: comment,
    };

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/leads/${leadId}/comments`,
        commentData
      );

      showSuccessToast(toastId, "Comment added successfully.");
      setComment("");
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
      <form
        onSubmit={handleSubmitComment}
        className="mt-4 p-3 border rounded bg-light"
      >
        <div className="mb-3">
          <label htmlFor="comment" className="form-label fw-semibold">
            Add Comment
          </label>

          <input
            id="comment"
            type="text"
            className="form-control"
            placeholder="Write your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            disabled={isLoading}
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
      </form>
    </>
  );
};

export default CommentPage;
