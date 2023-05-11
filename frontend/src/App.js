import { GoogleOAuthProvider } from "@react-oauth/google";
import Messanger from "./components/Messanger";

import AccountProvider from "./context/AccountProvide";

function App() {
  const clientId =
    "676078585475-n1c3k2gk5grnpe4dmrhon6e5jv80gn33.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messanger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
