import { useState, useEffect } from "react";
import api from "../api/api.js"
import { useParams } from "react-router-dom";

export function UserProfile() {
const { id } = useParams();

const [User, setUser] = useState({
    name: "",
    email: "",
    username: "",
    number: "",
    event : "",
  });

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get(`/${id}` );

        console.log(response);
        setUser({ ...response.data });

      } catch (err) {
        console.log(err);
      }
    }
    fetchProfile();
  }, [id]);

  return (
    <>
    <div className="Profile">
    <h1 id="Profile"> Profile </h1>
        <div className="flex">
          <div className="flex-item">
                <h2>{User.name}</h2>
                <h3>{User.email}</h3>
                <p>{User.username}</p>
                <p>{User.number}</p>
                <p>{User.event}</p>
            </div>
          </div>
        </div>
    </>
  );
}


