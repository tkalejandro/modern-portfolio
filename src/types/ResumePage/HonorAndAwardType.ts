type HonorAndAwardType = {
    /**
     * Id of Honor / Award
     */
    id: number
    /**
     * Title of Honor or awards
     */
    title: string
    /**
     * When this happens
     */
    startDate: Date
    /**
     * Was for a period of time? 
     */
    endDate?: Date
    /**
     * Description of the Honor or Award
     */
    description: string
    /**
     * City where this happen
     */
    city?: string
    /**
     * Country where this happen
     */
    country: string
    /**
     * Was Online?
     */
    online: boolean
}

export default HonorAndAwardType