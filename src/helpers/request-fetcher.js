export async function fetchAdvice() {
  const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

  try {
    const response = await fetch(SERVER_URL);

    if (!response.ok) {
      return {
        id: 0,
        advice: "Advice generator seems to be down. Please try again later",
      };
    }

    const json = await response.json();

    if (json) {
      return json.slip;
    } else {
      return {
        id: 0,
        advice: "Advice generator seems to be down. Please try again later",
      };
    }
  } catch (e) {
    console.log(e);
    return {
      id: 0,
      advice: "Something went wrong. Please try again later",
    };
  }
}
