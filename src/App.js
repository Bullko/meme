import { createContext, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Meme from "./Components/Meme";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ThemeContext = createContext(null);

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode((curr) => (curr === "light" ? "dark" : "light"));
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#8d0db5",
      },
      secondary: {
        main: "#42a5f5",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
        <div className="App" id={themeMode}>
          <Header toggleTheme={toggleTheme} />
          <Meme />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
