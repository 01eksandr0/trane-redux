import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../redux/selectors";
import { addTask, deleteTask } from "../redux/tasksSlice";

function App() {
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(e.target.text.value));
  };
  const handleDelete = (e) => {
    dispatch(deleteTask(e.target.id));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <button type="submit">ADD</button>
      </form>
      <ul>
        {tasks.map((i, ind) => (
          <li
            key={i.id}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <p>
              {ind + 1}. {i.text}
            </p>
            <button
              id={i.id}
              type="button"
              onClick={handleDelete}
              style={{ height: 25 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
