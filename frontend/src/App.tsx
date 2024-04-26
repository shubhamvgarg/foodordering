import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout>HOME PAGE</Layout>} />
      <Route path="/user-profile" element={<span>User</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
