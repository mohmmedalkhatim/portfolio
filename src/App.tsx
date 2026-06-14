import { Outlet } from 'react-router-dom';
// @ts-ignore
import './index.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Header } from './components/Layout/Header';


function App() {
  useGSAP(() => {
    gsap.from(".hero", {})
  }, [])
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default App;
