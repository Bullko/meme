import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Meme from "./Components/Meme";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
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
      <div className="App">
        <Header />
        <Meme />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
