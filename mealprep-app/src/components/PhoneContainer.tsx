import React, { ReactNode } from 'react';

interface PhoneContainerProps {
  children: ReactNode;
}

const PhoneContainer: React.FC<PhoneContainerProps> = ({ children }) => {
  return (
    <div className="app-background">
      <div className="phone-container">
        {children}
      </div>
    </div>
  );
};

export default PhoneContainer;