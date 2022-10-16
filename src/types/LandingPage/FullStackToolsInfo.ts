import { FullStack, FullStackToolsTypes } from "../../enums/LandingPage"

type FullStackToolsInfo = {
    id?: number
    tool: string,
    stack: FullStack
    type: FullStackToolsTypes
    opinion: string
}

export default FullStackToolsInfo