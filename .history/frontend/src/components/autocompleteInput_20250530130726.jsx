import React, { useState } from "react";
import { fetchAutocomplete } from "../api/autocomplete";

export default function AutocompleteInput() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length > 2) {
      const data = await fetchAutocomplete(value);
      setSuggestions(data);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="p-4 w-full max-w-md">
      <input
        value={input}
        onChange={handleChange}
        placeholder="Start typing a job title..."
        className="w-full border p-2 rounded"
      />
      <ul className="bg-white border mt-2 rounded shadow">
        {suggestions.map((s, index) => (
          <li key={index} className="p-2 hover:bg-gray-100">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
