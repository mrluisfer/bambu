import Link from "next/link";
import { RainbowButton } from "../magicui/rainbow-button";
import { useTranslations } from "next-intl";

export function NavbarActions() {
  const t = useTranslations("Navbar");
  return (
    <div className="flex items-center space-x-4">
      <RainbowButton variant="outline" asChild>
        <Link href="/">{t("seeYourOrdersLink")}</Link>
      </RainbowButton>
    </div>
  );
}
