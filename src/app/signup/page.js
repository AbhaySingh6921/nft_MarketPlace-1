'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../../../style/signup.module.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Signup successful', formData);
      // Redirect or handle successful signup here
    } catch (error) {
      setErrors(prev => ({ ...prev, form: 'Signup failed. Please try again.' }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up | Professional App</title>
        <meta name="description" content="Create a new account" />
      </Head>

      <div className={styles.authContainer}>
        <div className={styles.authCard}>
          <div className={styles.authHeader}>
            <h1>Create Account</h1>
            <p>Get started with your free account</p>
          </div>

          {errors.form && <div className={styles.errorMessage}>{errors.form}</div>}

          <form onSubmit={handleSubmit} className={styles.authForm}>
            <div className={styles.nameFields}>
              <div className={`${styles.formGroup} ${errors.firstName ? styles.hasError : ''}`}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className={styles.formInput}
                />
                {errors.firstName && <span className={styles.errorText}>{errors.firstName}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className={styles.formInput}
                />
              </div>
            </div>

            <div className={`${styles.formGroup} ${errors.email ? styles.hasError : ''}`}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={styles.formInput}
              />
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>

            <div className={`${styles.formGroup} ${errors.password ? styles.hasError : ''}`}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password (min 8 chars)"
                className={styles.formInput}
              />
              {errors.password && <span className={styles.errorText}>{errors.password}</span>}
            </div>

            <div className={`${styles.formGroup} ${errors.confirmPassword ? styles.hasError : ''}`}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={styles.formInput}
              />
              {errors.confirmPassword && <span className={styles.errorText}>{errors.confirmPassword}</span>}
            </div>

            <div className={`${styles.formGroup} ${errors.agreeTerms ? styles.hasError : ''}`}>
              <div className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className={styles.checkboxInput}
                />
                <label htmlFor="agreeTerms">
                  I agree to the <a href="/terms" className={styles.termsLink}>Terms of Service</a> and <a href="/privacy" className={styles.termsLink}>Privacy Policy</a>
                </label>
              </div>
              {errors.agreeTerms && <span className={styles.errorText}>{errors.agreeTerms}</span>}
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className={styles.spinner}></span> Creating account...
                </>
              ) : (
                'Sign Up'
              )}
            </button>
          </form>

          <div className={styles.switchText}>
            Already have an account?{' '}
            <a href="/login" className={styles.switchLink}>
              Log in
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;