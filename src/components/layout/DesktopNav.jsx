import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router"

import { cn } from "@/lib/utils"
import { solutions, customers } from "@/constants/navigation"

const navTriggerClass =
  "h-10 rounded-xl bg-transparent px-3 text-sm font-semibold text-foreground hover:bg-muted/70 hover:text-foreground focus:bg-muted/70 data-[state=open]:bg-muted/70"

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
  <div className="flex flex-col gap-1 text-sm">
    <div className="leading-none font-medium text-foreground">{title}</div>
    <div className="line-clamp-2 leading-relaxed text-muted-foreground">
      {children}
    </div>
  </div>
</Link>
      </NavigationMenuLink>
    </li>
  )
}

export function DesktopNav() {
  return (
    <NavigationMenu className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
      <NavigationMenuList className="gap-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger className={navTriggerClass}>
            Solutions
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {solutions.map((item) => (
                <ListItem key={item.title} href={item.href} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={navTriggerClass}>
            Customers
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {customers.map((item) => (
                <ListItem key={item.title} href={item.href} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              navTriggerClass,
              "bg-transparent"
            )}
          >
          <Link to="/#pricing">Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
} 