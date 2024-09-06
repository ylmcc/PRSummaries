import { Ollama } from "ollama";

export async function ollama_chatbot(prTitle, prBody) {
  ollama_client = new Ollama({ host: process.env.OLLAMA_HOST });

  const prompt = "Title ${prTitle}\n\nDescription: ${prBody}";
  response = await ollama_client.chat({
    model: process.env.OLLAMA_MODEL,
    message: [
      {
        role: "system",
        content:
          "You are an extra pair of eyes for code reviews, evaluate the changes in this pull request, be kind and honest if you know there is no improvements do not suggest any, otherwise provide your code suggestions in markdown. ",
      },
      { role: "user", content: prompt },
    ],
  });
  return response.content;
}
