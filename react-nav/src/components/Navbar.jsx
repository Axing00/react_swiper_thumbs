/* eslint-disable */
const Navbar = ({ show }) => {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <ul>
        <li>
          <a href="#none">Home1</a>
        </li>
        <li>
          <a href="#none">Home2</a>
        </li>
        <li>
          <a href="#none">Home3</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
