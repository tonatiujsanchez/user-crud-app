import { useState } from 'react'
import axios from 'axios'
import { toastError, toastSuccess } from '../libs'



export const useCrud = (baseUrl) => {
    
    const [apiData, setApiData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingUsers, setIsLoadingUsers] = useState(false)
    const [hasError, setHasError] = useState(false)

    const [userDeleted, setUserDeleted] = useState()
    
    // ===== ===== Read ===== ===== 
    const getApi = ( path ) => {
        
        setIsLoadingUsers(true)
        const url = `${ baseUrl }${ path }/`

        axios.get(url)
            .then(({ data }) => {
                setApiData(data)
                setHasError(false)
            })
            .catch((error)=>{
                setHasError(true)
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
            toastSuccess('Usuario creado correctamente')
        } catch (error) {
            console.log(error)
            toastError('Hubo un error al intentar crear el usuario')
        } finally {
            setIsLoading(false)
        }
    }


    // ===== ===== Delete ===== =====
    const deleteApi = async( path, user ) => {

        const url = `${ baseUrl }${ path }/${user.id}/`
        setIsLoading(true)

        try {
            await axios.delete(url)
            setApiData(apiData.filter( element =>  element.id !== user.id ) )
            // Mostrar una alert para indicar al usuario que el usuario fue eliminado
            setUserDeleted(user)
        } catch (error) {
            console.log(error)
            toastError('Hubo un error al intentar eliminar el usuario')
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
            toastSuccess('Usuario actualizado correctamente')
        } catch (error) {
            console.log(error)
            toastError('Hubo un error al intentar actualizar el usuario')
        } finally {
            setIsLoading(false)
        }
    }

    
    return [ 
        apiData, 
        getApi, 
        postApi, 
        deleteApi, 
        patchApi, 
        isLoadingUsers, 
        isLoading,
        userDeleted,
        setUserDeleted, 
        hasError ]
}
