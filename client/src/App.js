import "./App.css";
import Typography from "@material-ui/core/Typography";
import InventoryTracker from "./components/InventoryTracker";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <Box className="App" padding={10}>
      <Typography variant="h3" gutterBottom>
        InventoryTracker
      </Typography>
      <InventoryTracker />
    </Box>
  );
}

export default App;
