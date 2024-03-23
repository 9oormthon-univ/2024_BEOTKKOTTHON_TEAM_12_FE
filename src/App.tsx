import { Router } from "components/index";
import GlobalStyle from "./styles/GlobalStyle";
import { useEffect, useState } from "react";
import splash from "assets/logo/splash.svg";

function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="root">
      <GlobalStyle />
      {showSplash ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <img src={splash} alt="splash" />
        </div>
      ) : (
        <Router />
      )}
    </div>
  );
}

export default App;
