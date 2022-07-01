import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Notes from './DB/notes';

function App() {
  return <div>
  <Header />
  {
    Notes.map(
      note => (<Content title={note.title} content={note.content} />)
    )
  }
  <Footer />
  </div>
}

export default App;


