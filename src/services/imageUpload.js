import axios from "axios"


export const  imageUpload = async( file ) => {

    if( !file ){
        return null
    }

    const cloudUrl = `https://api.cloudinary.com/v1_1/${  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME }/image/upload`

    const formData = new FormData()
    formData.append('upload_preset', 'user-crud')
    formData.append('file', file)

    try {
        
        const { data } = await axios.post( cloudUrl, formData )
        return {
            hasError: false,
            urlImage: data.secure_url
        }

    } catch (error) {
        console.log(error);
        return {
            hasError: true,
            urlImage: null
        }
    }

}