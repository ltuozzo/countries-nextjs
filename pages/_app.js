import '../styles/globals.css'
import ContentWrapper from "../components/wrapper/content-wrapper";

function MyApp({ Component, pageProps }) {
  return (
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
  )
}

export default MyApp
