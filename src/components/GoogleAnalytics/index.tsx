const GA_TRACKING_ID = 'G-TDV3N3LET5';

export default function GoogleAnalytics() {
  if(process.env.NODE_ENV !== 'production') return null;

  return (  
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
      `
        }}
      /> 
    </>
  );
}
