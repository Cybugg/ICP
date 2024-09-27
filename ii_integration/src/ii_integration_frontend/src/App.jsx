import { useEffect, useState } from 'react';
import { ii_integration_backend } from 'declarations/ii_integration_backend';
import { Actor, HttpAgent } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";

const webapp_id = process.env.WHOAMI_CANISTER_ID;

// The interface of the whoami canister
const webapp_idl = ({ IDL }) => {
  return IDL.Service({ whoami: IDL.Func([], [IDL.Principal], ["query"]) });
};
export const init = ({ IDL }) => {
  return [];
};
function App() {
  const [iiUrl, setiiurl] = useState("");
  const [identity, setIdentity] = useState("");
  const [principal, setPrincipal] =useState("");

  useEffect(
    ()=>{
      let iiUrl;
      if (process.env.DFX_NETWORK === "local") {
       setiiurl(`http://localhost:4943/?canisterId=${process.env.II_CANISTER_ID}`);
      } else if (process.env.DFX_NETWORK === "ic") {
       setiiurl(`https://${process.env.II_CANISTER_ID}.ic0.app`);
      } else {
       setiiurl(`https://${process.env.II_CANISTER_ID}.dfinity.network`);
      }
    },[]
  )

  async function handleLogin (){
 // When the user clicks, we start the login process.
  // First we have to create an AuthClient.
  const authClient = await AuthClient.create();
// Call authClient.login(...) to login with Internet Identity. This will open a new tab
  // with the login prompt. The code has to wait for the login process to complete.
  // We can either use the callback functions directly or wrap them in a promise.
  await new Promise((resolve, reject) => {
    authClient.login({
      identityProvider: iiUrl,
      onSuccess: resolve,
      onError: reject,
    });
  });

   // At this point we're authenticated, and we can get the identity from the auth client:
   const identity = authClient.getIdentity();
   setIdentity(identity);
    // Using the identity obtained from the auth client, we can create an agent to interact with the IC.
  const agent = new HttpAgent({ identity });
   // Using the interface description of our webapp, we create an actor that we use to call the service methods.
 const webapp = Actor.createActor(webapp_idl, {
  agent,
  canisterId: webapp_id,
});
// Call whoami which returns the principal (user id) of the current user.
const principal = await webapp.whoami().then((data)=>setPrincipal(data)).catch(err=>console.log(err));
  };


  return (
    <main>
  <form>
        <button id="login" onClick={handleLogin}>Login!</button>
      </form>
      <br />
      <form>
        <button id="whoAmI">Who Am I</button>
      </form>
      <section id="principal">Principal: {principal}</section>
      <section id="identity">Identity: {identity}</section>
    </main>
  );
}

export default App;
