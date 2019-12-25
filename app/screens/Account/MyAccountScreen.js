import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import Loading from "../../components/Loading";

import UserGuestScreen from "./UserGuestScreen";
import UserLoggedScreen from "./UserLoggedScreen";

function MyAccountScreen() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) {
    return <Loading isVisible={true} text="Cargando" />;
  }
  return login ? <UserLoggedScreen /> : <UserGuestScreen />;
}

export default MyAccountScreen;
