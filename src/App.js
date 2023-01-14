import { Box } from "@mui/system";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Box style={{ marginTop: 63 }}>
        <Home />
      </Box>
    </div>
  );
};

export default App;
