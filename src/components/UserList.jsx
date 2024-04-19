import PropTypes from 'prop-types'
import { DeleteConfirm, Modal, UserCard, WithoutResults } from './'
import './styles/userList.css'
import { useState } from 'react'

export const UserList = ({ users, deleteUser, setUserToUpdate }) => {

    const [userToDelete, setUserToDelete] = useState()

    const handleCloseModalDelete = () =>{
        setUserToDelete(undefined)
    }

    const handleConfirm = async( confirm ) => {
        if( confirm ){
            await deleteUser( '/users', userToDelete.id )
        }
        
        handleCloseModalDelete()
    }

    return (
        <>
            {
                users.length === 0
                ?(
                    <WithoutResults />
                ):(
                    <div className="users">
                        {
                            users.map( user => (
                                <UserCard
                                    key={ user.id }
                                    user={ user }
                                    setUserToUpdate={ setUserToUpdate }
                                    setUserToDelete={ setUserToDelete }
                                />
                            ))
                        }
                    </div>
                )
            }
            {
                !!userToDelete && (                   
                    <Modal
                        onCloseModal={ handleCloseModalDelete }
                        title="Eliminar usuario"
                    >
                        <p>{ userToDelete.first__name }</p>
                        <DeleteConfirm
                            userToDelete={ userToDelete }
                            handleConfirm={ handleConfirm }
                        />

                    </Modal>
                )
            }
        </>
    )
}

UserList.propTypes = {
    users          : PropTypes.array,
    deleteUser     : PropTypes.func,
    setUserToUpdate: PropTypes.func,
}