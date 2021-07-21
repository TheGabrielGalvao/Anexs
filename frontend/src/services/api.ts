import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://localhost:44318/api'
})

export const IBGEApi = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/'
})
