"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="border-b py-2 px-4 flex justify-between fixed top-0 z-20 w-full">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="flex gap-2 items-center">
            <img src="/physics-logo.svg" alt="" className="w-8 sm:w-12" />
            <p className="font-bold sm:text-xl"> Carnival</p>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/register">
              <Button>Register</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
