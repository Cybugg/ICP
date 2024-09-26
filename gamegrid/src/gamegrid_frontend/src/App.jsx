import { useState } from 'react';
import { gamegrid_backend } from 'declarations/gamegrid_backend';
import Hero from './components/hero.jsx';
import Nav from './components/nav.jsx';

function App() {
  const [greeting, setGreeting] = useState('');
  const [activateSignIn,setActivateSignIn] = useState(false);

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
      <Nav setActivateSignIn={setActivateSignIn} />
      <Hero setActivateSignIn={setActivateSignIn} activateSignIn={activateSignIn}/>
    </main>
  );
}

export default App;
