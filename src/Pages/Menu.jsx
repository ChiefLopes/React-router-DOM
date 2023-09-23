import PropTypes from "prop-types";
import { ChangeProfile } from "./ChangeProfile";

const Menu = (props) => {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
        }}>
              THIS IS THE MENU PAGE OF {props.userName}
              <ChangeProfile setNewUsername={props.setNewUsername} />
      </h1>
    </div>
  );
};

Menu.propTypes = {
    setNewUsername: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired, // Expecting userName to be a string
};

export default Menu;
