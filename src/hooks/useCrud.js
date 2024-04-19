import { useState } from 'react'
import axios from 'axios'

export const useCrud = (baseUrl) => {
    
    const [apiData, setApiData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    
    // ===== ===== Read ===== ===== 
    const getApi = ( path ) => {
        setIsLoading(true)
        const url = `${ baseUrl }${ path }/`
        axios.get(url)
            .then(({ data }) => {
                setApiData(data)
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }
    
    // ===== ===== Create ===== =====
    const postApi = ( path, newData ) => {
        const url = `${ baseUrl }${ path }/`
        setIsLoading(true)
        axios.post(url, newData)
            .then(({ data }) => {
                console.log(data)
                setApiData([ ...apiData, data ])
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }

    // ===== ===== Delete ===== =====
    const deleteApi = ( path, id ) => {
        const url = `${ baseUrl }${ path }/${id}/`
        setIsLoading(true)
        axios.delete(url)
            .then(({ data }) => {
                setApiData(apiData.filter( element =>  element.id !== id ) )
                console.log( data )
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }

    // ===== ===== Update ===== =====
    const patchApi = ( path, id, data ) => {
        const url = `${ baseUrl }${ path }/${id}/`
        setIsLoading(true)
        axios.patch(url, data)
            .then((res) => {
                setApiData(apiData.map( element =>  element.id === id ? res.data : element ) )
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }

    
    return [ apiData, getApi, postApi, deleteApi, patchApi, isLoading ]
}
