import { header, main } from './layout.module.css';
import Menu from './components/Menu';

export default function MenuBarLayout({ children }) {
  return (
    <>
      <header className={header}>
        <Menu />
      </header>
      <main className={main}>
        {children}
      </main>
    </>
  );
}
