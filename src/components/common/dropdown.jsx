import { useStateValue } from "../context/stateProvider";
import { ACTION_TYPES } from "../context/stateReducer";

const Dropdown = ({ lists, show }) => {
  const [{ user }, dispatch] = useStateValue();

  const handleDropdown = (name) => {
    if (name === "logout") {
      dispatch({ type: ACTION_TYPES.SET_USER, payload: { value: null } });
      localStorage.clear();
    }
  };

  return (
    <div
      className="sidebar__dropdown"
      style={{ display: `${show ? "block" : "none"}` }}
    >
      <ul>
        {lists &&
          lists.map((list) => (
            <li
              key={list.name}
              name={list.name}
              className="sidebar__dropdown__list"
              onClick={() => handleDropdown(list.name)}
            >
              {list.value}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;
