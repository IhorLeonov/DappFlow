import { Container } from "@/src/components/atoms/Container";

export function Footer() {
  return (
    <Container
      as="footer"
      className="border-df-border text-df-muted-strong flex flex-col gap-3 border-t py-5 text-sm sm:flex-row sm:items-center sm:justify-between"
    >
      <span>DappFlow - on-chain learning loop</span>
      <span>SKILL token / Avatar NFT / Skill badges</span>
    </Container>
  );
}
