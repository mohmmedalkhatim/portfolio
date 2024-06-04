import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import "./index.css"
import { getDocs, getFirestore } from 'firebase/firestore';
import { app } from './firebase/init';

const db = getFirestore(app)
console.log(db.toJSON())

createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}  />
    </React.StrictMode>
)