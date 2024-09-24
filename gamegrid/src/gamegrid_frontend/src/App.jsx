import { useState } from 'react';
import { gamegrid_backend } from 'declarations/gamegrid_backend';
import Hero from './components/hero.jsx';
import Nav from './components/nav.jsx';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    gamegrid_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main className='relative h-screen flex flex-col lg:flex-row'>
      <Nav />
      <Hero />
    </main>
  );
}

export default App;
