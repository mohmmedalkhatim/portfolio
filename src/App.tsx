import { Outlet } from 'react-router-dom';
// @ts-ignore
import './index.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Header } from './components/Layout/Header';
import AnimatedBackground from './components/shared/animatedBackground';


function App() {
  useGSAP(() => {
    gsap.from(".hero", {})
  }, [])
  return (
    <>
      <AnimatedBackground/>
      <Header />
      <Outlet />
    </>
  );
}
export default App;
