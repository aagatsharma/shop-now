import { Route, Routes } from "react-router";
import HomeLayout from "./layout/home-layout";
import HomePage from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
