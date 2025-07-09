import Link from "next/link";
import React from "react";
import Image from "next/image";
import classnames from "classnames";
import { documentGrid } from "./page.module.css";

export default function Tributaria() {
  return (
    <ul className={classnames('flex-2', documentGrid)}>
      <li>
        <Link href="/tributaria/Certificado-de-antecedentes-judiciales.pdf" target="_blank">
          <Image src="/tributaria/Certificado de antecedentes judiciales y declaración de caducidad de contratos estatales.jpg" alt="Certificado de antecedentes judiciales y declaración de caducidad de contratos estatales" width={500} height={369} />
            Certificado de antecedentes judiciales y declaración de caducidad de contratos estatales
         </Link>
      </li>
    </ul>
  );
}
