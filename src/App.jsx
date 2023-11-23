import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RepoPage } from "./pages/RepoPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:name" element={<RepoPage />} />
    </Routes>
  );
};

export default App;
