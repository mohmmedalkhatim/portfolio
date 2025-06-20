import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './index.css';
import { useState } from 'react';
import Dialog from './components/dialog';
function App() {
  let [dialogState,setDialogState] = useState(false)
  return (
    <>
      <Header openDialog={setDialogState}/>
      <Navbar />
      <Outlet />
      <Dialog state={dialogState} setState={setDialogState}/>
    </>
  );
}
export default App;
