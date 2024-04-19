import PropTypes from 'prop-types'
import './styles/buttonPrimarySoft.css'

export const ButtonPrimarySoft = ({ children, onClick, disabled=false, type='button' }) => {
    return (
        <button
            type={ type }
            onClick={ onClick }
            disabled={ disabled }
            className="button-primary-soft"
        >
            { children }
        </button>
    )
}

ButtonPrimarySoft.propTypes = {
    children: PropTypes.node,
    onClick : PropTypes.func,
    disabled: PropTypes.bool,
    type    : PropTypes.string
}