import PropTypes from 'prop-types'
import { RefreshIcon } from './Icons'
import './styles/msgError.css'

export const MsgError = ({ getUsers }) => {
    return (
        <div className="error-msg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="feather feather-alert-circle"
            >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <p>Hubo un error al cargar los usuarios</p>
            <button
                type="button"
                className="error-refresh"
                onClick={ ()=> getUsers('/users') }
            >
                <RefreshIcon /> Reintentar
            </button>
        </div>
    )
}

MsgError.propTypes = {
    getUsers: PropTypes.func
}