import { API_BASE_URL, API_ENDPOINTS } from "@constants/api"

export const registerUser = async(data) => {
    console.log(data)
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.REGISTER}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

    return response
}