import { redirect } from "react-router-dom";
import axios from "axios";
import {
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../utils/toast";
import AgentForm from "../components/salesAgent/AgentForm";

const AddNewAgent = () => {
  return <AgentForm />;
};

export default AddNewAgent;

