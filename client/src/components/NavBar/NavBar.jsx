import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <div className="content_navBar">
        <h1>Countries PI</h1>
        <Link className="link_home" to="/home">
          <button>Home</button>
        </Link>
        <Link className="link_create_activities" to="/CreateActivities">
          <button>Create Activitis</button>
          <div className="subrayado"></div>
        </Link>
      </div>
    </>
  );
};
