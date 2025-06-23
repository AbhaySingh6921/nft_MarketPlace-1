'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../../../style/login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        console.log('Login successful', { email, rememberMe });
        // Redirect or handle successful login here
      } else {
        setError('Please enter both email and password');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Login | Professional Dashboard</title>
        <meta name="description" content="Login to access your account" />
      </Head>

      <div className={styles.authContainer}>
        <div className={styles.authCard}>
          <div className={styles.authHeader}>
            <h1>Welcome Back</h1>
            <p>Please login to access your dashboard</p>
          </div>

          {error && <div className={styles.errorMessage}>{error}</div>}

          <form onSubmit={handleSubmit} className={styles.authForm}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className={styles.formInput}
              />
              <a href="/forgot-password" className={styles.forgotPassword}>
                Forgot password?
              </a>
            </div>

            <div className={styles.rememberMe}>
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className={styles.spinner}></span> Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>

          <div className={styles.switchText}>
            Don't have an account?{' '}
            <a href="/signup" className={styles.switchLink}>
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;