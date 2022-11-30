import pcBoy from "../img/bg-image-11.jpeg";

import { MdCall, MdWeb } from 'react-icons/md';
import { BsPhone, BsLaptop, BsTriangle } from "react-icons/bs";
import { SiAdobeindesign, SiRedux } from "react-icons/si";
import { TfiWorld } from "react-icons/tfi";
import { FaCss3, FaSass, FaHtml5, FaReact, FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoJavascript, IoMdMail } from "react-icons/io";


const  db = {
  project: [
    {
      category: "Web Design",
      title: "Website Design for Marketing Agency Startup",
      desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores",
      image: 'https://res.cloudinary.com/dxsom7jmx/image/upload/v1668783580/Meta%20tags/shot_fpwnaw.png',
    },
    {
      category: "Web Design",
      title: "Website Design for Marketing Agency Startup",
      desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores",
      image: pcBoy,
    },
    {
      category: "Web Design",
      title: "Website Design for Marketing Agency Startup",
      desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores",
      image: pcBoy,
    },
    {
      category: "Web Design",
      title: "Website Design for Marketing Agency Startup",
      desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores",
      image: pcBoy,
    },
  ],
  features: [
    {
      icon: <BsPhone />,
      name: "Web Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maxime amet quis earum rem, quod consequatur! Nostrum, ratione iste nulla cumque.",
      color: "#9BD2CF",
    },
    {
      icon: <BsLaptop />,
      name: "Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maxime amet quis earum rem, quod consequatur! Nostrum, ratione iste nulla cumque.",
      color: "#FEC347",
    },
    {
      icon: <BsTriangle />,
      name: "SEO Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maxime amet quis earum rem, quod consequatur! Nostrum, ratione iste nulla cumque.",
      color: "#FECCB4",
    },
    {
      icon: <SiAdobeindesign />,
      name: "Web Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maxime amet quis earum rem, quod consequatur! Nostrum, ratione iste nulla cumque.",
      color: "#92B5FF",
    },
    {
      icon: <MdWeb />,
      name: "Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maxime amet quis earum rem, quod consequatur! Nostrum, ratione iste nulla cumque.",
      color: "C4D39B",
    },
    {
      icon: <TfiWorld />,
      name: "SEO Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maxime amet quis earum rem, quod consequatur! Nostrum, ratione iste nulla cumque.",
      color: "#C4D39B",
    },
  ],
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
      color: "#9BD2CF",
    },
    {
      icon: <FaReact />,
      name: "React jS",
      color: "#FEC347",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
      color: "#FECCB4",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
      color: "#92B5FF",
    },
    {
      icon: <FaSass />,
      name: "SCSS",
      color: "#C4D39B",
    },
    {
      icon: <IoLogoJavascript />,
      name: "JavaScript",
      color: "#D1CEFF",
    },
  ],
contact: [
    {
      icon: <MdCall />,
      mode: 'PHONE',
      connect: '+00 123 456 7089',
      color: '#9BD2CF',
    },
    {
      icon: <IoMdMail />,
      mode: 'MAIL',
      connect: 'info@domainname.com',
      color: '#FEC347',
    },
    {
      icon: <FaMapMarkerAlt />,
      mode: 'VISIT MY GITHUB',
      connect: 'info@domainname.com',
      color: '#FECCB4',
    },
  ]
};

export default db;