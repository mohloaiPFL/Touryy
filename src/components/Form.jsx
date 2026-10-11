
import React, { useState } from "react";

function validateField(field, value, minDate) {
  const trimmedValue = value.trim();

  switch (field) {
    case "name":
      if (!trimmedValue) return "Please enter your full name.";
      if (!/^(?=.*\p{L})[\p{L}\p{M} ]+$/u.test(trimmedValue)) {
        return "Please use letters and spaces only for your name.";
      }
      if (trimmedValue.replace(/[^\p{L}\p{M}]/gu, "").length < 2) {
        return "Please enter at least two letters for your name.";
      }
      return "";
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedValue)
        ? ""
        : "Please enter a valid email address, such as name@example.com.";
    case "phone":
      return /^\d{7,15}$/.test(trimmedValue)
        ? ""
        : "Please enter 7 to 15 digits, including your country code.";
    case "destination":
      return value ? "" : "Please choose the destination you would like to visit.";
    case "visitors": {
      const visitorCount = Number(value);
      return Number.isInteger(visitorCount) && visitorCount >= 1 && visitorCount <= 100
        ? ""
        : "Please enter a whole number between 1 and 100.";
    }
    case "visitDate":
      return value && value >= minDate
        ? ""
        : "Please choose today or a future date.";
    case "message":
      return trimmedValue.length >= 10
        ? ""
        : "Please add a little more detail (at least 10 characters).";
    default:
      return "";
  }
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    visitors: "1",
    visitDate: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  function handleChange(event) {
    const { name, value } = event.target;
    const invalidCharacterMessage =
      name === "name" && /[^\p{L}\p{M} ]/u.test(value)
        ? "Please use letters and spaces only for your name."
        : name === "phone" && /\D/u.test(value)
          ? "Please use digits only for your phone number."
          : "";

    if (invalidCharacterMessage) {
      setTouched((previous) => ({ ...previous, [name]: true }));
      setErrors((previous) => ({
        ...previous,
        [name]: invalidCharacterMessage
      }));
      setSubmitted(false);
      return;
    }

    if (name === "name" && value.length > 20) {
      setTouched((previous) => ({ ...previous, [name]: true }));
      setErrors((previous) => ({
        ...previous,
        [name]: "Please keep your name to 20 characters or fewer."
      }));
      setSubmitted(false);
      return;
    }

    if (name === "phone" && value.length > 15) {
      setTouched((previous) => ({ ...previous, [name]: true }));
      setErrors((previous) => ({
        ...previous,
        [name]: "Please enter no more than 15 digits."
      }));
      setSubmitted(false);
      return;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

    if (touched[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: validateField(name, value, minDate)
      }));
    }

    setSubmitted(false);
  }

  function handleBlur(event) {
    const { name } = event.target;
    setTouched((previous) => ({ ...previous, [name]: true }));
    setErrors((previous) => ({
      ...previous,
      [name]: validateField(name, formData[name], minDate)
    }));
  }

  function validateForm() {
    const newErrors = {};
    const fields = Object.keys(formData);
    fields.forEach((field) => {
      newErrors[field] = validateField(field, formData[field], minDate);
    });

    setErrors(newErrors);
    setTouched(Object.fromEntries(fields.map((field) => [field, true])));

    return Object.values(newErrors).every((error) => !error);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);

    // Demonstration only: no data is sent to a server.
    console.log("Valid enquiry:", formData);
  }

  function fieldStyle(field) {
    return {
      ...styles.input,
      borderColor: errors[field] ? "#C62828" : "#D6DDD8"
    };
  }

  function fieldGuidance(field, prompt, successMessage) {
    if (errors[field]) {
      return (
        <small id={`${field}-feedback`} role="alert" style={styles.error}>
          {errors[field]}
        </small>
      );
    }

    if (touched[field] && formData[field]) {
      return (
        <small id={`${field}-feedback`} style={styles.valid}>
          {successMessage}
        </small>
      );
    }

    return (
      <small id={`${field}-feedback`} style={styles.hint}>
        {prompt}
      </small>
    );
  }

  return (
    <section id="contact" className="enquiry-section" style={styles.section}>
      <div style={styles.heading}>
        <p style={styles.eyebrow}>START YOUR JOURNEY</p>
        <h2>Plan Your Lesotho Adventure</h2>
        <p>Tell us about your travel plans and preferred destination.</p>
      </div>

      {submitted && (
        <div role="status" style={styles.success}>
          <strong>Enquiry validated successfully!</strong>
          <p>
            Your information passed validation. This demonstration does
            not send or store your enquiry.
          </p>
        </div>
      )}

      <form className="enquiry-form" onSubmit={handleSubmit} noValidate style={styles.form}>
        <div style={styles.field}>
          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="name"
            maxLength={20}
            placeholder="e.g. Lerato Mokoena"
            style={fieldStyle("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby="name-feedback"
          />
          {fieldGuidance("name", "Use letters and spaces only.", "That looks like a good name.")}
        </div>

        <div style={styles.field}>
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="email"
            placeholder="name@example.com"
            style={fieldStyle("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby="email-feedback"
          />
          {fieldGuidance("email", "We’ll use this address to reply to your enquiry.", "Email address looks good.")}
        </div>

        <div style={styles.field}>
          <label htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="tel"
            inputMode="numeric"
            maxLength="15"
            placeholder="e.g. 26650123456"
            style={fieldStyle("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby="phone-feedback"
          />
          {fieldGuidance("phone", "Digits only, including country code (7–15 digits).", "Phone number looks good.")}
        </div>

        <div style={styles.field}>
          <label htmlFor="destination">Destination *</label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            onBlur={handleBlur}
            style={fieldStyle("destination")}
            aria-invalid={Boolean(errors.destination)}
            aria-describedby="destination-feedback"
          >
            <option value="">Select a destination</option>
            <option value="Maletsunyane Falls">Maletsunyane Falls</option>
            <option value="Katse Dam">Katse Dam</option>
            <option value="Thaba Bosiu">Thaba Bosiu</option>
            <option value="Sani Pass">Sani Pass</option>
            <option value="Other">Other destination</option>
          </select>
          {fieldGuidance("destination", "Choose the place you’re interested in visiting.", "Great choice.")}
        </div>

        <div style={styles.field}>
          <label htmlFor="visitors">Number of Visitors *</label>
          <input
            id="visitors"
            name="visitors"
            type="number"
            min="1"
            max="100"
            step="1"
            value={formData.visitors}
            onChange={handleChange}
            onBlur={handleBlur}
            style={fieldStyle("visitors")}
            aria-invalid={Boolean(errors.visitors)}
            aria-describedby="visitors-feedback"
          />
          {fieldGuidance("visitors", "How many people are travelling? (1–100)", "Visitor count is valid.")}
        </div>

        <div style={styles.field}>
          <label htmlFor="visitDate">Preferred Visit Date *</label>
          <input
            id="visitDate"
            name="visitDate"
            type="date"
            min={minDate}
            value={formData.visitDate}
            onChange={handleChange}
            onBlur={handleBlur}
            style={fieldStyle("visitDate")}
            aria-invalid={Boolean(errors.visitDate)}
            aria-describedby="visitDate-feedback"
          />
          {fieldGuidance("visitDate", "Select your preferred travel date.", "That date is available to request.")}
        </div>

        <div style={styles.field}>
          <label htmlFor="message">Your Message *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tell us what you’d like to see, when you plan to travel, or any questions you have..."
            style={fieldStyle("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby="message-feedback"
          />
          {fieldGuidance("message", "A few details will help us make a useful reply (at least 10 characters).", "Thanks, that gives us a helpful starting point.")}
        </div>

        <button type="submit" style={styles.button}>
          Submit Enquiry →
        </button>

        <p style={styles.note}>* Required fields</p>
      </form>
    </section>
  );
}

const styles = {
  section: {
    background: "#F7F5EF",
    padding: "65px 7%"
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px"
  },
  eyebrow: {
    color: "#9B752D",
    fontWeight: "bold",
    letterSpacing: "2px"
  },
  form: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "28px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 5px 25px rgba(0,0,0,0.06)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
    gap: "20px"
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px",
    border: "1px solid #D6DDD8",
    borderRadius: "5px",
    fontSize: "15px",
    fontFamily: "inherit"
  },
  error: {
    color: "#C62828",
    fontSize: "13px"
  },
  hint: {
    color: "#66736B",
    fontSize: "13px"
  },
  valid: {
    color: "#237044",
    fontSize: "13px"
  },
  success: {
    maxWidth: "644px",
    margin: "0 auto 20px",
    padding: "18px",
    background: "#E5F5E8",
    color: "#185C2C",
    borderRadius: "8px"
  },
  button: {
    background: "#173C2B",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "15px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px"
  },
  note: {
    color: "#666666",
    fontSize: "13px"
  }
};
