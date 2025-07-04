import { useState } from 'react';
import UseState from './components/useState';
import UseRef from './components/useref';
import UseFormState from './components/useFormState';
import UseTransitionState from './components/useTransitionState';
import ChangeColor from './components/useref2';


const components = {
  UseState,
  UseRef,
  UseFormState,
  UseTransitionState,
  ChangeColor,
  // more...
};

function App() {
  const [selected, setSelected] = useState('UseState');

  const ComponentToRender = components[selected];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>React Practice Components</h1>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {Object.keys(components).map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>

      <div style={{ marginTop: '2rem' }}>
        <ComponentToRender />
      </div>
    </div>
  );
}

export default App;
