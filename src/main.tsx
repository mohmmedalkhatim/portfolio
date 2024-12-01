import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import "./index.css"
import { getFirestore } from 'firebase/firestore';
import { app } from './firebase/init';
import gsap from 'gsap';
import { ScrollTrigger, } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'
import Text from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, Text, useGSAP)
const db = getFirestore(app)
console.log(db.toJSON())

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)