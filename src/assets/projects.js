import fensterblatt1 from "./imgs/project_screenshots/project_fensterblatt_1.png";
import fensterblatt2 from "./imgs/project_screenshots/project_fensterblatt_2.png";
import sloth1 from "./imgs/project_screenshots/project_sloth_1.png";
import sloth2 from "./imgs/project_screenshots/project_sloth_2.png";
import bug1 from "./imgs/project_screenshots/project_bug.log_1.png";
import bug2 from "./imgs/project_screenshots/project_bug.log_2.png";
import beatify1 from "../assets/imgs/project_screenshots/project_beatify_1.png";
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
            "Screenshot of the Fensterblatt Digital landing page",
            "Screenshot of the Fensterblatt Digital projects page",
        ],
        icons: [<NextIcon key="nextIcon" />],
        url: "https://fensterblatt.digital/",
        githubUrl: "https://github.com/makucode/fensterblatt-digital",
    },
    {
        name: "bug.log",
        text: "bug.log is a simple and intuitive bug tracking app for small developer teams. It features user authentication, authorization and roles, with user management options for admins.",
        imgs: [bug2, bug1],
        alts: [
            "Screenshot of the bug.log dashboard",
            "Screenshot of the bug.log login screen",
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
        name: "beatify",
        text: "Audio engineering has been a huge passion of mine in the past, so I wanted to try out something to connect my love for web development and electronic music. beatify is a drum machine with drumpads and a simple step sequencer to program short drum loops.",
        imgs: [beatify1],
        alts: ["Screenshot of beatify"],
        icons: [<ReactIcon key="reactIcon" />, <SassIcon key="sassIcon" />],
        url: "https://beatify-drum-machine.herokuapp.com",
        githubUrl: "https://github.com/makucode/beatify",
    },
    {
        name: "Sloth - A Todo-List-App",
        text: "I made Sloth to practice developing with the MERN-Stack. It's a simple CRUD app featuring user authentication.",
        imgs: [sloth2, sloth1],
        alts: ["Screenshot of sloth", "Screenshot of the sloth login screen"],
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
