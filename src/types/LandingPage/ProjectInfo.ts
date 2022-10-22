type ProjectInfo = {
    /**
     * Name of the project
     */
    name: string,
    /**
     * Image local source or url and Alt text.
     */
    image: {src: string, alt: string},
    /**
     * Description of the project
     */
    description: string,
    /**
     * Laguages and tools used for the project
     */
    tools:string,
    /**
     * GitLab url or undefined.
     */
    gitlab?: string,
    /**
     * GitHub url or undefined
     */
    github?: string,
    /**
     * Team or partner url portfolio / website or undefined
     */
    teamWork?:string
    /**
     * Website URL where this project is uploaded.
     */
    website?: string
}

export default ProjectInfo