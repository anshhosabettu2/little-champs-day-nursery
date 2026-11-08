import React, { useState } from 'react';
import FormInput from './FormInput';
import GoogleSignInButton from './GoogleSignInButton';

// Envelope / Mail Icon matching screenshot
const MailIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

// Lock Icon matching screenshot
const LockIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
);

const LoginForm = ({ onSubmit, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ email, password, rememberMe });
    }
  };

  return (
    <div className="flex w-full max-w-[350px] flex-col justify-center mx-auto">
      {/* Heading & Subtitle */}
      <div className="mb-6">
        <h2 className="text-[29px] sm:text-[31px] font-bold text-[#101B55] tracking-tight leading-tight">
          Welcome Back
        </h2>
        <p className="mt-1 text-[13.5px] sm:text-[14px] text-[#858B9B] font-normal">
          Sign in to your nursery portal
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Address */}
        <div>
          <FormInput
            id="email"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={MailIcon}
            required
            autoComplete="email"
          />
        </div>

        {/* Password */}
        <div>
          <FormInput
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={LockIcon}
            required
            autoComplete="current-password"
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between pt-1 pb-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-[#D1D5DB] text-[#7147E8] accent-[#7147E8] cursor-pointer"
            />
            <span className="text-[13px] font-medium text-[#7E8597]">
              Remember me
            </span>
          </label>

          <button
            type="button"
            onClick={() => alert('Password reset link sent to your registered email.')}
            className="text-[13px] font-semibold text-[#7147E8] hover:text-[#5B32D1] transition-colors cursor-pointer"
          >
            Forgot password?
          </button>
        </div>

        {/* Error Feedback */}
        {error && (
          <div className="rounded-xl bg-red-50 px-3.5 py-2 text-xs font-medium text-red-600">
            {error}
          </div>
        )}

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full h-[54px] rounded-xl bg-[#7147E8] text-[15px] font-semibold text-white shadow-[0_6px_20px_rgba(113,71,232,0.30)] transition-all duration-150 hover:bg-[#6038D1] active:scale-[0.99] cursor-pointer mt-1 flex items-center justify-center"
        >
          Sign In
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-6 flex items-center justify-center">
        <div className="w-full border-t border-[#E5E7EB]" />
        <span className="absolute bg-white px-3 text-[12.5px] text-[#9CA3AF] select-none font-normal">
          or
        </span>
      </div>

      {/* Google Sign In */}
      <GoogleSignInButton
        onClick={() => {
          if (onSubmit) {
            onSubmit({ email: 'admin@kidsnest.com', password: 'google-oauth' });
          }
        }}
      />

      {/* Footer Text */}
      <p className="mt-8 text-center text-[12.5px] text-[#858B9B]">
        New to Little Champs?{' '}
        <a
          href="#contact"
          className="text-[#858B9B] hover:text-[#7147E8] font-medium transition-colors"
        >
          Contact us to get started.
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
