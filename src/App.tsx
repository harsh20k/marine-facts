import { useState } from "react";

function App() {
  const [category, setCategory] = useState<string>("animals"); // default selection
  const [fact, setFact] = useState<string>("Pick a category and get a marine fact!");

  const getFact = async () => {
    try {
      const res = await fetch(`/api/fact?category=${category}`);
      const data: { fact?: string; error?: string } = await res.json();
      if (data.fact) {
        setFact(data.fact);
      } else {
        setFact(data.error || "Oops! No fact found.");
      }
    } catch (error) {
      setFact("Error fetching fact.");
    }
  };

  return (
    <div className="page-wrap" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌊 Marine Facts with Categories</h1>

      {/* Radio Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "15px" }}>
          <input
            type="radio"
            value="animals"
            checked={category === "animals"}
            onChange={(e) => setCategory(e.target.value)}
          />
          🐋 Animals
        </label>

        <label style={{ marginRight: "15px" }}>
          <input
            type="radio"
            value="geography"
            checked={category === "geography"}
            onChange={(e) => setCategory(e.target.value)}
          />
          🌍 Geography
        </label>

        <label>
          <input
            type="radio"
            value="climate"
            checked={category === "climate"}
            onChange={(e) => setCategory(e.target.value)}
          />
          🌡️ Climate
        </label>
      </div>

      <div>
        <button onClick={getFact} style={{ padding: "10px" }}>
          Get Fact
        </button>
      </div>

      <p style={{ marginTop: "20px" }}>{fact}</p>
    </div>
  );
}

export default App;