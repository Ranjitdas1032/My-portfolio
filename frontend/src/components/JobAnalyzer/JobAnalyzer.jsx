import { useState } from "react";
import "./JobAnalyzer.css";
import {analyzeJobPdf} from "../../services/jobanayliserapi"

function JobAnalyzer({ isOpen, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload only PDF file.");
      return;
    }

    setSelectedFile(file);
    setResult(null);
    setError("");
    setStatus("idle");
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      alert("Please upload a job description PDF first.");
      return;
    }

    setStatus("loading");
    setResult(null);
    setError("");

    try {
      const data = await analyzeJobPdf(selectedFile);
      setResult(data);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.error ||
          error.response?.data?.details ||
          "Something went wrong while analyzing the PDF."
      );
      setStatus("error");
    }
  };

  return (
    <div className="jd-overlay">
      <div className="jd-modal">
        <button className="jd-close" onClick={onClose}>
          ×
        </button>

        <div className="jd-header">
          <p className="section-tag">Job Match Analyzer</p>
          <h2>Upload a job description PDF</h2>
          <p>
            The AI will compare the role with my skills, projects, and
            experience.
          </p>
        </div>

        <label className="jd-upload-box">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />

          <span>Click to upload PDF</span>

          {selectedFile ? (
            <strong>{selectedFile.name}</strong>
          ) : (
            <small>No file selected</small>
          )}
        </label>

        <button
          className="jd-analyze-btn"
          onClick={handleAnalyze}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Analyzing..." : "Analyze Job Fit"}
        </button>

        {status === "loading" && (
          <div className="jd-loading">
            <span></span>
            <span></span>
            <span></span>
            <p>Reading PDF and comparing profile...</p>
          </div>
        )}

        {status === "error" && (
          <div className="jd-error-box">
            <p>{error}</p>
          </div>
        )}

        {status === "success" && result && (
          <div className="jd-result-preview">
            <h3>{result.message}</h3>

            <p>
              <strong>File:</strong> {result.filename}
            </p>

            <p>
              <strong>Pages:</strong> {result.pages}
            </p>

            <div className="jd-ai-result">
              <pre>{result.analysis}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobAnalyzer;