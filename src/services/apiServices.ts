import ApiError from "../types/Api/ApiError"
import { ContactFormRequest, ContactFormResponse } from "../types/ContactPage"

/**
 * Services related to My Api.
 */
class ApiServices {
    async submitContactForm (form : ContactFormRequest) : Promise<ApiError | ContactFormResponse> {
        try {
            const data = JSON.stringify(form)
            const settings = {
                method: "POST",
                body: data,
            }

            const request = await fetch('api/contactPage/contactForm', settings)
        
            const response = await request.json()
            
            return response
        } catch (e) {
            return e as ApiError 
        }
    }  
}

export const apiServices = new ApiServices() 