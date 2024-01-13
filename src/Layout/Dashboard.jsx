import {
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaStar,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>
                  <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendar /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <FaStar /> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaShoppingCart /> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymentHistory"}>
                  <FaList /> Payment History
                </NavLink>
              </li>
            </>
          )}
          {/* Shared navlinks */}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaSearch /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/contact"}>
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
