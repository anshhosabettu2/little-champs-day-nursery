import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NurseryIllustrationPanel from '../components/login/NurseryIllustrationPanel';
import LoginForm from '../components/login/LoginForm';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const mockUsers = [
    {
      email: 'admin@kidsnest.com',
      password: '123456',
      name: 'KidsNest Admin',
      role: 'admin',
    },
    {
      email: 'owner@kidsnest.com',
      password: '123456',
      name: 'Priya Sharma',
      role: 'owner',
      nurseryName: 'Little Champs Day Nursery',
    },
    {
      email: 'student@kidsnest.com',
      password: '123456',
      name: 'Aarav Sharma',
      role: 'student',
      nurseryName: 'Little Champs Day Nursery',
    },
  ];

  const handleLogin = ({ email, password }) => {
    const user = mockUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (user || password === 'google-oauth') {
      const activeUser = user || {
        email: email || 'admin@littlechamps.com',
        name: 'Little Champs Educator',
        role: 'owner',
        nurseryName: 'Little Champs Day Nursery',
      };
      localStorage.setItem('kidsnestUser', JSON.stringify(activeUser));
      navigate('/dashboard');
    } else if (!email || !password) {
      setError('Please enter both email and password.');
    } else {
      const demoUser = {
        email,
        name: email.split('@')[0],
        role: 'owner',
        nurseryName: 'Little Champs Day Nursery',
      };
      localStorage.setItem('kidsnestUser', JSON.stringify(demoUser));
      navigate('/dashboard');
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#F5F7FA] flex items-center justify-center p-3 sm:p-5 lg:p-8">
      {/* Main Login Card Container */}
      <div className="w-full max-w-[1024px] min-h-[640px] lg:h-[725px] bg-white rounded-[24px] sm:rounded-[28px] shadow-[0_16px_45px_rgba(16,27,85,0.07)] border border-[#E9EDF2] overflow-hidden flex flex-col lg:flex-row">
        {/* Left Section - Nursery Branding and Illustration (55%) */}
        <div className="w-full lg:w-[55%] h-full flex flex-col relative border-b lg:border-b-0 lg:border-r border-[#E9EDF2]">
          <NurseryIllustrationPanel />
        </div>

        {/* Right Section - Login Form (45%) */}
        <div className="w-full lg:w-[45%] h-full bg-white flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
          <LoginForm onSubmit={handleLogin} error={error} />
        </div>
      </div>
    </main>
  );
};

export default Login;
