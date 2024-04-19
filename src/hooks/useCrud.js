import { useState } from 'react'
import axios from 'axios'

export const useCrud = (baseUrl) => {
    
    const [apiData, setApiData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingUsers, setIsLoadingUsers] = useState(false)
    
    // ===== ===== Read ===== ===== 
    const getApi = ( path ) => {
        
        setIsLoadingUsers(true)
        const url = `${ baseUrl }${ path }/`

        axios.get(url)
            .then(({ data }) => {
                setApiData(data)
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
                setIsLoadingUsers(false)
            })
    }
    
    // ===== ===== Create ===== =====
    const postApi = async( path, newData ) => {

        const url = `${ baseUrl }${ path }/`
        setIsLoading(true)
    
        try {
            const { data } = await axios.post(url, newData)
            setApiData([ ...apiData, data ])
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }


    // ===== ===== Delete ===== =====
    const deleteApi = async( path, id ) => {

        const url = `${ baseUrl }${ path }/${id}/`
        setIsLoading(true)

        try {
            await axios.delete(url)
            setApiData(apiData.filter( element =>  element.id !== id ) )
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    // ===== ===== Update ===== =====
    const patchApi = async( path, id, data ) => {

        const url = `${ baseUrl }${ path }/${id}/`
        setIsLoading(true)

        try {
            const res = await axios.patch(url, data)
            setApiData(apiData.map( element =>  element.id === id ? res.data : element ) )
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    
    return [ apiData, getApi, postApi, deleteApi, patchApi, isLoadingUsers, isLoading ]
}
