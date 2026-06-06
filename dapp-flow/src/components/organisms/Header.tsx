import { Button } from "@/src/components/atoms/Button";
import { Container } from "@/src/components/atoms/Container";
import { Logo } from "@/src/components/atoms/Logo";
import { NavLinks } from "@/src/components/molecules/NavLinks";

export function Header() {
  return (
    <Container as="header" className="flex items-center justify-between py-5">
      <Logo />
      <NavLinks />
      <Button size="sm" variant="primary">
        Connect Wallet
      </Button>
    </Container>
  );
}
