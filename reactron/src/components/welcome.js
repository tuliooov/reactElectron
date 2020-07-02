import React from 'react';

import AppButton from './app-button'





export default class Home extends React.Component{
  render(){
  const ipc = require('electron').ipcRenderer;


  ipc.on('wrote-pdf', function(event, path){
    console.log('wrote-pdf')
    const message = `Wrote PDF to: ${path}`;
    document.getElementById('pdf-path').innerHTML = message;
  })

    return ( 
        <div>
          <p align="right"><b>source:</b> welcome.js </p>
          <h2>Seja bem-vindo...</h2>
          <p>Este programa é um projeto base para uma aplicacao React/Electron/Material-UI.</p>

          <label id = "pdf-path"></label>
          <button  onClick={() => {
            console.log("print")
            ipc.send('print-to-pdf');
          }}>Em PDF</button>

          <button  onClick={() => {
            console.log("print")
            ipc.send('print-to-silenc');
          }}>Silencioso</button>

          <button  onClick={() => {
            console.log("print")
            ipc.send('print-to-NotSilenc');
          }}>Nao Silencioso</button>
        </div>
    )
  }
 }