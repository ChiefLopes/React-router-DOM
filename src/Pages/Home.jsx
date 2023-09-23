import PropTypes from "prop-types";
const Home = (props) => {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
        }}>
        THIS IS HOME OF {props.userName}
      </h1>
    </div>
  );
};

Home.propTypes = {
  userName: PropTypes.string.isRequired, // Expecting userName to be a string
};

export default Home;
