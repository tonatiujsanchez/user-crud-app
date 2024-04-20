import PropTypes from 'prop-types'
import { ButtonPrimary } from './ButtonPrimary'
import './styles/msgDeleted.css'

export const MsgDeleted = ({ userDeleted, onCloseModal }) => {
    return (
        <div className="msg-deleted">
            <p>El usuario <strong>{ userDeleted.first_name } { userDeleted.last_name }</strong> fue eliminado exitosamente.</p>
            <ButtonPrimary
                onClick={ onCloseModal }
            >
                Aceptar
            </ButtonPrimary>
        </div>
    )
}

MsgDeleted.propTypes = {
    userDeleted: PropTypes.object,
    onCloseModal: PropTypes.func,
}