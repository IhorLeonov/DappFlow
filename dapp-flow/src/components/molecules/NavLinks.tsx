import { cn } from "@/src/lib/cn";

const navItems = [
  { href: "#", label: "Challenges" },
  { href: "#", label: "Rewards" },
  { href: "#", label: "Profile" },
];

type NavLinksProps = {
  className?: string;
};

export function NavLinks({ className }: NavLinksProps) {
  return (
    <nav
      aria-label="Primary navigation"
      className={cn("hidden items-center gap-8 text-sm text-df-muted md:flex", className)}
    >
      {navItems.map((item) => (
        <a className="transition hover:text-df-primary" href={item.href} key={item.label}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
