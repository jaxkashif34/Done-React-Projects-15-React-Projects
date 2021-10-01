import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const removePeopleHandlers = () => {
    setPeople([]);
  };

  const deletedHandlers = (index) => {
    const deletePerson = people.filter((p) => {
      return p.id !== index;
    });
    setPeople(deletePerson);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} deletePerson={deletedHandlers} />
        <button
          onClick={() => {
            removePeopleHandlers();
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
