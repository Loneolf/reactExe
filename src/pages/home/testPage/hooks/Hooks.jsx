import React, { useState } from 'react';

function Hooks() {
  const [count, setCount] = useState(0);
  const [age] = useState(16);
  return (
    <div>
      <p>小女子芳年{age}</p>
      <p>你点击了{count}次</p>
      <button onClick={() => { setCount(count + 1); }}>点击+1</button>
      <button onClick={() => { setCount(count - 1); }}>点击-1</button>
    </div>
  );
}

export default Hooks;
