"use client";

import { useState } from "react";
import axios from "axios";
import { AuroraText } from "@/components/magicui/aurora-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import VantaFog from "@/components/VantaFog";

interface ApiResponse {
  status?: string;
  message?: string;
  [key: string]: unknown; // in case API returns extra fields
}

function CompanySearchPage() {
  const [companyName, setCompanyName] = useState("");
  const [preferences, setPreferences] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ApiResponse | null>(null);

  const handleSearch = async () => {
    if (!companyName.trim()) {
      setError("Please enter a company name.");
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await axios.post<ApiResponse>(
        "https://company-mca-service-977121587860.asia-south1.run.app/check-name",
        {
          company_name: companyName,
          preferences: preferences || "nothing",
        }
      );
      setResult(res.data);
    } catch (err) {
      console.error("Error checking company name", err);
      setError("Failed to check company name. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <VantaFog />
      <section className="px-4 mt-16 md:px-36 py-12 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Company Name Search with <AuroraText>MCA Checker</AuroraText>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          Enter a company name and your preferences, and let our AI check
          availability and provide insights instantly.
        </p>

        {/* Input Fields */}
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter company name"
          className="w-full max-w-xl p-4 border border-border bg-background rounded-md mb-4"
        />

        <input
          type="text"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          placeholder="Enter preferences (optional)"
          className="w-full max-w-xl p-4 border border-border bg-background rounded-md mb-4"
        />

        {/* Button */}
        <RainbowButton onClick={handleSearch} disabled={loading}>
          {loading ? "Checking..." : "Check Company Name"}
        </RainbowButton>

        {error && <p className="text-red-600 mt-6">{error}</p>}

        {/* Result Section */}
        {result && (
          <div className="mt-10 w-full max-w-2xl bg-muted p-6 rounded-xl text-left">
            <h2 className="text-xl font-bold text-primary mb-2">Result</h2>
            <pre className="whitespace-pre-wrap text-muted-foreground">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </section>
    </div>
  );
}

export default CompanySearchPage;
