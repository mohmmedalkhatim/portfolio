import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import "./index.css"
import { getDocs, getFirestore } from 'firebase/firestore';
import { app } from './firebase/init';
import {} from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Text from 'gsap/TextPlugin'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger,Text,ScrollToPlugin)
const db = getFirestore(app)
console.log(db.toJSON())

createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}  />
    </React.StrictMode>
)