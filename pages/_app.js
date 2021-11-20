import '../styles/globals.css'
import ContentWrapper from "../components/wrapper/ContentWrapper";

function MyApp({ Component, pageProps }) {
  return (
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
  )
}

export default MyApp
