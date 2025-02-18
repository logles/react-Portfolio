import Project from "../components/project";
import arImage from "../assets/ar.png";
import cmImage from "../assets/cm.png";
import waImage from "../assets/wa.png";
import vbImage from "../assets/vb.png";

function Portfolio() {
  const projects = [
    {
      title: "Auto README",
      description:
        "A dynamic tool that generates professional, well-structured README files.",
      link: "https://github.com/logles/autoReadme",
      // linkTwo: "",
      image: arImage,
    },
    {
      title: "Card Flipping Game",
      description:
        "An interactive memory game where users find matching pairs.",
      link: "https://github.com/logles/Find_and_Match",
      linkTwo: "https://logles.github.io/Find_and_Match/",
      image: cmImage,
    },
    {
      title: "Weather API",
      description: "A sleek web app that fetches real-time weather data.",
      link: "https://github.com/logles/weatherAPI",
      linkTwo: "https://weatherapi-2fmy.onrender.com",
      image: waImage,
    },
    {
      title: "Vehicle Builder",
      description:
        "A robust database application that allows users to add and drive cars.",
      link: "https://github.com/logles/vehicle-builder",
      // linkTwo: "",
      image: vbImage,
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          linkTwo={project.linkTwo}
          image={project.image}
        />
      ))}
    </div>
  );
}
export default Portfolio;
