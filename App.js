import React from 'react';
import Main from './src/pages/Main/index'
import TabBar from './src/components/TabBar';

const app = () => {
  return(
    <React.Fragment>
      <Main />
      <TabBar />
    </React.Fragment>
  )
  };

export default app;