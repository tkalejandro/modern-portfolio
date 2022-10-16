import { FullStack, FullStackToolsTypes } from "../../../../enums/LandingPage";
import { FullStackToolsInfo } from "../../../../types/LandingPage";


/**
 * My FrontEnd knowledge
 */
 const frontEndData : FullStackToolsInfo[] = [
    {
        tool: "HTML5",
        stack: FullStack.FrontEnd,
        type: FullStackToolsTypes.Language,
        opinion: "Semantics and accesability",
    },
    {
        tool: "CSS",
        stack: FullStack.FrontEnd,
        type: FullStackToolsTypes.Design,
        opinion: "Grid and Flex / Keyframes and Media.",
    },
    {
        tool: "SCSS",
        stack: FullStack.FrontEnd,
        type: FullStackToolsTypes.Design,
        opinion: "@mixin / Variables / Nesting"
    },
    {
        tool: "Bootstrap",
        stack: FullStack.FrontEnd,
        type: FullStackToolsTypes.Design,
        opinion: "v3.0 ~ v4.6 / Can adapt to other versions"
    },
    {
        tool: "JavaScript",
        stack: FullStack.FrontEnd,
        type: FullStackToolsTypes.Language,
        opinion: "ES6 / Object Oriented Programming / Classes / DOM"
    },
    {
        tool: "TypeScript",
        stack: FullStack.FrontEnd,
        type: FullStackToolsTypes.Language,
        opinion: "Types, enums and interfaces"
    },
    {
        tool: "React",
        stack: FullStack.FrontEnd,
        type: FullStackToolsTypes.Framework,
        opinion: "Arrow Based Components / REST API / Redux / Hooks"
    },
    {
        tool: "NextJS",
        stack: FullStack.FrontEnd,
        type: FullStackToolsTypes.Framework,
        opinion: "getStaticProps / getStaticPaths / Server side rendering / API folder / CSS.modules"
    },
    {
        tool: "React Native",
        stack: FullStack.Mobile,
        type: FullStackToolsTypes.Framework,
        opinion: "EXPO (cli) for Android / iOS"
    }, {
        tool: "Material UI",
        stack: FullStack.FrontEnd,
        type: FullStackToolsTypes.Design,
        opinion: "v4.0 ~ v5.0 / Can adapt to other versions"
    }, 
]

/**
 * My Backend knowlege
 */
const BackEndData: FullStackToolsInfo[] = [
    {
        tool: "Node.js",
        stack: FullStack.BackEnd,
        type: FullStackToolsTypes.Tool,
        opinion: "Basics"
    },
    {
        tool: "Express",
        stack: FullStack.BackEnd,
        type: FullStackToolsTypes.Framework,
        opinion: "CRUD Methods / Model View Controller"
    },
    {
        tool: "MongoDB",
        stack: FullStack.BackEnd,
        type: FullStackToolsTypes.Tool,
        opinion: "Atlas / Compass"
    },
    {
        tool: "Authentication",
        stack: FullStack.BackEnd,
        type: FullStackToolsTypes.Tool,
        opinion: "Bcryptjs / jwt / cookies"
    },
    {
        tool: "Postman",
        stack: FullStack.BackEnd,
        type: FullStackToolsTypes.Tool,
        opinion: "For API testing"
    },
    {
        tool: "C#",
        stack: FullStack.BackEnd,
        type: FullStackToolsTypes.Framework,
        opinion: "Object oriented Programming, interfaces, dependency injection"
    },
    {
        tool: "ASP.NET",
        stack: FullStack.BackEnd,
        type: FullStackToolsTypes.Framework,
        opinion: "Familiar with project structures"
    }, {
        tool: "Entity Framework",
        stack: FullStack.BackEnd,
        type: FullStackToolsTypes.Framework,
        opinion: "Familiar wih the methods and commands for updating SQL Tables"
    }, 
    {
        tool: "SQL",
        stack: FullStack.BackEnd,
        type: FullStackToolsTypes.Language,
        opinion: "Familiar wih the commands / Table Relationship"
    }, 
    {
        tool: "SQL Server Management Studio",
        stack: FullStack.BackEnd,
        type: FullStackToolsTypes.Framework,
        opinion: "Management of databases and table"
    }, 
]

export const fullStackData : FullStackToolsInfo[] = [...frontEndData, ...BackEndData]