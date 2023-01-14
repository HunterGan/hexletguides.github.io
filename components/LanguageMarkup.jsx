// @ts-check
import React from 'react';
import Head from 'next/head';
/// import cfg from '../data/config.js';

    /// Если сайт имеет локализованную версию для другого языка -
    /// вставляем тег <Link> в <Head> страницы. Иначе пропускаем, 
    /// ведь гугл проигнорирует страницы без пары.

const LanguageMarkup = () => {
  return (
    <Head>
      <link rel="alternate" hrefLang={'example'} href={'example'} />
      <link rel="alternate" hrefLang="x-default" href={'example'} />
    </Head>
  );
};

export default LanguageMarkup;
/**
 <link rel="alternate" hreflang="en-gb"
       href="https://en-gb.example.com/page.html" />
  <link rel="alternate" hreflang="en-us"
       href="https://en-us.example.com/page.html" />
  <link rel="alternate" hreflang="en"
       href="https://en.example.com/page.html" />
  <link rel="alternate" hreflang="de"
       href="https://de.example.com/page.html" />
 <link rel="alternate" hreflang="x-default"
       href="https://www.example.com/" />
       <link rel="alternate" hrefLang={locale === 'en' ? 'ru' : locale} href={`${cfg.siteUrl}${prefix === '' ? '/ru' : ''}${path}`} />
 */