
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { personalBankingItems, businessBankingItems, wealthItems } from './navigationData';

const DesktopNavigation = () => {
  return (
    <nav className="hidden lg:flex">
      <NavigationMenu>
        <NavigationMenuList className="space-x-2">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-700 hover:text-green-700 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent hover:bg-green-50">
              Personal Banking
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 w-[600px] lg:grid-cols-2">
                {personalBankingItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700"
                  >
                    <div className="text-sm font-medium leading-none group-hover:text-green-700">
                      {item.title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-700 hover:text-green-700 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent hover:bg-green-50">
              Business Banking
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 w-[600px] lg:grid-cols-2">
                {businessBankingItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700"
                  >
                    <div className="text-sm font-medium leading-none group-hover:text-green-700">
                      {item.title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-700 hover:text-green-700 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent hover:bg-green-50">
              Wealth Management
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 w-[500px]">
                {wealthItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700"
                  >
                    <div className="text-sm font-medium leading-none group-hover:text-green-700">
                      {item.title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link 
              to="/about-us"
              className="text-gray-700 hover:text-green-700 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-green-50 rounded-md"
            >
              About Us
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNavigation;
