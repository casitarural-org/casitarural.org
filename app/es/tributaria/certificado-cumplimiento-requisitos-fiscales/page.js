import Link from "next/link";
import React from "react";
import Image from "next/image";
import classnames from "classnames";
import { documentGrid } from "./page.module.css";

export default function Tributaria() {
  return (
    <ul className={classnames('flex-2', documentGrid)}>
      <li>
        <Link href="/tributaria/Certificado-de-cumplimiento-de-requisitos-fiscales.pdf" target="_blank">
          <Image src="/tributaria/certificado-de-cumplimiento.jpg" alt="Certificado de cumplimiento" width={500} height={369} />
          Certificado de cumplimiento
        </Link>
      </li>
      <li>
        <Link href="/tributaria/Renta-FCR-Ano-Gravable-2023-1117608103031.pdf" target="_blank">
          <Image src="/tributaria/Imagen-renta-ano-gravable.jpeg" alt="Renta Año Gravable" width={500} height={369} />
          Renta Año Gravable
        </Link>
      </li>
    </ul>
  );
}
