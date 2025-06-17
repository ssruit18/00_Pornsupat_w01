import React from 'react';
import LoginForm from '../components/LoginForm';
import { login } from '../utils/auth';

const Login: React.FC = () => {
    const handleLogin = async (username: string, password: string) => {
        const success = await login(username, password);
        if (success) {
            // Redirect to dashboard or handle successful login
            window.location.href = '/dashboard';
        } else {
            // Handle login failure (e.g., show an error message)
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default Login;