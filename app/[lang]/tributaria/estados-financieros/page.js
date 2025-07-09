import Link from "next/link";
import React from "react";
import Image from "next/image";
import classnames from "classnames";
import { documentGrid } from "./page.module.css";

export default function Tributaria() {
  return (
    <ul className={classnames('flex-2', documentGrid)}>
      <li>
        <Link href="/tributaria/E.F Fundación Casita Rural 2024_Firmados.pdf" target="_blank">
          <Image src="/tributaria/estados-financieros.jpg" alt="Estados Financieros" width={500} height={369} />
          Estados Financieros
        </Link>
      </li>
      <li>
        <Link href="/tributaria/9_Informe de revisor fiscal 2024.pdf" target="_blank">
          <Image src="/tributaria/informe-del-revisor-fiscal.jpg" alt="Informe de revisión fiscal" width={500} height={369} />
          Informe de revisión fiscal
        </Link>
      </li>
    </ul>
  );
}
