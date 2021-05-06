import "./ToDolist.css";

const ToDoList = (props) => {
  return (
    <>
      <div className="raw">
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}>
          X
        </button>
        <li>{props.item}</li>
      </div>
    </>
  );
};
export default ToDoList;
