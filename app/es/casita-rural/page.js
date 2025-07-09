import React from 'react';
import ImageCarousel from '../components/ImageCarousel';

const IMAGE_DATA = [
  { url: '/Que-es-eso-de-ser-mama_Dia-3-173.jpg', size: [1500, 1000] },
  { url: '/Que-es-eso-de-ser-mama_dia4-84.jpg', size: [1500, 1000] },
  { url: '/Semillero-Día-1_15.02-30.jpg', size: [1500, 1000] },
  { url: '/Semillero-Día-1_15.02-41.jpg', size: [1500, 1000] },
  { url: '/Tutorias-Casita-Rural02.jpg', size: [1500, 1000] },
  { url: '/IMG_3150.jpg', size: [1502, 1000] },
  { url: '/IMG_3156.jpg', size: [1502, 1000] },
  { url: '/Que-es-eso-de-ser-mama_dia4-113.jpg', size: [1500, 1000] },
  { url: '/Semillero-Día-1_15.02-18.jpg', size: [1500, 1000] },
  { url: '/Semillero-Día-1_15.02-29.jpg', size: [1500, 1000] },
];

const LOCALIZED_STRINGS = {
  description: {
    es: 'Somos una organización comunitaria sin ánimo de lucro. Creamos espacios para compartir, escucharnos, acompañarnos y educarnos. Tenemos diversos programas para acercar a niños y jóvenes rurales al arte y para promover el intercambio cultural entre lo rural y lo urbano. Le damos fuerza a todo lo que nos ayuda a ser mejores juntos.',
    en: 'We are a non-profit community organization. We create spaces to share, listen, support, and educate ourselves. We have various programs to bring rural children and youth closer to the arts and to promote cultural exchange between rural and urban areas. We empower everything that helps us be better together.',
  },
};

export default function SplashScreen({ params }) {
  const { lang } = React.use(params);
  
  return <>
    <div className="flex gap-12">
      <div className="flex-1 overflow-hidden">
        <ImageCarousel images={IMAGE_DATA} />
      </div>
      <div className="flex-1">
        <h1>Casita Rural</h1>
        <p>
          {LOCALIZED_STRINGS.description[lang]}
        </p>
      </div>
    </div>
  </>;
}

export const generateStaticParams = () => {
  return [
    { lang: 'es' },
    { lang: 'en' },
  ];
};
