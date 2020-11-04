import React from 'react';
import Router from './Router';
import Loader from './views/ui-elements/utility/Loader'
import ToTop from './views/ui-elements/utility/ToTop'
import RegistrationModal from './views/ui-elements/modal/RegistrationModal'
import QuoteFormModal from './views/ui-elements/modal/quoteFormModal/QuoteFormModal'

function App() {

  return (
    <div>
      <Loader />
      <Router></Router>
      <RegistrationModal />
      <QuoteFormModal />
      <ToTop />
    </div>
  );
}

export default App;
