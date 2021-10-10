import React, { useState, useEffect } from "react";
import css from "./Card.module.css";
import { User } from "../../models/User";
import Button from "../Button/Button";

const Card = () => {
  const url = "https://randomuser.me/api/?result=5";
  const [user, setUser] = useState<User>();

  const getRandomUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUser(data.results[0]);
  };

  useEffect(() => {
    getRandomUser();
  }, []);
  console.log(user);

  return (
    <div className={css.container}>
      <div>
        <img src={user?.picture.large} alt="user" />
        <div className={css.info}>
          <h2>
            {user?.name.first} {user?.name.last}
          </h2>
          <p>{user?.email}</p>
          <p>{user?.location.city}</p>
        </div>
      </div>
      <Button onClick={getRandomUser}> Get Random User</Button>
    </div>
  );
};

export default Card;
