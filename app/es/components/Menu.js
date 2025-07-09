"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { menu, active } from './Menu.module.css';

function isActiveLink(href, pathname) {
  return /\/[^/]+\/([^/]+)(:?\/.*)?/.exec(pathname)?.[1] === href;
}

function PageLink({ href, label }) {
  const pathname = usePathname();
  return <li><Link href={href} className={isActiveLink(href, pathname) ? active : null}>{label}</Link></li>;
}

export default function Menu() {
  return (
    <nav>
      <ul className={menu}>
        <PageLink href="casita-rural" label="Casita Rural" />
        {/* <PageLink href="biblioteca" label="Biblioteca" />
        <PageLink href="talleres" label="Talleres" />
        <PageLink href="blog" label="Blog" />
        <PageLink href="videos" label="Videos" />
        <PageLink href="aporta" label="Aporta" />
        <PageLink href="contacto" label="Contacto" />
        <PageLink href="tributaria" label="Tributaria" /> */}
      </ul>
    </nav>
  );
}
