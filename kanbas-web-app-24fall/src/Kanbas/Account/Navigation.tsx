import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './Account.css';

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-account-navigation" className="list-group">
      {!currentUser && (
        <>
          <NavLink to="/Kanbas/Account/Signin" className="wd-account-link list-group-item">
            Signin
          </NavLink>
          <NavLink to="/Kanbas/Account/Signup" className="wd-account-link list-group-item">
            Signup
          </NavLink>
        </>
      )}

      {currentUser && (
        <NavLink to="/Kanbas/Account/Profile" className="wd-account-link list-group-item">
          Profile
        </NavLink>
      )}
    </div>
  );
}
