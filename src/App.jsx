import { useEffect, useState } from 'react'
import { useCrud } from './hooks'
import { ButtonPrimary, MainLoader, Modal, PlusIcon, UserForm, UserList } from './components'
import './App.css'

const baseUrl = 'https://users-crud.academlo.tech'

function App() {

    const [isOpenFormModal, setIsOpenFormModal] = useState(false)
    const [userToUpdate, setUserToUpdate] = useState()

    const [users, getUsers, postUser, deleteUser, editUser, isLoading] = useCrud(baseUrl)
    
    const handleCloseModal = () =>{
        setIsOpenFormModal(false)
        setUserToUpdate(undefined)
    }

    useEffect(() => {
        const path = '/users'
        getUsers(path)
    }, [])

    
    return (
        <main className="main">
            <header className="header">
                <h1>Usuarios</h1>
                <ButtonPrimary
                    type="button"
                    onClick={ () => setIsOpenFormModal(true) }
                >
                    <PlusIcon /> Crear nuevo usuario
                </ButtonPrimary>
            </header>
            <section>
                {
                    isLoading && (
                        <MainLoader />
                    )
                }
                {
                    users && (
                        <UserList
                            users={ users }
                            deleteUser={ deleteUser }
                            setUserToUpdate={ setUserToUpdate }
                        />
                    )
                }
            </section>
            {
                ( isOpenFormModal || !!userToUpdate ) && (
                    <Modal
                        onCloseModal={ handleCloseModal }
                        title={ userToUpdate ? 'Editar usuario' : 'Nuevo usuario' }
                    >
                        <UserForm
                            postUser={ postUser }
                            editUser={ editUser }
                            userToUpdate={ userToUpdate }
                            handleCloseModal={ handleCloseModal }
                            isLoading={ isLoading }
                        />
                    </Modal>
                )
            }
        </main>
    )
}

export default App
