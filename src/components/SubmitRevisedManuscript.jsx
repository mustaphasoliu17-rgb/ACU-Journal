import { useState } from "react";
import "./SubmitRevisedManuscript.css";

const SubmitNewManuscript = () => {
  const [formData, setFormData] = useState({
    title: "",
    authorName: "",
    email: "",
    referenceNumber: "",
    phone: "",
    manuscriptFile: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (allowedTypes.includes(file.type)) {
        setFormData((prev) => ({
          ...prev,
          manuscriptFile: file,
        }));
        setErrors((prev) => ({
          ...prev,
          manuscriptFile: "",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          manuscriptFile: "Please upload a PDF, DOC, or DOCX file only.",
        }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.authorName.trim()) {
      newErrors.authorName = "Author name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.referenceNumber.trim()) {
      newErrors.referenceNumber = "Reference number is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.manuscriptFile) {
      newErrors.manuscriptFile = "Please upload your manuscript";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        alert("Manuscript submitted successfully!");
        // Reset form
        setFormData({
          title: "",
          authorName: "",
          email: "",
          referenceNumber: "",
          phone: "",
          manuscriptFile: null,
        });
        document.getElementById("file-input").value = "";
      }, 2000);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="submit-form-page">
      <div className="container">
        <div className="form-container">
          {/* Header */}
          <div className="form-header">
            <h1>Submit Revised Manuscript</h1>
            <p>Complete the form below to submit your manuscript for review</p>
          </div>

          <form onSubmit={handleSubmit} className="manuscript-form">
            {/* Title Field */}
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Title of Manuscript <span className="required">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter article title"
                className={`form-input ${errors.title ? "error" : ""}`}
              />
              {errors.title && (
                <span className="error-message">{errors.title}</span>
              )}
            </div>

            {/* Author Name Field */}
            <div className="form-group">
              <label htmlFor="authorName" className="form-label">
                Name of Main Author <span className="required">*</span>
              </label>
              <input
                type="text"
                id="authorName"
                name="authorName"
                value={formData.authorName}
                onChange={handleInputChange}
                placeholder="Enter full name of main author"
                className={`form-input ${errors.authorName ? "error" : ""}`}
              />
              {errors.authorName && (
                <span className="error-message">{errors.authorName}</span>
              )}
            </div>

            {/* Contact Information Grid */}
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                  className={`form-input ${errors.email ? "error" : ""}`}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  className={`form-input ${errors.phone ? "error" : ""}`}
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>
            </div>

            {/* Reference Number Field */}
            <div className="form-group">
              <label htmlFor="referenceNumber" className="form-label">
                Reference Number <span className="required">*</span>
              </label>
              <input
                type="text"
                id="referenceNumber"
                name="referenceNumber"
                value={formData.referenceNumber}
                onChange={handleInputChange}
                placeholder="Enter article reference number"
                className={`form-input ${
                  errors.referenceNumber ? "error" : ""
                }`}
              />
              {errors.referenceNumber && (
                <span className="error-message">{errors.referenceNumber}</span>
              )}
            </div>

            {/* File Upload */}
            <div className="form-group">
              <label htmlFor="file-input" className="form-label">
                Upload Manuscript <span className="required">*</span>
              </label>
              <div className="file-upload-container">
                <input
                  type="file"
                  id="file-input"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="file-input"
                />
                <label htmlFor="file-input" className="file-upload-label">
                  <div className="upload-icon">📄</div>
                  <div className="upload-text">
                    <span className="upload-title">Choose manuscript file</span>
                    <span className="upload-subtitle">
                      PDF, DOC, or DOCX files only (Max: 10MB)
                    </span>
                  </div>
                </label>
                {formData.manuscriptFile && (
                  <div className="file-preview">
                    <span className="file-name">
                      📎 {formData.manuscriptFile.name}
                    </span>
                    <span className="file-size">
                      ({(formData.manuscriptFile.size / 1024 / 1024).toFixed(2)}{" "}
                      MB)
                    </span>
                  </div>
                )}
              </div>
              {errors.manuscriptFile && (
                <span className="error-message">{errors.manuscriptFile}</span>
              )}
            </div>

            {/* Additional Information */}
            <div className="info-box">
              <h3>📋 Before Submitting</h3>
              <ul>
                <li>
                  Ensure your manuscript follows our formatting guidelines
                </li>
                <li>All co-authors have approved the submission</li>
                <li>Manuscript is prepared in English</li>
                <li>File size should not exceed 10MB</li>
              </ul>
            </div>

            {/* Submit Button */}
            <div className="form-actions">
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Submitting...
                  </>
                ) : (
                  "Submit Manuscript"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitNewManuscript;
