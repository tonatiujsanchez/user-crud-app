import { useEffect, useState } from 'react'
import { useCrud } from './hooks'
import { ButtonPrimary, Modal, PlusIcon, UserForm, UserList } from './components'
import './App.css'

const baseUrl = 'https://users-crud.academlo.tech'

function App() {

    const [isOpenFormModal, setIsOpenFormModal] = useState(false)
    const [users, getUsers, postUser, deleteUser, editUser, isLoading] = useCrud(baseUrl)
    
    const handleCloseModal = () =>{
        setIsOpenFormModal(false)
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
                    users && (
                        <UserList
                            users={ users }
                            editUser={ editUser }
                            deleteUser={ deleteUser }
                        />
                    )
                }
            </section>
            {
                isOpenFormModal && (
                    <Modal
                        onCloseModal={ handleCloseModal }
                        title={ 'Nuevo usuario' }
                    >
                        <UserForm
                            postUser={ postUser }
                            editUser={ editUser }
                            isLoading={ isLoading }
                        />
                    </Modal>
                )
            }
        </main>
    )
}

export default App
