import PropTypes from 'prop-types'
import { DeleteIcon, EditIcon, GiftIcon, MailIcon } from './Icons'
import { dateFormatLong } from './utils'
import './styles/userCard.css'

export const UserCard = ({ user, setUserToUpdate, setUserToDelete }) => {
    
    return (
        <article className="user">
            <div className="user__header">
                {
                    user.image_url
                    ?(
                        <figure className="user__figure">
                            <img 
                                src={ user.image_url }
                                alt={`${ user.first_name } ${ user.last_name }`}
                                className="user__img" 
                            />
                        </figure>
                    ):(
                        <div className="user__letter">
                            <span>{ user.first_name.slice(0,1) }</span>
                        </div>
                    )
                }
                <h3 className="user__name">{ user.first_name } { user.last_name }</h3>
            </div>
            <ul className="user__list">
                <li className="user__item">
                    <span className="user__label"><MailIcon /> Email</span>
                    <span className="user__value">{ user.email }</span>
                </li>
                <li className="user__item">
                    <span className="user__label"><GiftIcon /> Cumpleaños</span>
                    <span className="user__value">{ dateFormatLong(user.birthday) }</span>
                </li>
            </ul>
            <div className="user__actions">
                <button
                    type="button"
                    className="user__button user__button--edit"
                    onClick={ ()=> setUserToUpdate( user ) }
                >
                        <EditIcon />
                </button>
                <button
                    type="button"
                    className="user__button user__button--delete"
                    onClick={ ()=> setUserToDelete( user ) }
                >
                        <DeleteIcon />
                </button>
            </div>
        </article>
    )
}


UserCard.propTypes = {
    user: PropTypes.object,
    setUserToUpdate: PropTypes.func,
    setUserToDelete: PropTypes.func,
}