import axios from 'axios'

const urlBase = ' https://vqw9hp1iej.execute-api.us-east-1.amazonaws.com/desa/api'
const urlBaseSelect = 'https://15fasj3enj.execute-api.us-east-1.amazonaws.com/desa/api'

/**
 * @param {string}  url url a la cual consultar
 * esta funcion detecta si es una nueva url base (comienza con http:// o https://).
 * en caso de ser asi, retorna la url. en caso contrario, se asume que es un fragmento
 * de path por lo que se concatena con la constante urlBase
 **/
const readUrl = (url = '') =>
    url.startsWith('http://') || url.startsWith('https://') ? url : `${urlBase}/${url}`
const readUrlSelect = (url = '') =>
    url.startsWith('http://') || url.startsWith('https://') ? url : `${urlBaseSelect}/${url}`

const get = (url = '', headers = {}) => axios.get(readUrl(url), {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
    }
})

const getSelect = (url = '', headers = {}) => axios.get(readUrlSelect(url), {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
    }
})

const post = (url = '', body = {}, headers = {}) => axios.post(readUrl(url), body, {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
    }
})

const put = (url = '', body = {}, headers = {}) => axios.put(readUrl(url), body, {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
    }
})

const del = (url = '', headers = {}) => axios.delete(readUrl(url), {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
    }
})

const client = {
    get: get,
    post: post,
    put: put,
    delete: del,
    getSelect:getSelect
}

export default client;