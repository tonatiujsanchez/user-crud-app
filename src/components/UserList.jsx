import PropTypes from 'prop-types'
import { UserCard } from './'
import './styles/userList.css'

export const UserList = ({ users, editUser, deleteUser }) => {

    return (
        <div className="users">
            {
                users.map( user => (
                    <UserCard
                        key={ user.id }
                        user={ user }
                    />
                ))
            }
        </div>
    )
}

UserList.propTypes = {
    users     : PropTypes.array,
    editUser  : PropTypes.func,
    deleteUser: PropTypes.func,
}