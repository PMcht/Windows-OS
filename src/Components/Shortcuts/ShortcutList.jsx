import About from "../../Sections/About/About";
import Contact from "../../Sections/Contact/Contact";
import Trash from "../../Sections/Trash/Trash";

export const ShortcutList = [
    {
        id: 0,
        img: "/W11/Folder_User_2.png",
        title: "About",
        component: <About />
    },
    {
        id: 2,
        img: "/W11/Help.png",
        title: "Contact",
        component: <Contact />
    },
    {
        id: 3,
        img: "/W11/Trash_Full.png",
        title: "Trash",
        component: <Trash />
    },
]