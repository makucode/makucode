import fensterblatt1 from "./imgs/project_screenshots/project_fensterblatt_1.png";
import fensterblatt2 from "./imgs/project_screenshots/project_fensterblatt_2.png";
import sloth1 from "./imgs/project_screenshots/project_sloth_1.png";
import sloth2 from "./imgs/project_screenshots/project_sloth_2.png";
import bug1 from "./imgs/project_screenshots/project_bug.log_1.png";
import bug2 from "./imgs/project_screenshots/project_bug.log_2.png";
import NextIcon from "../components/icons/NextIcon";
import ReactIcon from "../components/icons/ReactIcon";
import SassIcon from "../components/icons/SassIcon";
import NodeIcon from "../components/icons/NodeIcon";
import MongoIcon from "../components/icons/MongoIcon";

const projects = [
    {
        name: "Fensterblatt Digital",
        text: "Fensterblatt Digital is a web design and development project I'm running with a good friend of mine. We teamed up to create beautiful, modern and user-friendly websites and web apps for local businesses.",
        imgs: [fensterblatt1, fensterblatt2],
        alts: [
            "Screenshot of the landing page of Fensterblatt Digital",
            "Screenshot of the projects page of Fensterblatt Digital",
        ],
        icons: [<NextIcon key="nextIcon" />],
        url: "https://fensterblatt.digital/",
        githubUrl: "https://github.com/makucode/fensterblatt-digital",
    },
    {
        name: "bug.log",
        text: "bug.log is a simple and intuitive bug tracking app for small developer teams. It features user authentication, authorization and roles, with user management options for admins.",
        imgs: [bug1, bug2],
        alts: [
            "Screenshot of the landing page of Fensterblatt Digital",
            "Screenshot of the projects page of Fensterblatt Digital",
        ],
        icons: [
            <ReactIcon key="reactIcon" />,
            <SassIcon key="sassIcon" />,
            <NodeIcon key="nodeIcon" />,
            <MongoIcon key="mongoIcon" />,
        ],
        url: "https://bug-log-mern.herokuapp.com/",
        githubUrl: "https://github.com/makucode/bug.log",
    },
    {
        name: "Sloth - A Todo-List-App",
        text: "I made Sloth to practice developing with the MERN-Stack. It's a simple CRUD app featuring user authentication.",
        imgs: [sloth1, sloth2],
        alts: [
            "Screenshot of the landing page of Fensterblatt Digital",
            "Screenshot of the projects page of Fensterblatt Digital",
        ],
        icons: [
            <ReactIcon key="reactIcon" />,
            <SassIcon key="sassIcon" />,
            <NodeIcon key="nodeIcon" />,
            <MongoIcon key="mongoIcon" />,
        ],
        url: "https://sloth-mern.herokuapp.com/",
        githubUrl: "https://github.com/makucode/sloth",
    },
];

export default projects;
