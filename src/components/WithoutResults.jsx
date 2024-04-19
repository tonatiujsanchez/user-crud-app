import { DBIcon } from './Icons'
import './styles/withoutResults.css'

export const WithoutResults = () => {
    return (
        <div className="without-results">
            <DBIcon />
            <p>No hay usuarios registrados</p>
        </div>
    )
}
