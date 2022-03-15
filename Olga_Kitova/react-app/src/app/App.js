import React from 'react';
import Header from 'components/Header';
import file from 'img/Layout.png';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <img src={file} alt="layout"/>
    </div>
  )
}
