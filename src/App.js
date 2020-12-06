import React from 'react';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/women/19.jpg"
        name="Madison Stanley"
        online
      />

      <Contact
        avatar="https://randomuser.me/api/portraits/women/78.jpg"
        name="Miriam Fox"
      />

      <Contact
        avatar="https://randomuser.me/api/portraits/women/38.jpg"
        name="Myrtle Bell"
        online
      />

    </div>
  );
}

export default App;
