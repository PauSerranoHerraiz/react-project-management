import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import Navbar from "./components/Navbar";
import CreateProjectPage from "./pages/CreateProjectPage";


function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/create" element={<CreateProjectPage />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

    </>
  )
}

export default App
