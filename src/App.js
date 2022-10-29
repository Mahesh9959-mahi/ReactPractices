import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((response) => setData(response.data));
  }, []);
  return (
    <div className="App">
      <h2>Users</h2>
      <div className="card">
        {data &&
          data.map((user) => (
            <div className="card-content">
              <img src={user.avatar} />
              <p>
                {user.first_name}
                {user.last_name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
