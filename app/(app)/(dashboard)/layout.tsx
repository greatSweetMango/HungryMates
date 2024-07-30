"use client";

import { sidebarLinks } from "@/constant/navigation";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/extra/sidebar";
import { ReactNode, useState } from "react";
import Image from "next/image";
import { Logo, LogoIcon } from "@/components/ui/logo"

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  return (
    <section className={`p-4 w-screen h-screen`}>
      <div
        className={`rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 flex-1 w-full h-full mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden`}
      >
        <Sidebar open={open} setOpen={setOpen} logo={<Logo />}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {sidebarLinks.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: "Manu",
                  href: "/profile",
                  icon: (
                    <Image
                      src="https://assets.aceternity.com/manu.png"
                      className="h-7 w-7 flex-shrink-0 rounded-full"
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>

        {children}
      </div>
    </section>
  );
}
