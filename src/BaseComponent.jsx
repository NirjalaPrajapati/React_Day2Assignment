// BaseComponent.js
import React from 'react';
import { FruitProvider } from './FruitContext';
import ChildA from './childA';

const BaseComponent = () => {
  return (
    <FruitProvider>
      <div>
        <h1>Base Component</h1>
        <ChildA />
      </div>
    </FruitProvider>
  );
};

export default BaseComponent;