// ChildA.js
import React from 'react';
import ChildB from './childB';

const ChildA = () => {
  return (
    <div>
      <h2>Child A Component</h2>
      <ChildB />
    </div>
  );
};

export default ChildA;