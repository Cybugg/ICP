import Principal "mo:base/Principal";

actor {
    public shared (msg) func getPrincipal() : async Principal {
        msg.caller;
    };
};


// actor {
//   public query (message) func getPrincipal() : async Text {
//     return Principal.toText(message.caller);
//   };
// };