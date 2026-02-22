import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import Script from 'next/script';
import {memo, PropsWithChildren, useMemo} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();

  const htmlContent = `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase = (...arguments) => { if (!window.chatbase.q) { window.chatbase.q = [] } window.chatbase.q.push(arguments) };window.chatbase=new Proxy(window.chatbase,{get(target, prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="XOb4KSWDUZwjZCiWH9FL4";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load", onLoad)}})();`;

  const dangerouslySetInnerHTML = useMemo(() => ({__html: htmlContent}), [htmlContent]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href={`https://reactresume.com${pathname}`} key="canonical" rel="canonical" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`https://reactresume.com${pathname}`} property="og:url" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Head>
      <Script dangerouslySetInnerHTML={dangerouslySetInnerHTML} id="chatbase-snippet" strategy="afterInteractive" />
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
