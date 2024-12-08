import * as Yup from 'yup';


export const signUpSchema = Yup.object({
  fullName: Yup.string()
    .min(3, 'Full Name must be at least 3 characters')
    .required('Full Name is required'),

  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),

  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match') 
    .required('Confirm Password is required')
});


export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});
