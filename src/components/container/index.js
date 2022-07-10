import React from 'react';

function ContainerColumn({ children, style }) {
  return (
    <div className="flex flex-col" style={{ ...style }}>
      {children}
    </div>
  );
}

function ContainerRow({ children, style }) {
  return (
    <div className="flex flex-row" style={{ ...style }}>
      {children}
    </div>
  );
}

export { ContainerColumn, ContainerRow };
