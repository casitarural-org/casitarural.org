import Link from "next/link";
import React from "react";
import Image from "next/image";
import classnames from "classnames";
import { documentGrid } from "./page.module.css";

export default function Tributaria() {
  return (
    <ul className={classnames('flex-2', documentGrid)}>
      <li>
        <Link href="/tributaria/6.-Estatutos-Fundacion-Casita-Rural-fusionado_compressed_organized.pdf" target="_blank">
          <Image src="/tributaria/estatutos-fundacion-casita-rural.jpg" alt="Estatutos Fundación Casita Rural" width={500} height={369} />
            Estatutos Fundación Casita Rural
         </Link>
      </li>
    </ul>
  );
}
