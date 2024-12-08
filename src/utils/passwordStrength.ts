export const passwordStrength = (password: string): string => {
    const strengthRegex = {
      weak: /^(?=.*[a-zA-Z]).{6,}$/,         
      medium: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/, 
      strong: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{10,}$/, 
    };
  
    if (strengthRegex.strong.test(password)) return 'Strong';
    if (strengthRegex.medium.test(password)) return 'Medium';
    if (strengthRegex.weak.test(password)) return 'Weak';
    return '';
  };
  