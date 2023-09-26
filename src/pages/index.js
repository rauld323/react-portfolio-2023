import { Header, Introduction, Details, Projects, Footer } from './sharedComponents';
import projects from '../data/Projects.json';



export default function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <Details />
      {projects.map((project, i) => <Projects key={i} image={project.image} title={project.title} gitHubLink={project.github_link} liveLink={project.live_link} techUsed={project.tech_used} description={project.description} imageOnTheRight={project.imagePosition} projectNumber={project.project_number} />)}


      <Footer />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />


    </>
  );
}
