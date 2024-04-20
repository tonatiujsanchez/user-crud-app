import { toast }  from 'sonner'

export const toastSuccess = ( title, description = '', position='top-center' ) => {
    return toast.success(title, { description, position, className: 'toast' })
}

export const toastError = ( title, description = '', position='top-center' ) => {
    return toast.error(title, { description, position, className: 'toast', })
}
