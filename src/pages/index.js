import { Header, Intro, Details, Projects } from './sharedComponents';

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Details />
      <Projects />

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
