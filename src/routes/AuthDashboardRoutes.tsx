
import { Route } from "react-router-dom";
import CreateAccount from "@/pages/CreateAccount";
import ForgotPassword from "@/pages/ForgotPassword";
import AdminLogin from "@/pages/AdminLogin";
import AdminSetup from "@/pages/AdminSetup";
import UserDashboard from "@/pages/UserDashboard";
import AdminDashboard from "@/pages/AdminDashboard";

const AuthDashboardRoutes = () => (
  <>
    <Route path="/create-account" element={<CreateAccount />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/admin-login" element={<AdminLogin />} />
    <Route path="/admin-setup" element={<AdminSetup />} />
    <Route path="/user-dashboard" element={<UserDashboard />} />
    <Route path="/admin-dashboard" element={<AdminDashboard />} />
  </>
);

export default AuthDashboardRoutes;
