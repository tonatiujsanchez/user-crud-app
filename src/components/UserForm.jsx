import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { ButtonPrimary, ButtonPrimarySoft, Loader, XIcon } from './'
import { isEmail } from './utils'
import { imageUpload } from '../services'
import noUserImage from '/no-user-image.webp'
import './styles/userForm.css'


const imageMimeType = /image\/(png|jpg|jpeg|gif|webp)/i;
export const UserForm = ({ postUser, editUser, userToUpdate, handleCloseModal, isLoading }) => {

    // file of images
    const [file, setFile] = useState(null)
    const [fileDataURL, setFileDataURL] = useState(null)
    const [imageEdit, setImageEdit] = useState()

    const [imageIsUploading, setImageIsUploading] = useState(false)

    const fileInputRef = useRef()
    

    const { register, handleSubmit, formState:{ errors } } = useForm({
        defaultValues:userToUpdate
    })

    
    useEffect(()=>{
        if(userToUpdate){
            setImageEdit(userToUpdate.image_url)
        }
    },[userToUpdate])
    

    const onRemoveImage = () => {
        setFile(null)
        setFileDataURL(null)
        setImageEdit(null)
        fileInputRef.current.value = null
    }

    const handleFileChange = (e) => {
        if( !e.target.files || e.target.files.length === 0 ){
            return
        }

        const fileSelected = e.target.files[0]

        if (!fileSelected.type.match(imageMimeType)) {
            console.error('Formato no válido')
            return
        }
        setFile(fileSelected)
    }

    useEffect(()=>{
        if( file ){
            let fileReader;
            let isCancel = false;
            fileReader = new FileReader()
            fileReader.onload = (ev) => {
                const { result } = ev.target
                if (result && !isCancel) {
                    setFile(file)
                    setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(file)
        }
    },[file])


    const handleUserSubmit = async(data) => {

        if( file ){
            setImageIsUploading(true)
            const { hasError, urlImage } = await imageUpload( file )
            if(hasError){
                console.log('Hubo un error al subir la imagen')
            }
            
            data.image_url = urlImage
            setImageIsUploading(false)
        }

        if(!file && !imageEdit){
            data.image_url = null
        }

        if( userToUpdate ){
            await editUser('/users', userToUpdate.id, data)
            handleCloseModal()
            return
        }

        await postUser('/users', data)
        handleCloseModal()
    }


    return (
        <form
            className="form"
            onSubmit={ handleSubmit(handleUserSubmit) }
        >
            <div className="form__image">
                <div className="form__image-content">
                    <figure 
                        onClick={ ()=> fileInputRef.current.click() }
                        className="form__figure"
                    >
                        <img 
                            src={ fileDataURL || imageEdit || noUserImage } 
                            alt="Foto de usuario"
                            className="form__img"
                        />
                    </figure>
                    {
                        ( fileDataURL || imageEdit )
                        && (
                            <button 
                                type="button"
                                onClick={ onRemoveImage }
                                disabled={ isLoading || imageIsUploading }
                                className="form__figure--button-remove"
                            >
                                <XIcon />
                            </button>
                        )
                    }
                </div>
                <ButtonPrimarySoft
                    onClick={ ()=> fileInputRef.current.click() }
                    disabled={ isLoading || imageIsUploading }
                >
                    Seleccionar
                </ButtonPrimarySoft>
                <input
                    type="file"
                    style={{ display: 'none' }}
                    disabled={ isLoading }
                    ref={ fileInputRef }
                    accept="image/png, image/jpg, image/jpeg, image/gif, image/webp"
                    onChange={handleFileChange}
                />
            </div>
            <div className="form__field">
                <label 
                    htmlFor="first_name"
                    className="form__label"
                >
                    Nombre<span className="form__field--required">*</span>
                </label>
                <input
                    type="text"
                    id="first_name"
                    disabled={ isLoading }
                    placeholder="Nombre"
                    className="form__input"
                    {...register('first_name', {
                        validate: ( value ) => value.trim() === '' ? 'El nombre es requerido' : undefined,
                        maxLength: { value: 25, message: 'El nombre es muy largo' }
                    })}
                />
                { errors.first_name && (
                    <span className="form__error">{ errors.first_name.message }</span>
                )}
            </div>
            <div className="form__field">
                <label 
                    htmlFor="last_name"
                    className="form__label"
                >
                    Apellidos<span className="form__field--required">*</span>
                </label>
                <input
                    type="text"
                    id="last_name"
                    disabled={ isLoading }
                    placeholder="Apellidos"
                    className="form__input"
                    {...register('last_name', {
                        validate: ( value ) => value.trim() === '' ? 'Los apellidos son requeridos' : undefined,
                        maxLength: { value: 25, message: 'Ingrese máximo 25 caracteres' }
                    })}
                />
                { errors.last_name && (
                    <span className="form__error">{ errors.last_name.message }</span>
                )}
            </div>
            <div className="form__field">
                <label 
                    htmlFor="email"
                    className="form__label"
                >
                    Email<span className="form__field--required">*</span>
                </label>
                <input
                    type="text"
                    id="email"
                    disabled={ isLoading }
                    placeholder="Ingrese su correo"
                    className="form__input"
                    {...register('email', {
                        required: 'El correo es requerido',
                        validate: ( value ) => isEmail( value ),
                    })}
                />
                { errors.email && (
                    <span className="form__error">{ errors.email.message }</span>
                )}
            </div>
            <div className="form__field">
                <label 
                    htmlFor="password"
                    className="form__label"
                >
                    Contraseña<span className="form__field--required">*</span>
                </label>
                <input
                    type="password"
                    id="password"
                    disabled={ isLoading }
                    placeholder="Contraseña"
                    className="form__input"
                    {...register('password', {
                        validate: ( value ) => value.trim() === '' ? 'La contraseña es requerida': undefined,
                        minLength: { value: 6, message: 'Ingrese mínimo 6 caracteres' }
                    })}
                />
                { errors.password && (
                    <span className="form__error">{ errors.password.message }</span>
                )}
            </div>
            <div className="form__field">
                <label 
                    htmlFor="birthday"
                    className="form__label"
                >
                    Cumpleaños<span className="form__field--required">*</span>
                </label>
                <input
                    type="date"
                    id="birthday"
                    disabled={ isLoading }
                    placeholder="Cumpleaños"
                    className="form__input"
                    { ...register('birthday', {
                        validate: ( value ) => value.trim() === '' ? 'La fecha de cumpleaños es requerida': undefined,
                    })}
                />
                { errors.birthday && (
                    <span className="form__error">{ errors.birthday.message }</span>
                )}
            </div>
            <div className="form__button">
                <ButtonPrimary
                    type="submit"
                    disabled={ isLoading || imageIsUploading }
                >
                    {
                        imageIsUploading
                        ? <><Loader /> Subiendo imagen</>
                        :(
                            isLoading 
                            ?(
                                <>
                                    <Loader />
                                    { userToUpdate ? 'Guardando...' : 'Creando usuario...' }
                                </>
                            ):(
                                userToUpdate ? 'Guardar cambios' : 'Agregar nuevo usuario' 
                            )
                        )
                    }
                </ButtonPrimary>
            </div>
        </form>
    )
}

UserForm.propTypes = {
    postUser        : PropTypes.func,
    editUser        : PropTypes.func,
    userToUpdate    : PropTypes.object,
    handleCloseModal: PropTypes.func,
    isLoading       : PropTypes.bool
}