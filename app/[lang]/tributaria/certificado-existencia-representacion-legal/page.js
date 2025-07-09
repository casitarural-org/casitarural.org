import Link from "next/link";
import React from "react";
import Image from "next/image";
import classnames from "classnames";
import { documentGrid } from "./page.module.css";

export default function Tributaria() {
  return (
    <ul className={classnames('flex-2', documentGrid)}>
      <li>
        <Link href="/tributaria/1_CERTIFICADO DE EXISTENCIA Y REPRESENTACIÓN LEGAL_2025_FCR.pdf" target="_blank">
          <Image src="/tributaria/certificado-de-existencia-y-representacion-legal.jpg" alt="Certificado de existencia y representación legal" width={500} height={369} />
            Certificado de existencia y representación legal
         </Link>
      </li>
    </ul>
  );
}
