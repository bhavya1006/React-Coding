import React from 'react';
import './SignUp.css'; // Import your CSS file

const SignCard = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignUp = () => {
        // Perform sign up logic here
        console.log('Signing up...');
    };

    const handleSignIn = () => {
        // Perform sign in logic here
        console.log('Signing in...');
    };

    return (
        <div className="sign-card">
            <h2>Sign Up/In</h2>
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" className="input-field" />
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" className="input-field" />
            <button onClick={handleSignUp} className="btn primary">Sign Up</button>
            <button onClick={handleSignIn} className="btn">Sign In</button>
        </div>
    );
};

export default SignCard;


