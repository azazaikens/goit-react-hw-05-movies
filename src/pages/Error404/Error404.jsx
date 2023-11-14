import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <img
        src="https://149434221.v2.pressablecdn.com/wp-content/uploads/2015/08/404-page-error.png"
        alt="404 page"
      />
      <p>This page does not exist, please return to </p>
      <Link to="/">Home</Link>
    </>
  );
};

export default Error404;
