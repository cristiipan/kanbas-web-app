import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  // 使用 useState 管理用户的 Profile 信息
  const [profile, setProfile] = useState<any>({});

  // 获取 dispatch 和 navigate 函数
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 从 Redux Store 中获取当前用户的信息
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // 获取当前用户的 Profile 信息
  const fetchProfile = () => {
    if (!currentUser) {
      // 如果没有登录用户，重定向到 Signin 页面
      return navigate("/Kanbas/Account/Signin");
    }
    // 设置 profile 状态为当前用户信息
    setProfile(currentUser);
  };

  // 用户注销功能
  const signout = () => {
    // 将 currentUser 设置为 null
    dispatch(setCurrentUser(null));
    // 重定向到 Signin 页面
    navigate("/Kanbas/Account/Signin");
  };

  // 在组件加载时，获取当前用户信息
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <input
            defaultValue={profile.username}
            id="wd-username"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
          <input
            defaultValue={profile.password}
            id="wd-password"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          />
          <input
            defaultValue={profile.firstName}
            id="wd-firstname"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <input
            defaultValue={profile.lastName}
            id="wd-lastname"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          <input
            defaultValue={profile.dob}
            id="wd-dob"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            type="date"
          />
          <input
            defaultValue={profile.email}
            id="wd-email"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            className="form-control mb-2"
            id="wd-role"
            value={profile.role}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button
            onClick={signout}
            className="btn btn-danger w-100 mb-2"
            id="wd-signout-btn"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
