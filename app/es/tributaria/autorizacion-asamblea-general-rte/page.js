import Link from "next/link";
import React from "react";
import Image from "next/image";
import classnames from "classnames";
import { documentGrid } from "./page.module.css";

export default function Tributaria() {
  return (
    <ul className={classnames('flex-2', documentGrid)}>
      <li>
        <Link href="/tributaria/12_Acta 013_AsambleaOrdinaria_2025_firmada.pdf" target="_blank">
          <Image src="/tributaria/autorizacion-de-la-asamblea-general-para-solicitar-el-rte.jpg" alt="Autorización de la asamblea general para solicitar el RTE" width={500} height={369} />
            Autorización de la asamblea general para solicitar el RTE
         </Link>
      </li>
    </ul>
  );
}
