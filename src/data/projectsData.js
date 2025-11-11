import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

const projectsData = [
  {
    id: 1,
    title: "Profil Kelurahan",
    description: "Layanan informasi berbasis web untuk kelurahan",
    image: project1,
    badge: ["PHP", "JavaScript", "JQuery", "MySQL", "Bootstrap", "CSS"],
    label: ["Web"],
  },
  {
    id: 2,
    title: "Aplikasi Keamanan RT",
    description: "Aplikasi mobile untuk meningkatkan keamanan lingkungan RT",
    image: project2,
    badge: ["Flutter", "Firebase"],
    label: ["Mobile"],
  },
  {
    id: 3,
    title: "Pengajuan Badge PKT",
    description: "Sistem pengajuan badge secara online untuk tamu/vendor PKT",
    image: project3,
    badge: ["Laravel", "Tailwind"],
    label: ["Web"],
  },
];

export default projectsData;
