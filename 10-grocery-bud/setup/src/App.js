import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

// Getting Items from Local Storage
const getItems = () => {
  const listItem = localStorage.getItem("List");
  if (listItem) {
    return JSON.parse(listItem);
  } else {
    return [];
  }
};
// Getting Items from Local Storage

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getItems());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display aler
      showAlert(true, "danger", "Enter a value");
    } else if (name && isEditing) {
      // deal with edit
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "Value Changed");
    } else {
      showAlert(true, "success", "Item Added");
      const newItme = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItme]);
      setName("");
      // Deal with
    }
  };
  // Function for Editting
  const editItem = (index) => {
    const specificItem = list.find((item) => item.id == index);
    setIsEditing(true);
    setEditID(index);
    setName(specificItem.title);
  };
  // Function for Editting

  // Delete individual Item
  const deleteItemHandler = (index) => {
    const deleteItem = list.filter((item) => {
      showAlert(true, "danger", "Item Removed");
      return item.id !== index;
    });
    setList(deleteItem);
  };
  // Delete individual Item

  // function for Alert
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  // function for Alert

  // Delete All Items
  const clearList = () => {
    setList([]);
    showAlert(true, "danger", "List Empty");
  };
  // Delete All Items

  // Items Setting To the Local Storage
  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(list));
  }, [list]);
  // Items Setting To the Local Storage
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g eggs"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            type="submit"
            className="submit-btn"
            style={{ userSelect: "none" }}
          >
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List
            items={list}
            deleteItemHandler={deleteItemHandler}
            editItem={editItem}
          />
          <button className="clear-btn" onClick={clearList}>
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
