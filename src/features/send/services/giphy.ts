import axios from 'axios'

// const axiosInstance = axios.create({ baseURL: '' })

export const getRandomGif = async () => {
    try {
        const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=YeNLsFR5qJWVwFllvQo3EDdanGQtiBB1&tag=sad&rating=pg-13')
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch random gif')
    }
}