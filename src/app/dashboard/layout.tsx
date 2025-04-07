'use client';
import Link from "next/link";
import Image from 'next/image';

type NavLinkInfo = {
  name: string;
  href: string;
  icon: string;
};

const links: NavLinkInfo[] = [
  {
    name: 'Likes',
    href: '/dashboard/likes',
    icon: '/icons/home.png',
  },
  {
    name: 'Swipe',
    href: '/dashboard/swipe',
    icon: '/icons/matcha.png',
  },
  {
    name: 'User',
    href: '/dashboard/user',
    icon: '/icons/profile.png',
  },
  {
    name: 'Messages',
    href: '/dashboard/messages',
    icon: '/icons/chat.png'
  }
];

function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
          >
            <Image
              src={link.icon}
              alt={link.name}
              width={40}
              height={40}
            />
          </Link>
        );
      })}
    </>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex-grow">{children}</div>
      <div className="flex-none h-[70px] flex justify-center items-center gap-[50px]">
        <NavLinks />
      </div>
    </div>
  );
}


