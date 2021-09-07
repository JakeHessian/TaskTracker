import { FaBlackberry } from "react-icons/fa";

const AddTask = () => {
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
        <input type="text" placeholder="Add Task"></input>
      </div>
      <div className="form-control">
        <label>Day and Time</label>
        <input type="text" placeholder="Add Day and Time"></input>
      </div>
      <div className="form-control form-control-check">
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
