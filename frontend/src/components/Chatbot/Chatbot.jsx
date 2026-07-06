import { useState } from "react";
import "./Chatbot.css";
import { askChatbot } from "../../services/chatbotApi";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! Ask me about my projects, skills, experience, Docker, Django, React, or AI/RAG work.",
    },
  ]);

  const [input, setInput] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();

    if (!input.trim() || isWaiting) return;

    const currentInput = input;

    const userMessage = {
      sender: "user",
      text: currentInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsWaiting(true);

    try {
      const data = await askChatbot(currentInput);

      const botMessage = {
        sender: "bot",
        text: data.answer,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);

      const errorMessage = {
        sender: "bot",
        text: "Sorry, I could not connect to the AI right now. Please try again.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsWaiting(false);
    }
  };

  const handleSuggestionClick = (question) => {
    if (isWaiting) return;
    setInput(question);
  };

  return (
    <section className="chatbot-section section" id="chatbot">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">AI Chatbot</p>
          <h2>Ask questions like a recruiter or developer.</h2>
        </div>

        <div className="chatbot-box">
          <div className="chatbot-header">
            <div>
              <h3>Portfolio Assistant</h3>
              <p>React + Django + AI/RAG powered</p>
            </div>

            <span className="chatbot-status">
              {isWaiting ? "Thinking" : "Online"}
            </span>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${
                  message.sender === "user" ? "user-message" : "bot-message"
                }`}
              >
                {message.text}
              </div>
            ))}

            {isWaiting && (
              <div className="chat-message bot-message typing-message">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>

          <form className="chatbot-input-area" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Ask: Is he good with Django?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isWaiting}
            />

            <button type="submit" disabled={isWaiting}>
              {isWaiting ? "Thinking..." : "Send"}
            </button>
          </form>

          <div className="chatbot-suggestions">
            <button
              type="button"
              disabled={isWaiting}
              onClick={() => handleSuggestionClick("What projects has he built?")}
            >
              Projects
            </button>

            <button
              type="button"
              disabled={isWaiting}
              onClick={() =>
                handleSuggestionClick("Does he know Docker and CI/CD?")
              }
            >
              Docker
            </button>

            <button
              type="button"
              disabled={isWaiting}
              onClick={() => handleSuggestionClick("Can he build AI/RAG apps?")}
            >
              AI/RAG
            </button>

            <button
              type="button"
              disabled={isWaiting}
              onClick={() => handleSuggestionClick("Why should I hire him?")}
            >
              Hire Fit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chatbot;