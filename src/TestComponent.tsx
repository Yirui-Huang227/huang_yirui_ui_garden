// @ts-nocheck

import React from 'react';

function TestComponent() {
  const unused = 42; // ESLint 会提示 no-unused-vars
  var x = 10; // ESLint 会提示不要用 var
  console.log('Hello ESLint');

  return <div>Hello ESLint</div>;
}

export default TestComponent;
