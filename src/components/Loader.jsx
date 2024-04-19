import PropTypes from 'prop-types'
import './styles/loader.css'

export const Loader = ({ borderColor='#4f46e5', width='2rem' }) => {
    return (
        <span 
            className="loader"
            style={{ 
                borderBottomColor: borderColor,
                width                
            }}
        >

        </span>
    )
}

Loader.propTypes = {
    borderColor: PropTypes.string,
    width: PropTypes.string,
}