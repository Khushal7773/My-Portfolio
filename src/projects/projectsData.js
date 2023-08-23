import projectOne from "../assets/project-1.png"
import projectTwo from "../assets/project-2.png"
import projectThree from "../assets/project-3.png"

const projects = [
     {
        title: "SoMe Plateform",
        image: projectOne,
        description: (
            <>
                <p>This is cool Social Media app.</p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    },
     {
        title: "Landing Page",
        image: projectTwo,
        description: (
            <>
                <p>This is a landing page of a website.</p>
            </>
        ),
        github: "https://github.com/Khushal7773/nice_homepage",
        demo: "https://nice-homepage.netlify.app/",
    },
     {
        title: "Twiggy",
        image: projectThree,
        description: (
            <>
                <p>This is cool Food delivery app.</p>
            </>
        ),
        github: "https://github.com/Khushal7773/Twiggy",
        demo: "https://thetwiggy.netlify.app/",
    },
];


export default projects;