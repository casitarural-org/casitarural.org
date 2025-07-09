import classnames from 'classnames';
import Link from 'next/link';
import { menu } from './layout.module.css';

export default function Tributaria({ children}) {
  return (
    <div className="flex gap-10">
      <nav className={classnames('flex-1', menu)}>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="./balance-de-gestion">Balance de Gestión</Link>
          </li>
          <li>
            <Link href="./estados-financieros">Estados financieros</Link>
          </li>
          <li>
            <Link href="certificado-cumplimiento-requisitos-fiscales">Certificado de cumplimiento de los requisitos fiscales</Link>
          </li>
          <li>
            <Link href="acta-de-constitucion">Acta de constitución</Link>
          </li>
          <li>
            <Link href="certificado-existencia-representacion-legal">Certificado de existencia y representación legal</Link>
          </li>
          <li>
            <Link href="autorizacion-asamblea-general-rte">Autorización de la Asamblea General para solicitar el RTE</Link>
          </li>
          <li>
            <Link href="estatutos">Estatutos</Link>
          </li>
          <li>
            <Link href="certificado-antecedentes-judiciales-caducidad-contratos">Certificado de antecedentes judiciales y declaración de caducidad de contratos estatales</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
