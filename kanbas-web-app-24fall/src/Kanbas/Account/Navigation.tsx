import { NavLink } from "react-router-dom";
import './Account.css';

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="list-group">
      <NavLink to="/Kanbas/Account/Signin" className="wd-account-link list-group-item">
        Signin
      </NavLink>
      <NavLink to="/Kanbas/Account/Signup" className="wd-account-link list-group-item">
        Signup
      </NavLink>
      <NavLink to="/Kanbas/Account/Profile" className="wd-account-link list-group-item">
        Profile
      </NavLink>
    </div>
  );
}

