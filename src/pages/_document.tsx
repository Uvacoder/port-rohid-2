import { GA_TRACKING_ID } from "@/lib/gtag";
import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
const isProd = process.env.NODE_ENV === "production";

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        {isProd && (
          <>
            <Script
              strategy="beforeInteractive"
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            ></Script>
            <Script
              id="google-analytics"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </Head>
      <body className="bg-gray-900 text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
