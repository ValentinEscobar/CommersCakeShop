import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE4vRJpxOdhTN1N19W7raB25WAMPhdtFM",
  authDomain: "cakeshop-972bd.firebaseapp.com",
  projectId: "cakeshop-972bd",
  storageBucket: "cakeshop-972bd.appspot.com",
  messagingSenderId: "1024823478849",
  appId: "1:1024823478849:web:4dffcc592d2c82f0e694c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
