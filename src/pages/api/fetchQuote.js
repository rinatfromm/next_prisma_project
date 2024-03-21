const fetchQuote = async () => {
  try {
    const response = await fetch(
      "https://api.chucknorris.io/jokes/random?category=dev"
    );
    if (!response.ok) {
      throw new Error("Netzwerkantwort war nicht in Ordnung");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fehler beim Abrufen des Zitats:", error);
    return null;
  }
};

export default fetchQuote;