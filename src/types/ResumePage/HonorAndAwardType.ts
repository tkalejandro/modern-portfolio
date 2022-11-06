type HonorAndAwardType = {
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
    country: string
    online: boolean
}

export default HonorAndAwardType