import axios from 'axios'

export const getRandomUselessFact = async () => {
    try {
        const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random')
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch random gif')
    }
}