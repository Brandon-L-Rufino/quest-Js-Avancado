import { baseUrl, repositoriesQuantity } from '../variables.js'
import { getEvents } from './events.js'

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
};

async function getForks(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}/forks`)
    return await response.json()
};

async function getStars(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}/stargazers`)
    return await response.json()
};

async function getWatchers(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}/`)
    return await response.json()
};

async function getLanguages(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}/languages`)
    return await response.json()
};

export { getRepositories, getEvents, getForks, getStars, getWatchers, getLanguages }