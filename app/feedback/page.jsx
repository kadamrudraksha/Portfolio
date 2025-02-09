"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Feedback() {
  const router = useRouter();
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ feedback }),  // ✅ Fix field name
    });

    const data = await response.json();

    if (response.ok) {
      alert("Feedback submitted successfully!");
      setFeedback(""); // ✅ Clear input
    } else {
      setError("Error: " + data.error);
    }
  };

  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-indigo-400 mb-6">Feedback</h1>
      <p className="text-gray-300 text-center mb-6">
        We value your feedback! Please share your thoughts with us.
      </p>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white/10 p-6 rounded-lg shadow-md">
        <textarea
          className="w-full p-4 text-gray-200 bg-transparent border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
          rows="5"
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="w-full mt-4 px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
        >
          Submit Feedback
        </button>

        {error && <p className="text-red-400 text-center mt-2">{error}</p>} {/* Show error message */}
      </form>

      {/* Back Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => router.back()}
          className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
        >
          Go Back
        </button>
      </div>
    </main>
  );
}
