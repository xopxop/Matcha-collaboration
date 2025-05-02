"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CardIcon, HeartIcon, MessageIcon, UserIcon } from "./icons";


type NavLinkInfo = {
  name: string;
  href: string;
  icon: JSX.Element;
};

const links: NavLinkInfo[] = [
  {
    name: "Swipe",
    href: "/dashboard/swipe",
    icon: CardIcon,
  },
  {
    name: "Matches",
    href: "/dashboard/matches",
    icon: HeartIcon,
  },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: MessageIcon,
  },
  {
    name: "User",
    href: "/dashboard/user",
    icon: UserIcon,
  },
];

function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link key={link.name} href={link.href}>
            <div
              className={clsx(
                "flex justify-center items-center w-[60px] h-[48px] text-[#adafbb]",
                isActive && "text-[#FF4B4B] bg-[#F3F3F3] rounded-[10px]",
              )}
            >
              {link.icon}
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex-grow overflow-y-auto">{children}</div>
      <div className="flex-none bg-[#F3F3F3] h-[80px] flex justify-center gap-[29px]">
        <NavLinks />
      </div>
    </div>
  );
}
