import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Blocks } from "../../components/blocks-renderer";
import { styles } from "./styles"
import { googleFontsLink } from "./google-fonts"

export const Layout = ({ rawData, children }) => {
  const page = rawData.page
  const global = rawData.global

  return (
    <>    
      <Head>
        <title>{page.meta?.title}</title>
        <meta name="description" content={page.meta?.description} />
        <link rel="icon" type="image/png" sizes="48x48" href={global.favicon} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {page.meta?.ogImage &&
          <>
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="og:site_name" content={global.siteUrl} />
            <meta property="og:url" content={global.siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={page.meta?.title} />
            <meta property="og:description" content={page.meta?.description} />
            <meta property="og:image" content={page.meta?.ogImage} />
          </>
        }
        
        <style id="theme-styles"
          dangerouslySetInnerHTML={{
            __html: styles(global?.theme, page?.backgroundColor ),
          }}
        />
        
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${global.gtmId}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (document.location.hostname.replace("www.", "") === "${global.siteUrl}") {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${global.gtmId}', {
                  page_path: window.location.pathname,
                });
              }
            `,
          }}
        />

        {/* Google Fonts */ }
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        {googleFontsLink(global.theme) && (
          <link href={googleFontsLink(global.theme)} rel="stylesheet"></link>
        )}
      </Head>
      
      <Header blocks={page?.blocks} globalData={global} />
      {children}
      <div id="footer">
        <Blocks blocks={global.blocks} />
        <div className="bg-black text-white py-6">
            <div className="max-w-desktop-full mx-auto flex flex-row-reverse sm:flex-col justify-between pt-10 pb-10 pr-20 pl-20">
              <ul className="justify-start flex gap-6 text-sm">
                <li><a className="underline" target="_blank" href="https://discuss.ipfs.tech/tos">Terms of Use</a></li>
                <li><a className="underline" target="_blank" href="https://discuss.ipfs.tech/privacy">Privacy Policy</a></li>
                <li><a className="underline" target="_blank" href="https://ipfs.tech/legal/">DMCA Policy</a></li>
              </ul>
              <p className="text-left text-sm sm:pt-6">Made with love by <a className="underline" href="https://protocol.ai/" target="_blank">Protocol Labs</a></p>
            </div>
          </div>
      </div>
    </>
  );
};
