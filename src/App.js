import React from 'react';
import Router from './Router';
import Loader from './views/ui-elements/utility/Loader'
import ToTop from './views/ui-elements/utility/ToTop'
import RegistrationModal from './views/ui-elements/modal/RegistrationModal'

function App() {

  return (
    <div>
      <Loader />
      <Router></Router>
      <RegistrationModal />
      <ToTop />
    </div>
  );
}

export default App;
