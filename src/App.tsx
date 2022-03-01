import "./styles.css";
import { PEOPLE } from "./people";
import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [checkbox, setcheckbox] = useState(false);
  return (
    <>
      <div className="App">
        <h1>
          Deepstash Challenge{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h1>
      </div>
      <input
        type="searchBar"
        id="search"
        placeholder="Search"
        onChange={(event) => setQuery(event.target.value)}
      />
      <br />
      <input
        type="checkbox"
        id="showBio"
        onChange={(event) => setcheckbox(event.target.checked)}
      />
      <label htmlFor="showBio">Only show people with bio</label>
      <h3>
        Reacted with{" "}
        <span role="img" aria-label="lightbulb">
          💡
        </span>
      </h3>
      {PEOPLE.filter((person) => {
        var fullname = person.firstName + " " + person.lastName;
        if (query === "") {
          return person;
        } else if (
          person.firstName.toLowerCase().includes(query.toLowerCase()) ||
          person.lastName.toLowerCase().includes(query.toLowerCase()) ||
          fullname.toLowerCase().includes(query.toLowerCase())
        ) {
          return person;
        }
      })
        .filter((person) => {
          if (checkbox === false) {
            return person;
          } else if (person.bio) {
            return person;
          }
        })
        .map((person, index) => (
          <div key={index}>
            {person.reaction === "💡" ? (
              <section className="flexbox">
                <img
                  className="profile-pic"
                  src={person.image}
                  alt={person.firstName}
                ></img>
                <section className="user-info">
                  <p className="name">
                    {person.firstName + " " + person.lastName}
                  </p>
                  <p className="bio">{person.bio}</p>
                </section>
              </section>
            ) : null}
          </div>
        ))}
      <h3>
        Reacted with{" "}
        <span role="img" aria-label="freezing">
          🥶
        </span>
      </h3>
      {PEOPLE.filter((person) => {
        if (query === "") {
          return person;
        } else if (
          person.firstName.toLowerCase().includes(query.toLowerCase()) ||
          person.lastName.toLowerCase().includes(query.toLowerCase())
        ) {
          return person;
        }
      })
        .filter((person) => {
          if (checkbox === false) {
            return person;
          } else if (person.bio) {
            return person;
          }
        })
        .map((person, index) => (
          <div key={index}>
            {person.reaction === "🥶" ? (
              <section className="flexbox">
                <img
                  className="profile-pic"
                  src={person.image}
                  alt={person.firstName}
                ></img>
                <section className="user-info">
                  <p className="name">
                    {person.firstName + " " + person.lastName}
                  </p>
                  <p className="bio">{person.bio}</p>
                </section>
              </section>
            ) : null}
          </div>
        ))}
    </>
  );
}
