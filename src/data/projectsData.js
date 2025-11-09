import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

const projects = [
  {
    id: 1,
    title: "Profil Kelurahan",
    description: "Description for Project 2",
    image: {project1},
    badge: ["PHP", "JavaScript", "JQuery", "MySQL", "Bootstrap","CSS"],
    label: ["Web"],
  },
  {
    id: 2,
    title: "Aplikasi Keamanan RT",
    description: "Description for Project 1",
    image: {project2},
    badge: ["Flutter", "Firebase"],
    label: ["Mobile"],
  },
  {
    id: 3,
    title: "Pengajuan Badge PKT",
    description: "Description for Project 3",
    image: {project3},
    badge: ["Laravel", "Tailwind"],
    label: ["Web"],
  },
];

export default projects;
