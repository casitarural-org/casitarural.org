import Link from 'next/link';
import { RiInstagramFill, RiFacebookBoxFill, RiYoutubeFill } from "react-icons/ri";
import { main, h1, nav, link, socials } from './page.module.css';

export default function SplashScreen() {
  return (
    <main className={main}>
      <h1 className={h1}>Casita rural</h1>
      <nav className={nav}>
        <Link href="/es/casita-rural" className={link}>Español</Link>
        <Link href="/en/casita-rural" className={link}>English</Link>
        <div className={socials}>
          <Link href="https://www.instagram.com/casita.rural/" target="_blank"><RiInstagramFill /></Link>
          <Link href="https://www.facebook.com/profile.php?id=100012297164199" target="_blank"><RiFacebookBoxFill /></Link>
          <Link href="https://www.youtube.com/channel/UC1G9PeDCwJnhZqxJjyUzZDg" target="_blank"><RiYoutubeFill /></Link>
        </div>
      </nav>
    </main>
  );
}
