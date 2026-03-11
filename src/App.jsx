import HomePage from './pages/Home';
import MainLayout from './components/Layout';
import SummaryPage from './pages/role-analytics/SummaryPage';
import QuestionPage from './pages/role-analytics/QuestionPage';
import IndividualPage from './pages/role-analytics/IndividualPage';
import NewOpeningForm from './pages/release-openings/NewOpeningForm';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ReleaseOpeningsPage from './pages/release-openings/ReleaseOpenings';
import RoleAnalyticsLayout from './components/role-analytics/RoleAnalyticsLayout';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/release-openings" element={<ReleaseOpeningsPage />} />
                    <Route path="/release-opening-form" element={<NewOpeningForm />} />
                    <Route path="/opening-form-details" element={<>Opening form details</>} />
                    <Route path="/role-analytics" element={<RoleAnalyticsLayout />}>
                        <Route index element={<Navigate to="summary" replace />} />
                        <Route path="summary" element={<SummaryPage />} />
                        <Route path="question" element={<QuestionPage />} />
                        <Route path="individual" element={<IndividualPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
