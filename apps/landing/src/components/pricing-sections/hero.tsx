import { HomePageTitle } from "../homepage-sections/title";

export const PricingHero = () => {
  return (
    <div className="flex items-center justify-center pt-16 flex-col gap-6 bg-gradient-to-br from-brand-50 via-white to-accent-50">
      <div className="container">
        <HomePageTitle
          description={
            "Elije el mejor precio que se adapte a las necesidades para impulsar tu negocio o proyecto."
          }
        >
          Soluciones hechas a tu medida.
        </HomePageTitle>
      </div>
    </div>
  );
};
