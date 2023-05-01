import { DrawingCanvas } from "./components/DrawingCanvas";
import { Container } from "@mui/material";
import { ShapesContextProvider } from "./components/context/ShapesContext";

function App() {
  return (
    <Container sx={{ height: "100vh" }}>
      <ShapesContextProvider>
        <DrawingCanvas />
      </ShapesContextProvider>
    </Container>
  );
}

export default App;
