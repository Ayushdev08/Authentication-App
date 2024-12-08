import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import InputField from './InputField.tsx';
import './LoginForm.css';

const LoginForm: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState<boolean>(false); 

  
  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(values) => {
          const storedEmail = localStorage.getItem('email');
          const storedPassword = localStorage.getItem('password');

          if (values.email === storedEmail && values.password === storedPassword) {
            setErrorMessage(null);

            // If Remember Me is checked, store the email and password in localStorage
            if (rememberMe) {
              localStorage.setItem('email', values.email);
              localStorage.setItem('password', values.password);
            }

            alert('Login Successful');
          } else {
            setErrorMessage('Invalid email or password.');
          }
        }}
      >
        {() => (
          <Form className="form">
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
                ariaLabel="Password"
              />
            </div>

            {/* Remember Me */}
            <div className="remember-me">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                Remember Me
              </label>
            </div>

            {/* Error Message */}
            {errorMessage && <div className="error-message">{errorMessage}</div>}

            {/* Submit Button */}
            <button type="submit" className="submit-btn">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
