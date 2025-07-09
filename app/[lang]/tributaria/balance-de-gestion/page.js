import Link from "next/link";
import React from "react";
import Image from "next/image";
import classnames from "classnames";
import { documentGrid } from "./page.module.css";

export default function Tributaria() {
  return (
    <ul className={classnames('flex-2', documentGrid)}>
      <li>
        <Link href="/tributaria/Informe-de-gestión-Casita-Rural-2013-2019-páginas-ENE-27-comprimido.pdf" target="_blank">
          <Image src="/tributaria/informe-de-gestion-2013-a-2020-1.jpg" alt="Balance de Gestión 2013 a 2019" width={500} height={369} />
          Balance de Gestión 2013 a 2019
        </Link>
      </li>
      <li>
        <Link href="/tributaria/1.-Informe-de-gestion-1.pdf" target="_blank">
          <Image src="/tributaria/informe-de-gestion-2021-1.jpg" alt="Balance de Gestión 2020" width={500} height={369} />
          Balance de Gestión 2020
        </Link>
      </li>
      <li>
        <Link href="/tributaria/Informe-de-gestion-2021.pdf" target="_blank">
          <Image src="/tributaria/Imagen-informe-2021-500x369.jpeg" alt="Balance de Gestión 2021" width={500} height={369} />
          Balance de Gestión 2021
        </Link>
      </li>
      <li>
        <Link href="/tributaria/Balance-de-gestion-Casita-Rural-2022.pdf" target="_blank">
          <Image src="/tributaria/imagen-para-pagina-web-IG-2022-Ok-500x369.jpg" alt="Balance de Gestión 2022" width={500} height={369} />
          Balance de Gestión 2022
        </Link>
      </li>
      <li>
        <Link href="/tributaria/Carpeta-IG-2023-espanol.pdf" target="_blank">
          <Image src="/tributaria/Carpeta-IG-2023-caratula.png" alt="Balance de Gestión 2023" width={500} height={369} />
          Balance de Gestión 2023
        </Link>
      </li>
      <li>
        <Link href="/tributaria/Informe de gestion_Casita Rural 2024.pdf" target="_blank">
          <Image src="/tributaria/Informe de gestion_Casita Rural 2024.png" alt="Balance de Gestión 2024" width={500} height={369} />
          Balance de Gestión 2024
        </Link>
      </li>
    </ul>
  );
}
