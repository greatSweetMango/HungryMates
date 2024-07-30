import {
    ArrowLeft,
    Home,
    MessageCircleMore,
    ShoppingBag,
    User,
  } from "lucide-react";
  import { signOut } from "next-auth/react";
  
  const navStyle = `text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0`;
  
  export const sidebarLinks = [
    {
      label: "Home",
      href: "/home",
      icon: <Home className={`${navStyle}`} />,
    },
    {
      label: "Threads",
      href: "/threads",
      icon: <MessageCircleMore className={`${navStyle}`} />,
    },
    {
      label: "Orders",
      href: "/orders",
      icon: <ShoppingBag className={`${navStyle}`} />,
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <ArrowLeft
          onClick={() => signOut({ callbackUrl: "/" })}
          className={`${navStyle}`}
        />
      ),
    },
  ];
  