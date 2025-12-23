import { Typography } from "./ui/typography";

export const RenderQuote = ({ quote }: { quote?: string }) => {
  return (
    <>
      {" "}
      {quote && <Typography variant="body">&ldquo; {quote} &rdquo;</Typography>}
    </>
  );
};
