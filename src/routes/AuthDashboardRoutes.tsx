
import { Route } from "react-router-dom";
import SignIn from "@/pages/SignIn";
import CreateAccount from "@/pages/CreateAccount";
import ForgotPassword from "@/pages/ForgotPassword";
import AdminLogin from "@/pages/AdminLogin";
import UserDashboard from "@/pages/UserDashboard";
import AdminDashboard from "@/pages/AdminDashboard";

const AuthDashboardRoutes = () => (
  <>
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/create-account" element={<CreateAccount />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/admin-login" element={<AdminLogin />} />
    <Route path="/user-dashboard" element={<UserDashboard />} />
    <Route path="/admin-dashboard" element={<AdminDashboard />} />
  </>
);

export default AuthDashboardRoutes;
