import { Box } from "@mui/system";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: 63 }}>
        <Home />
      </Box>
    </DataProvider>
  );
};

export default App;
