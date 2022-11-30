import { ApiError } from "../../types/Api"

const isApiError = (apiError : unknown) : apiError is ApiError => {
    return (apiError as ApiError).error !== undefined
} 

export default isApiError