type formDataType = {
    fullname: string | undefined,
    email: string | undefined,
    phone: string | undefined,
    message: string | undefined
}
const msgValidator = (formData: formDataType): boolean => {


    if (formData.fullname === '' || formData.email === '' || formData.phone === '' || formData.message === '') {
        return false
    } else {
        return true
    }


}

export default msgValidator;