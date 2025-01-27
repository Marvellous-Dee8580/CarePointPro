const authConfig = ({ mode = 'login' }) => {
    const titles = {
      login: 'WELCOME BACK!',
      signup: 'CREATE YOUR ACCOUNT',
      guest: 'EXPLORE AS A GUEST',
      reset: 'RESET YOUR PASSWORD',
    };
  
    const descriptions = {
      login: 'Securely access your patient portal for personalized care and support.',
      signup: 'Sign up to start your journey with us and access exclusive features.',
      guest: 'Explore the system as a guest to learn about its capabilities.',
      reset: 'Enter your email address below to receive reset instructions.',
    };
  
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">{titles[mode]}</h1>
        <p className="text-gray-600 mb-6">{descriptions[mode]}</p>
      </div>
    );
  };
  
  export default authConfig;  