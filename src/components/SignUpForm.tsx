import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { signUpSchema } from '../validation/validationSchemas.ts';
import InputField from './InputField.tsx';
import { passwordStrength } from '../utils/passwordStrength.ts';
import './SignUpForm.css';


const SignUpForm: React.FC = () => {
  const [passwordStrengthLevel, setPasswordStrengthLevel] = useState<string>('');  
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: any) => {
    const password = e.target.value;
    const strength = passwordStrength(password); 
    setPasswordStrengthLevel(strength); 
    setFieldValue('password', password); 
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          
          localStorage.setItem('email', values.email);
          localStorage.setItem('password', values.password);

          setSuccessMessage("Sign Up Successful");
          setTimeout(() => setSuccessMessage(null), 3000); 
        }}
      >
        {({ setFieldValue }) => (
          <Form className="form">
            {/* Full Name */}
            <div className="input-group">
              <InputField
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                label="Full Name"
                ariaLabel="Full Name"
              />
            </div>

            {/* Email */}
            <div className="input-group">
              <InputField
                name="email"
                type="email"
                placeholder="Enter your email"
                label="Email"
                ariaLabel="Email Address"
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <InputField
                name="password"
                type="password"
                placeholder="Enter your password"
                label="Password"
                onChange={(e) => handlePasswordChange(e, setFieldValue)} 
                ariaLabel="Password"
              />
              {/* Password Strength Display */}
              <div className="password-strength">
                <span className={`strength-${passwordStrengthLevel.toLowerCase()}`}>
                  {passwordStrengthLevel ? passwordStrengthLevel : ''}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="input-group">
              <InputField
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                label="Confirm Password"
                ariaLabel="Confirm Password"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">Sign Up</button>

            {/* Success Message */}
            {successMessage && <div className="success-message">{successMessage}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
