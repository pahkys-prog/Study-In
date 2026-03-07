<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { getNotifications } from "@/api/notification";
import { getProfile } from "@/api/profile";
import { storage } from "@/utils/storage";
import MobileDrawer from "@/components/layout/MobileDrawer";
import logoSrc from "@/assets/base/icon-Logo.svg";
import searchIcon from "@/assets/base/icon-Search.svg";
import chattingIcon from "@/assets/base/icon-chatting.svg";
import notificationIcon from "@/assets/base/icon-Notification.svg";
import HamburgerIcon from "@/assets/base/icon-hamburger.svg?react";
=======
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { getNotifications } from '@/api/notification';
import { getProfile } from '@/api/profile';
import { storage } from '@/utils/storage';
import MobileDrawer from '@/components/layout/MobileDrawer';
import logoSrc from '@/assets/base/icon-Logo.svg';
import searchIcon from '@/assets/base/icon-Search.svg';
import chattingIcon from '@/assets/base/icon-chatting.svg';
import notificationIcon from '@/assets/base/icon-Notification.svg';
import HamburgerIcon from '@/assets/base/icon-hamburger.svg?react';
>>>>>>> 90dea279f621cdc07da35f5ff4e73e150c76388e

interface HeaderProps {
  variant?: "default" | "auth";
}

export default function Header({ variant = "default" }: HeaderProps) {
  const { isLoggedIn } = useAuthStore();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [profileImg, setProfileImg] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchUnread = async () => {
      try {
        const data = await getNotifications();
        setUnreadCount(data.results.filter((n) => !n.checked).length);
      } catch {
        // 에러 무시
      }
    };
    fetchUnread();
  }, [isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchProfile = async () => {
      try {
        const userId = storage.getUserId();
        if (!userId) return;
        const profile = await getProfile(userId);
<<<<<<< HEAD
        const baseUrl = import.meta.env.VITE_API_BASE_URL || "";
=======
        const baseUrl = import.meta.env.VITE_API_BASE_URL || '';
>>>>>>> 90dea279f621cdc07da35f5ff4e73e150c76388e
        setProfileImg(baseUrl + profile.profile_img);
      } catch {
        // 에러 무시
      }
    };
    fetchProfile();
  }, [isLoggedIn]);

  return (
    <>
      <header className="bg-background border-b border-gray-300">
<<<<<<< HEAD
=======

>>>>>>> 90dea279f621cdc07da35f5ff4e73e150c76388e
        {/* ── 모바일 헤더 ── */}
        <div className="flex lg:hidden items-center justify-between h-14 px-4">
          <button onClick={() => setDrawerOpen(true)}>
            <HamburgerIcon className="w-7 h-7 text-surface" />
          </button>
          <Link to="/">
            <img src={logoSrc} alt="Studyin" className="h-5" />
          </Link>
<<<<<<< HEAD
          <button
            onClick={() => navigate(isLoggedIn ? "/chat" : "/login")}
            className="relative"
          >
=======
          <button onClick={() => navigate(isLoggedIn ? '/chat' : '/login')} className="relative">
>>>>>>> 90dea279f621cdc07da35f5ff4e73e150c76388e
            <img src={chattingIcon} alt="채팅" className="w-[30px] h-[30px]" />
            {isLoggedIn && unreadCount > 0 && (
              <span className="absolute bottom-0.5 right-0 w-[10px] h-[10px] bg-error rounded-full" />
            )}
          </button>
        </div>

        {/* ── 데스크탑 헤더 ── */}
        <div className="hidden lg:flex items-center h-[80px]">
          <div className="flex items-center w-full max-w-[1190px] mx-auto">
<<<<<<< HEAD
            {/* 로고 */}
            <Link to="/" className="shrink-0">
              <img src={logoSrc} alt="Studyin" className="h-[32px]" />
            </Link>

=======

            {/* 로고 */}
            <Link to="/" className="shrink-0">
              <img src={logoSrc} alt="Studyin" className="h-[32px]" />
            </Link>

>>>>>>> 90dea279f621cdc07da35f5ff4e73e150c76388e
            {/* 내지역 / 온라인 */}
            <nav className="flex items-center shrink-0 ml-[40px] gap-[30px]">
              <button className="relative flex items-center h-[80px] text-lg font-regular text-surface">
                내 지역
              </button>
              <button className="flex items-center text-lg font-regular text-surface">
                온라인
              </button>
            </nav>

            {/* 빈 공간으로 검색창 오른쪽으로 밀기 */}
            <div className="flex-1" />

            {/* 검색창 */}
            <div className="flex items-center w-[400px] h-[44px] px-5 border-2 border-gray-300 rounded-full shrink-0">
              <input
                type="text"
                placeholder="어떤 스터디를 찾고 계신가요?"
                className="flex-1 text-base font-medium outline-none text-surface placeholder:text-gray-500 bg-transparent min-w-0"
              />
              <img src={searchIcon} alt="검색" className="w-7 h-7 shrink-0" />
            </div>

            {/* 우측 아이콘 영역 */}
            <div className="flex items-center ml-[32px] gap-[20px] shrink-0">
<<<<<<< HEAD
              <button onClick={() => navigate(isLoggedIn ? "/chat" : "/login")}>
                <img
                  src={chattingIcon}
                  alt="채팅"
                  className="w-[30px] h-[30px]"
                />
              </button>
              <button
                className="relative"
                onClick={() =>
                  navigate(isLoggedIn ? "/notification" : "/login")
                }
              >
                <img
                  src={notificationIcon}
                  alt="알림"
                  className="w-[30px] h-[30px]"
                />
                {isLoggedIn && unreadCount > 0 && (
                  <span className="absolute bottom-0.5 right-0 w-[10px] h-[10px] bg-error rounded-full" />
                )}
              </button>
              <button
                className="w-[44px] h-[44px] rounded-full border-2 border-gray-300 overflow-hidden shrink-0 block"
                onClick={() => navigate(isLoggedIn ? "/profile" : "/login")}
              >
                {isLoggedIn && profileImg ? (
                  <img
                    src={profileImg}
                    alt="프로필"
                    className="w-full h-full object-cover"
                  />
=======
              <button onClick={() => navigate(isLoggedIn ? '/chat' : '/login')}>
                <img src={chattingIcon} alt="채팅" className="w-[30px] h-[30px]" />
              </button>
              <button className="relative" onClick={() => navigate(isLoggedIn ? '/notification' : '/login')}>
                <img src={notificationIcon} alt="알림" className="w-[30px] h-[30px]" />
                {isLoggedIn && unreadCount > 0 && (
                  <span className="absolute bottom-0.5 right-0 w-[10px] h-[10px] bg-error rounded-full" />
                )}
              </button>
              <button
                className="w-[44px] h-[44px] rounded-full border-2 border-gray-300 overflow-hidden shrink-0 block"
                onClick={() => navigate(isLoggedIn ? '/profile' : '/login')}
              >
                {isLoggedIn && profileImg ? (
                  <img src={profileImg} alt="프로필" className="w-full h-full object-cover" />
>>>>>>> 90dea279f621cdc07da35f5ff4e73e150c76388e
                ) : (
                  <div className="w-full h-full flex items-center justify-center" />
                )}
              </button>
            </div>
<<<<<<< HEAD
=======

>>>>>>> 90dea279f621cdc07da35f5ff4e73e150c76388e
          </div>
        </div>
      </header>

<<<<<<< HEAD
=======
      </header>
>>>>>>> 90dea279f621cdc07da35f5ff4e73e150c76388e
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
