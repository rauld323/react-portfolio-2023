import { Header, Introduction, Details, Projects, Footer } from './sharedComponents';

export default function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <Details />

      <Projects image={"./images/address.png"} showSectionTitle gitHubLink={"https://github.com/rauld323/address-book"} />
      <Projects image={"./images/api.png"} imageOnTheRight gitHubLink={"https://github.com/rauld323/api-landing-page"} />
      <Projects image={"./images/blog.png"} gitHubLink={"https://github.com/rauld323/react-ufo-blog"} />

      <Footer />

      <link
        rel="stylesheet"
        type="text/css"
        media="screen"
        href="/css/styles.css"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      /></>


  );
}
