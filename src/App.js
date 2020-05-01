import React from 'react';
import Layout from './components/Layout'
import BurguerBuilder from './containers/BurguerBuilder/Burguer'

function App() {
  return (
    <div >
      <Layout>
        <BurguerBuilder />
      </Layout>
    </div>
  );
}

export default App;
