import axios from 'axios';


const api = axios.create({
    baseURL: `https://newsapi.org/v2/`,
    params: {
        'country': "kr",
        'apiKey': process.env.REACT_APP_API_KEY
    }
})
const newsApi = {
    getAllNews: () =>
        api.get('top-headlines'),
    getNews: (category) =>
        api.get('top-headlines', {
            params: {
                category,
            }
        })

}

export { newsApi }