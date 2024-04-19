import PropTypes from 'prop-types'
import './styles/buttonPrimary.css'

export const ButtonPrimary = ({ children, onClick, disabled=false, type='button' }) => {
    return (
        <button
            type={ type }
            onClick={ onClick }
            disabled={ disabled }
            className="button-primary"
        >
            { children }
        </button>
    )
}

ButtonPrimary.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.string
}