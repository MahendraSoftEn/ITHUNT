import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required('User Name  is Required'),
  password: yup
    .string()
    .min(3, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})