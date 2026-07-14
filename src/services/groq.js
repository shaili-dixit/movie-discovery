const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export async function getMovieFromMood(mood) {

    const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [
                    {
                        role: "system",
                        content:
                            "You are a movie recommendation assistant. Return ONLY one movie title. Do not explain anything.",
                    },
                    {
                        role: "user",
                        content: `Recommend one movie for this mood: ${mood}`,
                    },
                ],
                temperature: 0.8,
                max_tokens: 20,
            }),
        }
    );

    if (!response.ok) {
        throw new Error("Groq request failed");
    }

    const data = await response.json();

    return data.choices[0].message.content.trim();
}