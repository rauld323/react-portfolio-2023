import "./App.css";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Introduction from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import projects from "./data/Projects.json";

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Details />
      {projects.map((project, i) => (
        <Projects
          key={i}
          image={project.image}
          title={project.title}
          gitHubLink={project.github_link}
          // liveLink={project.live_link}
          // techUsed={project.tech_used}
          // description={project.description}
          imageOnTheRight={project.imagePosition}
          // projectNumber={project.project_number}
        />
      ))}
    </>
  );
}

export default App;
