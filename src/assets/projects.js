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
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        imgs: [fensterblatt1, fensterblatt2],
        alts: [
            "Screenshot of the landing page of Fensterblatt Digital",
            "Screenshot of the projects page of Fensterblatt Digital",
        ],
        icons: [<NextIcon key="nextIcon" />],
        url: "https://fensterblatt.digital/",
    },
    {
        name: "bug.log",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
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
        url: "https://fensterblatt.digital/",
    },
    {
        name: "Sloth - A Todo-List-App",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
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
        url: "https://fensterblatt.digital/",
    },
];

export default projects;
