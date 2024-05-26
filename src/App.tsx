import React from 'react';
import Users from './components/Users';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quae.
      </h1>

      <Users />
    </div>
  );
};

export default App;
