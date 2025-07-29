import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { BookOpenIcon, InfoIcon, LifeBuoyIcon } from "lucide-react";
import { navigationLinks } from "./navigation-links";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarDesktopMenu() {
  // Icon helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpenIcon":
        return (
          <BookOpenIcon
            size={16}
            className="text-brand-700 group-hover:text-brand-600 opacity-60"
          />
        );
      case "LifeBuoyIcon":
        return (
          <LifeBuoyIcon
            size={16}
            className="text-brand-700 group-hover:text-brand-600 opacity-60"
          />
        );
      case "InfoIcon":
        return (
          <InfoIcon
            size={16}
            className="text-brand-700 group-hover:text-brand-600 opacity-60"
          />
        );
      default:
        return null;
    }
  };

  return (
    <NavigationMenu viewport={false} className="max-md:hidden">
      <NavigationMenuList className="gap-3">
        {navigationLinks.map((link, index) => (
          <NavigationMenuItem key={index}>
            {link.submenu ?
              <>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-primary bg-transparent px-2 py-1.5 font-medium *:[svg]:-me-0.5 *:[svg]:size-3.5">
                  {link.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="data-[motion=from-end]:slide-in-from-right-16! data-[motion=from-start]:slide-in-from-left-16! data-[motion=to-end]:slide-out-to-right-16! data-[motion=to-start]:slide-out-to-left-16! z-50 p-1">
                  <ul
                    className={cn(
                      link.type === "description" ? "min-w-64" : "min-w-48"
                    )}
                  >
                    {link.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <NavigationMenuLink
                          href={item.href}
                          className="py-1.5"
                          asChild
                        >
                          <Link href={item.href}>
                            {link.type === "icon" && "icon" in item && (
                              <div className="flex items-center gap-2 group">
                                {getIcon(item.icon as string)}
                                <span>{item.label}</span>
                              </div>
                            )}
                            {(
                              link.type === "description" &&
                              "description" in item
                            ) ?
                              <div className="space-y-1">
                                <div className="font-medium">{item.label}</div>
                                <p className="text-muted-foreground line-clamp-2 text-xs">
                                  {item.description}
                                </p>
                              </div>
                            : !link.type ||
                              (link.type !== "icon" &&
                                link.type !== "description" && (
                                  <span>{item.label}</span>
                                ))
                            }
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            : <NavigationMenuLink
                href={link.href}
                className="text-muted-foreground hover:text-primary py-1.5 font-medium"
              >
                {link.label}
              </NavigationMenuLink>
            }
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
