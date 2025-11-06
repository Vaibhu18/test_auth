import { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/auth/me")
      .then(res => setUser(res.data))
      .catch(() => navigate("/login"));
  }, []);

  const handleLogout = async () => {
    await axios.get("/auth/logout");
    navigate("/login");
  };

  return (
    <div style={{ padding: 30 }}>
      {user ? (
        <>
          <h2>Welcome, {user.name} 👋</h2>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
