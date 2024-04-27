import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage/></Layout>} />
      <Route path="/user-profile" element={<span>User</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
