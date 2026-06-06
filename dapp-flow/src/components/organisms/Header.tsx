import { Button } from "@/src/components/atoms/Button";
import { Logo } from "@/src/components/atoms/Logo";
import { NavLinks } from "@/src/components/molecules/NavLinks";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
      <Logo />
      <NavLinks />
      <Button size="sm" variant="primary">
        Connect Wallet
      </Button>
    </header>
  );
}
