import "./App.css";
import Barratopo from "./components/barratopo";
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme2 = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#f6685e",
      main: "#f44336",
      dark: "#aa2e25",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      contrastText: "#000",
    },
  },
});

function App() {
 
  return (
    <div className="App">
      <ThemeProvider theme={theme2}>
         <Barratopo />
      </ThemeProvider>
    </div>
  );
}

export default App;
