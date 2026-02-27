import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "../pages/Home";
import StudyDetail from "../pages/StudyDetail";
import Profile from "../pages/Profile";
import ProfileEdit from "../pages/ProfileEdit"; 

export default function Router() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/study/:studyId" element={<StudyDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<ProfileEdit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}