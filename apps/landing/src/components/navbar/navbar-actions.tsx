import Link from "next/link";
import { RainbowButton } from "../magicui/rainbow-button";

export function NavbarActions() {
  return (
    <div className="flex items-center space-x-4">
      <RainbowButton variant="outline" asChild>
        <Link href="/services">Mira nuestros servicios</Link>
      </RainbowButton>
    </div>
  );
}
