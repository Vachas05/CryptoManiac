import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '3b46a02b7bmsh744b31542df6210p113156jsn7fe2fb61cef2'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : (count) => createRequest(`/coins?limit=${count}`) 
        })
    })     
})

export const {
    useGetCryptosQuery,
} = cryptoApi;