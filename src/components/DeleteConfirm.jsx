import PropTypes from 'prop-types'
import './styles/deleteConfirm.css'

export const DeleteConfirm = ({ userToDelete, handleConfirm }) => {
    return (
        <div className="delete-confirm">
            <p>¿Desea eliminar el usuario: <strong>{ userToDelete.first_name } { userToDelete.last_name }</strong>?</p>
                <div className="delete-confirm__actions">
                <button 
                    type="button" 
                    onClick={()=> handleConfirm(false)}
                    className="delete-confirm__actions-button"
                >
                    Cancelar
                </button>
                <button 
                    type="button" 
                    onClick={()=> handleConfirm(true)}
                    className="delete-confirm__actions-button delete-confirm__actions--delete"
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

DeleteConfirm.propTypes = {
    userToDelete: PropTypes.object,
    handleConfirm: PropTypes.func,
}