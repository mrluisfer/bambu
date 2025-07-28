import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./homepage-sections/footer";
import { cn } from "@/lib/utils";
import { GoToTopButton } from "../go-to-top-button";

export const LandingLayout = ({
  children,
  withFooter = false,
  className,
}: {
  children: ReactNode;
  withFooter?: boolean;
  className?: string;
}) => {
  return (
    <>
      <Navbar />
      <main className={cn("pt-20", className)}>{children}</main>
      <GoToTopButton />
      {withFooter ?
        <Footer />
      : null}
    </>
  );
};
