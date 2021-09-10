import { useState } from "react";
const AddTask = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const buttonStyle = {
    //display: block,
    width: "100%",
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    //marginRight: "50px",
  };
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Task"
        ></input>
      </div>
      <div className="form-control">
        <label>Day and Time</label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Add Day and Time"
        ></input>
      </div>
      <div
        className="form-control form-control-check"
        onChange={(e) => setText(e.currentTarget.checked)}
        value={reminder}
      >
        <label>Set Time</label>
        <input type="checkbox"></input>
      </div>
      <input
        className="btn"
        style={buttonStyle}
        type="submit"
        value="Save Task"
      ></input>
    </form>
  );
};

export default AddTask;
