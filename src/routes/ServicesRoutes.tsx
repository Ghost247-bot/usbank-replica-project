
import { Route } from "react-router-dom";
import FinancialEducation from "@/pages/FinancialEducation";
import MobileApp from "@/pages/MobileApp";
import WireTransfers from "@/pages/WireTransfers";
import SafeDepositBoxes from "@/pages/SafeDepositBoxes";
import NotaryServices from "@/pages/NotaryServices";
import AboutUs from "@/pages/AboutUs";
import CustomerService from "@/pages/CustomerService";
import FindLocations from "@/pages/FindLocations";
import ContactUs from "@/pages/ContactUs";
import SecurityCenter from "@/pages/SecurityCenter";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import Accessibility from "@/pages/Accessibility";
import SiteMap from "@/pages/SiteMap";

const ServicesRoutes = () => (
  <>
    <Route path="/financial-education" element={<FinancialEducation />} />
    <Route path="/mobile-app" element={<MobileApp />} />
    <Route path="/wire-transfers" element={<WireTransfers />} />
    <Route path="/safe-deposit-boxes" element={<SafeDepositBoxes />} />
    <Route path="/notary-services" element={<NotaryServices />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/customer-service" element={<CustomerService />} />
    <Route path="/find-locations" element={<FindLocations />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/security-center" element={<SecurityCenter />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-of-service" element={<TermsOfService />} />
    <Route path="/accessibility" element={<Accessibility />} />
    <Route path="/site-map" element={<SiteMap />} />
  </>
);

export default ServicesRoutes;
