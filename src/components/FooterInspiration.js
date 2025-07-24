import React, { useEffect, useState } from "react";

const quotes = [
  "Keep pushing boundaries and shipping code 🚀",
  "Every pixel counts. Every line matters.",
  "Dream it. Code it. Own it.",
  "Your future is written in code 💻",
];

export const FooterInspiration = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  }, []);

  return (
    <div
      className="newsletter-bx wow slideInUp"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        flexWrap: "wrap",
      }}
    >
      {/* Left side - Title */}
      <div style={{ flex: "1", textAlign: "center" }}>
        <h3 style={{ margin: 0 }}>Stay Inspired</h3>
      </div>

      {/* Right side - Quote */}
      <div style={{ flex: "2", textAlign: "center" }}>
        <p style={{ fontStyle: "italic", fontSize: "16px", color: "#333", marginBottom: "5px" }}>
          “{quote}”
        </p>
        <p style={{ fontSize: "12px", color: "#777", margin: 30 }}>
          A little quote to keep you going 💡
        </p>
      </div>
    </div>
  );
};

export default FooterInspiration;
