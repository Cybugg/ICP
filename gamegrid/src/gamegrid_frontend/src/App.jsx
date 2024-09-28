import { useState,useEffect } from 'react';
import { createActor,gamegrid_backend } from 'declarations/gamegrid_backend';
import Hero from './components/hero.jsx';
import Nav from './components/nav.jsx';
import { useInternetIdentity } from "ic-use-internet-identity";
import { useBackend } from "./ic/Actors";
import {HttpAgent} from "@dfinity/agent";

function App() {
  const { identity } = useInternetIdentity();
  const [activateSignIn,setActivateSignIn] = useState(false);
  const [principal, setPrincipal] = useState("");
  const [loading, setLoading] = useState(false);
  const { actor: backend } = useBackend();

   // Clear the principal when the identity is cleared
   useEffect(() => {
    if (!identity) setPrincipal(undefined);
  }, [identity]);

// Get the principal from the backend when an identity is available
  const getPrincipal = async ()=>{
 if (identity && backend && !principal) {
  const agent = new HttpAgent({identity});

   // Using the interface description of our webapp, we create an actor that we use to call the service methods.
   let actor = createActor(process.env.CANISTER_ID_GAMEGRID_BACKEND, {
    agent,
});

  let princ ;
        try {
         setLoading(true);
         princ = await actor.getPrincipal();
         console.log("identity",identity);
         console.log("principal",principal);
        } catch (err) {
          console.error(err);
        } finally {setPrincipal(princ);
        setLoading(false);
        console.log("identity",identity);
        console.log("principal",principal);
        }
      };};


  
  useEffect(() => {
   getPrincipal()
  }, [backend, identity, principal]);



  return (
    <main className='relative h-screen flex flex-col lg:flex-row'>
      <Nav setActivateSignIn={setActivateSignIn} />
      <Hero setActivateSignIn={setActivateSignIn} activateSignIn={activateSignIn}/>
    </main>
  );
}

export default App;
