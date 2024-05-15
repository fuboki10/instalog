import React from 'react';

interface HiddenProps {
  children: React.ReactNode;
}

const Hidden: React.FC<HiddenProps> = ({ children }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      {visible ? (
        <>{children}</>
      ) : (
        <div
          onClick={() => setVisible(true)}
          className='cursor-pointer box-content h-4 w-3/5 bg-gray-100 hover:bg-gray-200'
        />
      )}
    </>
  );
};

export default Hidden;
