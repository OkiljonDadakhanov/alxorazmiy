"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
  return (
    <section>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul>
                <li>
                  <NavigationMenuLink title="organization" href="/organization">
                    Organization
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink title="organization" href="/organization">
                    Programme
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink title="organization" href="/problems">
                    Problems
                  </NavigationMenuLink>
                </li>
              </ul>

              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
}
