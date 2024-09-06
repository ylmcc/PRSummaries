import { ollama_chatbot } from "./chat.js";
export default (app) => {
  app.on(
    ["pull_request.opened"],

    async (context) => {
      const pullRequest = context.payload.pull_request;
      const prTitle = pullRequest.title;
      const prBody = pullRequest.body;

      console.log("PR opened: ", pullRequest);
      const chatbotResponse = await ollama_chatbot(prTitle, prBody);

      const issueComment = context.issue({
        body: chatbotResponse,
      });

      await context.octokit.issues.createComment(issueComment);
    }
  );
};
