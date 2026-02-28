import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import StudyDetail from "../pages/StudyDetail"; // 👈 외숙님이 만든 상세 페이지
import Profile from "../pages/Profile";
import ProfileEdit from "../pages/ProfileEdit";
import MyStudy from "../pages/Mystudy";
import StudyCreate from "@/pages/StudyCreate";
import Layout from '@/components/layout/Layout';
import AuthLayout from '@/components/layout/AuthLayout';
import Login from '@/pages/Login';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* 1. 공통 레이아웃 (헤더와 푸터가 있는 페이지들) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          
          {/* ✅ 오늘 외숙님의 핵심 작업: 상세 페이지 연결 주소 */}
          {/* StudyCard에서 보낸 id를 :studyId라는 이름으로 받습니다. */}
          <Route path="/study/:studyId" element={<StudyDetail />} />
          
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/my-study" element={<MyStudy />} />
        </Route>
        
        {/* 2. 스터디 만들기 (독립 페이지) */}
        <Route path="/study/create" element={<StudyCreate />} />

        {/* 3. 인증 관련 레이아웃 (로그인, 회원가입 등) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<div>회원가입 화면 준비 중...</div>} />
          <Route path="/forgot-password" element={<div>비밀번호 찾기 화면 준비 중...</div>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}