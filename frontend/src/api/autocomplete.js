import axios from "axios";

export const fetchAutocomplete = async (prompt) => {
  try {
    const res = await axios.post("/api/autocomplete", { prompt });
    return res.data.suggestions;
  } catch (err) {
    console.error("Autocomplete error", err);
    return [];
  }
};
