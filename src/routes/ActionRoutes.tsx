
import { Route } from "react-router-dom";
import AboutUs from "@/pages/AboutUs";
import LearnMore from "@/pages/LearnMore";
import CheckEquity from "@/pages/CheckEquity";
import CalculatePayment from "@/pages/CalculatePayment";

const ActionRoutes = () => (
  <>
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/learn-more" element={<LearnMore />} />
    <Route path="/check-equity" element={<CheckEquity />} />
    <Route path="/calculate-payment" element={<CalculatePayment />} />
  </>
);

export default ActionRoutes;
