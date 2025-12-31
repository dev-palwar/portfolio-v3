import { Typography } from "@/components/ui/typography";

export function RenderQuote({ quote }: { quote?: string }) {
  return (
    <>
      {" "}
      {quote && <Typography variant="body">&ldquo; {quote} &rdquo;</Typography>}
    </>
  );
}
