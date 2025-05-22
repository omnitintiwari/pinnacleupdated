import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center" style={{ marginLeft: '-86px' }}>
      <img
        src="/logo.svg"
        alt="Logo"
        className="w-[300px] h-[80px] md:w-[360px] md:h-[100px]"
      />
    </div>
  );
};

export default Logo;
