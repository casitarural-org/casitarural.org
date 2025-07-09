import Link from "next/link";
import React from "react";
import Image from "next/image";
import classnames from "classnames";
import { documentGrid } from "./page.module.css";

export default function Tributaria() {
  return (
    <ul className={classnames('flex-2', documentGrid)}>
      <li>
        <Link href="/tributaria/Acta01-Constitucion.pdf" target="_blank">
          <Image src="/tributaria/acta-de-constitucion.jpg" alt="Acta Constitución" width={500} height={369} />
          Acta Constitución
        </Link>
      </li>
    </ul>
  );
}
