import "./App.css";
import { useState, useEffect } from "react";
import style from "./components/contacts.module.css";
import Navigation from './components/navigation/Navigation';


export default function App() {



  return (
    <>
      <header className='header'>
        <Navigation />
      </header>
    </>
    );
}
