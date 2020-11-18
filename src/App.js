import React from 'react';
import Router from './Router';
import Loader from './views/ui-elements/utility/Loader'
import ToTop from './views/ui-elements/utility/ToTop'
import RegistrationModal from './views/ui-elements/modal/RegistrationModal'
import QuoteFormModal from './views/ui-elements/modal/QuoteFormModal/QuoteFormModal'
import { ToastContainer } from 'react-toastify';
import '../node_modules/react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <ToastContainer />
      <Loader />
      <Router></Router>
      <RegistrationModal />
      <QuoteFormModal />
      <ToTop />
    </div>
  );
}

export default App;
