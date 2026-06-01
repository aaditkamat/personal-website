import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { memo, PropsWithChildren } from 'react';

import { HomepageMeta } from '../../data/dataDef';

const CHATBASE_SNIPPET = `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase = (...arguments) => { if (!window.chatbase.q) { window.chatbase.q = [] } window.chatbase.q.push(arguments) };window.chatbase=new Proxy(window.chatbase,{get(target, prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="XOb4KSWDUZwjZCiWH9FL4";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load", onLoad)}})();`;

const CHATBASE_DANGEROUS_HTML = { __html: CHATBASE_SNIPPET };

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({ children, title, description }) => {
  const { asPath: pathname } = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href={`https://www.aaditkamat.dev${pathname}`} key="canonical" rel="canonical" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/site.webmanifest" rel="manifest" />
        <link rel="preconnect" href="https://challenges.cloudflare.com" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`https://www.aaditkamat.dev${pathname}`} property="og:url" />
      </Head>
      <Script dangerouslySetInnerHTML={CHATBASE_DANGEROUS_HTML} id="chatbase-snippet" strategy="afterInteractive" />
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
