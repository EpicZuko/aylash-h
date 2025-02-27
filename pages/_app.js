import "@/styles/globals.css";
import Layout from "./layout";

export default function App({ Component, pageProps }) {
  const isCrmPage = pageProps?.path?.startsWith('/crm');
  return <>
  {isCrmPage ? (
    <div>
      <Component {...pageProps} />
    </div>
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )}
</>
}
