import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import BeAPartner from "./pages/BeAPartner.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";

// ⭐ FORMS (your required components)
import PartnerForm from "./components/PartnerForm.jsx";
import PreschoolForm from "./components/PreschoolForm.jsx";

// PROGRAM PAGES
import Toddlers from "./pages/programs/Toddlers.jsx";
import PlayGroup from "./pages/programs/PlayGroup.jsx";
import PreNursery from "./pages/programs/PreNursery.jsx";
import Nursery from "./pages/programs/Nursery.jsx";
import Kindergarten from "./pages/programs/Kindergarten.jsx";
import Daycare from "./pages/programs/Daycare.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <Routes>

        {/* ⭐ PUBLIC WEBSITE (Navbar + Footer inside App.jsx) */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          {/* Static Pages */}
          <Route path="be-a-partner" element={<BeAPartner />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />

          {/* ⭐ NEW — Partner & Preschool Form Routes */}
          <Route path="partnerform" element={<PartnerForm />} />
          <Route path="preschoolform" element={<PreschoolForm />} />

          {/* Program Pages */}
          <Route path="programs/toddlers" element={<Toddlers />} />
          <Route path="programs/play-group" element={<PlayGroup />} />
          <Route path="programs/pre-nursery" element={<PreNursery />} />
          <Route path="programs/nursery" element={<Nursery />} />
          <Route path="programs/kindergarten" element={<Kindergarten />} />
          <Route path="programs/daycare" element={<Daycare />} />
        </Route>

        {/* ⭐ ADMIN ROUTES */}
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
