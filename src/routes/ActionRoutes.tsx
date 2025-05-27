
import { Route } from "react-router-dom";
import GetStarted from "@/pages/GetStarted";
import LearnMore from "@/pages/LearnMore";
import GetApproved from "@/pages/GetApproved";
import StartInvesting from "@/pages/StartInvesting";
import DownloadApp from "@/pages/DownloadApp";
import GetStartedToday from "@/pages/GetStartedToday";
import ScheduleConsultation from "@/pages/ScheduleConsultation";
import CompareAccountOptions from "@/pages/CompareAccountOptions";
import CompareRates from "@/pages/CompareRates";
import GetQuote from "@/pages/GetQuote";

const ActionRoutes = () => (
  <>
    <Route path="/get-started" element={<GetStarted />} />
    <Route path="/learn-more" element={<LearnMore />} />
    <Route path="/get-approved" element={<GetApproved />} />
    <Route path="/start-investing" element={<StartInvesting />} />
    <Route path="/download-app" element={<DownloadApp />} />
    <Route path="/get-started-today" element={<GetStartedToday />} />
    <Route path="/schedule-consultation" element={<ScheduleConsultation />} />
    <Route path="/compare-account-options" element={<CompareAccountOptions />} />
    <Route path="/compare-rates" element={<CompareRates />} />
    <Route path="/get-quote" element={<GetQuote />} />
  </>
);

export default ActionRoutes;
