import { ollama_chatbot } from "./chat.js";
export default (app) => {
  const respons = ollama_chatbot("prTitle", "prBody");
  console.log(respons);
  app.on(
    ["pull_request.opened", "pull_request.synchronize"],

    async (context) => {
      console.log(context);
      const pullRequest = context.payload.pull_request;
      const prTitle = pullRequest.title;
      const prBody = pullRequest.body;

      console.log("PR opened: ", pullRequest);
      const chatbotResponse = await ollama_chatbot(prTitle, prBody);

      const prComment = context.issue({
        body: chatbotResponse,
      });

      await context.octokit.pulls.createReviewComment(prComment);
    }
  );
};
