"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import CaclulatorLogo from "@/public/calculator.png";
import CoffeeLightLogo from "@/public/coffeeLight.png";
import CoffeeDarkLogo from "@/public/coffeeDark.png";
import Image, { StaticImageData } from "next/image";
import { ToggleTheme } from "@/components/ToggleTheme";
import { useTheme } from "next-themes";
import { Coffee } from "lucide-react";

export default function Navbar() {
  const { theme, systemTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState<StaticImageData>(CoffeeDarkLogo);
  useEffect(() => {
    const getSystemTheme = () => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    };

    if (theme === "system") {
      setLogoSrc(
        getSystemTheme() === "dark" ? CoffeeDarkLogo : CoffeeLightLogo
      );
    } else {
      setLogoSrc(theme === "dark" ? CoffeeDarkLogo : CoffeeLightLogo);
    }
  }, [theme, systemTheme]);
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="mr-6 lg:flex" prefetch={false}>
            <Image className="h-8 w-8" src={CaclulatorLogo} alt="Logo" />
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              How to use
            </Link>
            <a
              href="https://github.com/akshatbajetha/bucalc"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Github
            </a>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              <Image className="h-6 w-6" src={logoSrc} alt="Logo" />
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 lg:flex" prefetch={false}>
        <Image className="h-8 w-8" src={CaclulatorLogo} alt="Logo" />
      </Link>
      <nav className="ml-auto lg:flex gap-6">
        <ToggleTheme />
        <Link
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          How to use
        </Link>
        <a
          href="https://github.com/akshatbajetha/bucalc"
          target="_blank"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          Github
        </a>
        <a
          href="https://buymeacoffee.com/akshatbajetha"
          target="_blank"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          <Image className="h-8 w-6" src={logoSrc} alt="Logo" />
        </a>
      </nav>
    </header>
  );
}

type IconProps = {
  className?: string;
};

function MenuIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
