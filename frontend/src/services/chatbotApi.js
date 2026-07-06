import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api";

export const askChatbot = async (message) => {
  const response = await axios.post(`${API_BASE_URL}/chatbot/`, {
    message,
  });

  return response.data;
};