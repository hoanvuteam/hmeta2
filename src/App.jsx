import { useState } from 'react';

const STEPS = {
  HOME: 'HOME',
  LOGIN: 'LOGIN',
  CODE: 'CODE',
  SUBSCRIBE: 'SUBSCRIBE',
  SUCCESS: 'SUCCESS',
};

function App() {
  const [step, setStep] = useState(STEPS.HOME);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(STEPS.CODE);
    }, 1500);
  };

  const handleCode = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(STEPS.SUBSCRIBE);
    }, 1500);
  };

  const handleSubscribe = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(STEPS.SUCCESS);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center py-8">
      {step === STEPS.HOME && (
        <div className="fade-in max-w-sm w-full px-4 flex flex-col items-center gap-6">
          <MetaLogo />
          <h1 className="text-lg font-semibold text-gray-900 text-center leading-snug">
            Meta Verified
          </h1>
          <p className="text-sm text-gray-500 text-center leading-relaxed">
            Get a verified badge, exclusive features, and protection for your account.
          </p>
          <button
            onClick={() => setStep(STEPS.LOGIN)}
            className="w-full bg-[#1877f2] hover:bg-[#166fe5] active:bg-[#1464d8] text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Get Started
          </button>
          <p className="text-xs text-gray-400 text-center">
            Available for eligible accounts
          </p>
        </div>
      )}

      {step === STEPS.LOGIN && (
        <div className="fade-in max-w-sm w-full bg-white rounded-2xl shadow-lg px-6 py-8 flex flex-col gap-6">
          <MetaLogo />
          <h2 className="text-lg font-bold text-gray-900 text-center">Log In</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Email or phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-100 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#1877f2] transition-all"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-100 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#1877f2] transition-all"
            />
            {loading ? (
              <DotWave />
            ) : (
              <button
                type="submit"
                className="w-full bg-[#1877f2] hover:bg-[#166fe5] active:bg-[#1464d8] text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Log In
              </button>
            )}
          </form>
          <button
            onClick={() => setStep(STEPS.HOME)}
            className="text-sm text-[#1877f2] font-semibold text-center"
          >
            Back
          </button>
        </div>
      )}

      {step === STEPS.CODE && (
        <div className="fade-in max-w-sm w-full bg-white rounded-2xl shadow-lg px-6 py-8 flex flex-col gap-6">
          <MetaLogo />
          <h2 className="text-lg font-bold text-gray-900 text-center">Enter Confirmation Code</h2>
          <p className="text-sm text-gray-500 text-center leading-relaxed">
            We sent a code to your email. Enter it below to continue.
          </p>
          <form onSubmit={handleCode} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Confirmation code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full bg-gray-100 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#1877f2] transition-all text-center tracking-wide font-semibold"
            />
            {loading ? (
              <DotWave />
            ) : (
              <button
                type="submit"
                className="w-full bg-[#1877f2] hover:bg-[#166fe5] active:bg-[#1464d8] text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Continue
              </button>
            )}
          </form>
          <button className="text-sm text-[#1877f2] font-semibold text-center">
            Resend Code
          </button>
        </div>
      )}

      {step === STEPS.SUBSCRIBE && (
        <div className="fade-in max-w-sm w-full bg-white rounded-2xl shadow-lg px-6 py-8 flex flex-col gap-6">
          <MetaLogo />
          <h2 className="text-lg font-bold text-gray-900 text-center">Choose Your Plan</h2>
          <div className="flex flex-col gap-3">
            <PlanCard
              title="Creator"
              price="$14.99/mo"
              features={['Verified badge', 'Exclusive stickers', 'Priority support']}
              selected
            />
            <PlanCard
              title="Business"
              price="$29.99/mo"
              features={['Verified badge', 'Impersonation protection', 'Priority support', 'Search enhancements']}
            />
          </div>
          {loading ? (
            <DotWave />
          ) : (
            <button
              onClick={handleSubscribe}
              className="w-full bg-[#1877f2] hover:bg-[#166fe5] active:bg-[#1464d8] text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Subscribe Now
            </button>
          )}
        </div>
      )}

      {step === STEPS.SUCCESS && (
        <div className="fade-in max-w-sm w-full bg-white rounded-2xl shadow-lg px-6 py-8 flex flex-col items-center gap-6">
          <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
            <VerifiedBadge />
          </div>
          <h2 className="text-lg font-bold text-gray-900 text-center">
            You're Verified!
          </h2>
          <p className="text-sm text-gray-500 text-center leading-relaxed">
            Your account now has the Meta Verified badge and all exclusive features.
          </p>
          <button
            onClick={() => setStep(STEPS.HOME)}
            className="w-full bg-[#1877f2] hover:bg-[#166fe5] active:bg-[#1464d8] text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}

function MetaLogo() {
  return (
    <svg viewBox="0 0 96 96" className="w-12 h-12" fill="none">
      <path
        d="M37.6 43.2c0-7.3 3.1-13.8 8-18.4C27.2 26.4 12 41 12 58.8 12 74 24 86 39.2 86c7.6 0 14.4-3.4 19.2-8.8C41.6 77.2 37.6 61.2 37.6 43.2z"
        fill="#1877f2"
      />
      <path
        d="M84 58.8C84 41 68.8 26.4 50.4 24.8c4.9 4.6 8 11.1 8 18.4 0 18-4 34-20.8 34C42.4 82.6 49.2 86 56.8 86 72 86 84 74 84 58.8z"
        fill="#1877f2"
        opacity="0.6"
      />
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#1877f2">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

function PlanCard({ title, price, features, selected }) {
  return (
    <div
      className={`rounded-xl border-2 px-4 py-3 transition-all duration-200 ${
        selected ? 'border-[#1877f2] bg-blue-50' : 'border-gray-100 bg-white'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-900 text-sm">{title}</span>
        <span className="font-bold text-[#1877f2] text-sm">{price}</span>
      </div>
      <ul className="mt-0.5 flex flex-col gap-2">
        {features.map((f) => (
          <li key={f} className="text-xs text-gray-500 flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="#1877f2">
                <path d="M6.5 12L2 7.5l1.41-1.41L6.5 9.17l6.09-6.09L14 4.5 6.5 12z" />
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DotWave() {
  return (
    <div className="dot-wave flex items-center justify-center py-3 gap-[7px]">
      <span /><span /><span /><span /><span />
    </div>
  );
}

export default App;
