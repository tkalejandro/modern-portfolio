import { ProjectStatus } from "../../src/enums/LandingPage"
import { ProjectInfo } from "../../src/types/LandingPage"

const projectData: ProjectInfo[] = [
    {
        id: 14,
        name: 'Nefrologia y Dialisis',
        image: {
            src: './images/nyd.png',
            alt: 'Nefrologia y Dialisis'
        },
        description: 'Medical Self Service app for questions and online appointments via Saludtools API. Still in development.',
        tools: 'React, Typescript, Material UI, Express & MongoDB',
        github: '',
        gitlab: undefined,
        teamWork: 'https://www.linkedin.com/in/maximilian-faust-a7b236223/',
        website: 'https://nefrologiaenlinea.com/',
        startingDate: new Date(2023, 0,10),
        status: ProjectStatus.Active
    },
    {
        id: 13,
        name: 'Modern Portfolio',
        image: {
            src: './images/modernPortfolio.png',
            alt: 'First Portfolio'
        },
        description: 'This is how I write code! You should definitely check this portfolios code.',
        tools: 'NextJS, Typescript & Material UI',
        github: 'https://github.com/tkalejandro/modern-portfolio',
        gitlab: undefined,
        teamWork: undefined,
        website: undefined,
        startingDate: new Date(2022, 9,1),
        status: ProjectStatus.Concluded
    },
    {
        id: 12,
        name: '100Best Mobile',
        image: {
            src: './images/100bestnative.png',
            alt: '100 Best React Native'
        },
        description: 'Now on Playstore and AppStore.',
        tools: 'React Native (Expo cli) for Android and iOS & REST API.',
        github: undefined,
        gitlab: '',
        teamWork: 'https://100best.guide/about/team',
        website: 'https://play.google.com/store/apps/details?id=com.oneHundredBestGuideBerlin.app&pli=1',
        startingDate: new Date(2022, 2,1),
        status: ProjectStatus.Concluded
    },
    {
        id: 11,
        name: '100Best WebApp',
        image: {
            src: './images/100best.png',
            alt: '100 Best Web App'
        },
        description: 'Dinning Guide App. My major contributions are in the Web Architecture, UI and Product Development.',
        tools: 'Next JS (SSR), SCSS Modules & REST API.',
        github: undefined,
        gitlab: '',
        teamWork: 'https://100best.guide/about/team',
        website: 'https://100best.guide',
        startingDate: new Date(2021, 11,1),
        status: ProjectStatus.Concluded
    },
    {
        id: 10,
        name: '100Best Database',
        image: {
            src: './images/100bestdb.png',
            alt: '100 Best Database'
        },
        description: 'Database Management created for 100 Best. Planned all possible routes required by the project and contribute in the initial routes',
        tools: 'React, MongoDB & Express.',
        github: undefined,
        gitlab: '',
        teamWork: 'https://100best.guide/about/team',
        website: 'https://100best.guide',
        startingDate: new Date(2021, 10,1),
        status: ProjectStatus.Concluded
    },
    {
        id: 9,
        name: 'Stir It Up',
        image: {
            src: './images/stirItUp.png',
            alt: 'Stir It Up'
        },
        description: '3 days DCI Hackathon event. Order Online App. This idea got the first place. (2 Web-Developer 1 Marketing Team work)',
        tools: 'Next JS & CSS Modules',
        github: 'https://github.com/tkalejandro/hackathon-mongolia-restaurant',
        gitlab: undefined,
        teamWork: 'https://github.com/tkalejandro/hackathon-mongolia-restaurant',
        website: 'https://stir-it-up.vercel.app/',
        startingDate: new Date(2021, 10,1),
        status: ProjectStatus.Concluded
    },
    {
        id: 8,
        name: 'My Finances',
        image: {
            src: './images/myFinances.png',
            alt: 'Accounting'
        },
        description: 'This was my first React App made. Prototype of a JS Terminal Accounting App I did.',
        tools: 'React & CSS',
        github: 'https://github.com/tkalejandro/react-accounting-app',
        gitlab: undefined,
        teamWork: undefined,
        website: 'https://react-accounting-app.vercel.app/',
        startingDate: new Date(2021, 6,1),
        status: ProjectStatus.Concluded
    },
    {
        id: 7,
        name: 'The Nintendo Gallery',
        image: {
            src: './images/theNintendoGallery.png',
            alt: 'The Nintendo Gallery'
        },
        description: 'Vanilla JS Gallery App. Practice to work with objects.',
        tools: 'HTML, CSS and JavaScript: Module',
        github: 'https://github.com/tkalejandro/the-nintendo-gallery',
        gitlab: undefined,
        teamWork: undefined,
        website: 'https://tkalejandro.github.io/projects/the-nintendo-gallery/',
        startingDate: new Date(2021, 5,1),
        status: ProjectStatus.Concluded
    },
    {
        id: 6,
        name: 'To Do List',
        image: {
            src: './images/toDoList.png',
            alt: 'To Do List'
        },
        description: 'App to generate a to do list!',
        tools: 'HTML, CSS and JavaScript: Module',
        github: 'https://github.com/tkalejandro/to-do-list',
        gitlab: undefined,
        teamWork: undefined,
        website: 'https://tkalejandro.github.io/projects/to-do-list/',
        startingDate: new Date(2021, 4,1),
        status: ProjectStatus.Concluded
    },
    {
        id: 5,
        name: 'Password Generator',
        image: {
            src: './images/password.png',
            alt: 'To Do List'
        },
        description: 'App to generate strong passwords!',
        tools: 'HTML, CSS and JavaScript',
        github: 'https://github.com/tkalejandro/password-generator',
        gitlab: undefined,
        teamWork: undefined,
        website: 'https://tkalejandro.github.io/projects/password-generator/',
        startingDate: new Date(2021, 4,1),
        status: ProjectStatus.Concluded
    },
    {
        id: 4,
        name: 'The Color Game',
        image: {
            src: './images/theColorGame.png',
            alt: 'The Color Game'
        },
        description: 'Game to guess the RGB Color.',
        tools: 'HTML, CSS and JavaScript',
        github: 'https://github.com/tkalejandro/the-color-game',
        gitlab: undefined,
        teamWork: undefined,
        website: 'https://tkalejandro.github.io/projects/the-color-game/',
        startingDate: new Date(2021, 5,1),
        status: ProjectStatus.Concluded
    },
    {
        id: 3,
        name: 'First Portfolio',
        image: {
            src: './images/vanillaPortfolio.png',
            alt: 'First Portfolio'
        },
        description: 'My first vanilla porfolio.',
        tools: 'HTML & SCSS',
        github: 'https://github.com/tkalejandro/tkalejandro.github.io',
        gitlab: undefined,
        teamWork: undefined,
        website: 'https://tkalejandro.github.io/',
        startingDate: new Date(2021, 3,2),
        status: ProjectStatus.Concluded
    },
    {
        id: 2,
        name: 'Brand Animation',
        image: {
            src: './images/brandsAnimation.png',
            alt: 'Brand Animation'
        },
        description: 'Responsive Brand Animation Gallery',
        tools: 'CSS: Animation',
        github: 'https://github.com/tkalejandro/Brands-Animation.git',
        gitlab: undefined,
        teamWork: undefined,
        website: 'https://tkalejandro.github.io/projects/brands-animation/',
        startingDate: new Date(2021, 3,1),
        status: ProjectStatus.Concluded
    },
    {
        id: 1,
        name: 'Nefrologo En Linea',
        image: {
            src: './images/nefrologoEnLinea.png',
            alt: 'Nefrologo En Linea main page'
        },
        description: 'This is my first site i coded!',
        tools: 'Bootstrap 4.6',
        github: 'https://github.com/tkalejandro/nefrologoEnLinea.git',
        gitlab: undefined,
        teamWork: undefined,
        website: 'https://www.nefrologoenlinea.com/',
        startingDate: new Date(2020, 11,1),
        status: ProjectStatus.Concluded
    },
]

export default projectData