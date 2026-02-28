import { useMemo } from "react";
import { useParams } from "react-router-dom";

type StudyDetailData = {
  id: number;
  thumbnailUrl: string;
  title: string;
  leader: { nickname: string; profileImageUrl: string; grade?: string };
  isOffline: boolean;
  location?: string;
  capacity: number;
  participants: number;
  description: string;
  days: string[];
  startDate: string;
  time: string;
  durationWeeks: number;
  difficulty: "초급" | "중급" | "고급";
  subject: string;
  tags: string[];
};

export default function StudyDetail() {
  const { studyId } = useParams<{ studyId: string }>();

  const data: StudyDetailData | null = useMemo(() => {
    if (!studyId) return null;
    return {
      id: Number(studyId),
      thumbnailUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=60",
      title: "React 스터디 (주 2회) - 프로젝트 같이 해요",
      leader: {
        nickname: "StudyLeader",
        profileImageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=256&q=60",
        grade: "정회원",
      },
      isOffline: true,
      location: "제주 제주시 (오프라인)",
      capacity: 10,
      participants: 6,
      description: "주 2회 같이 모여서 React 프로젝트를 진행합니다. 초급~중급 환영! 일정과 규칙은 스터디 내에서 합의해요.",
      days: ["화", "목"],
      startDate: "2026-03-03",
      time: "19:00 ~ 21:00",
      durationWeeks: 6,
      difficulty: "중급",
      subject: "프로젝트",
      tags: ["React", "TypeScript", "Vite", "협업"],
    };
  }, [studyId]);

  if (!data) return <div className="p-6">잘못된 접근입니다.</div>;

  return (
    <div className="mx-auto w-full max-w-5xl p-4 md:p-6">
      <section className="mb-6">
        <p className="mb-2 text-xs text-gray-400">studyId: {studyId}</p>
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-600">
          <span className="rounded-full bg-gray-100 px-3 py-1">{data.subject}</span>
          <span className="rounded-full bg-gray-100 px-3 py-1">{data.difficulty}</span>
          <span className="rounded-full bg-gray-100 px-3 py-1">{data.isOffline ? "오프라인" : "온라인"}</span>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[360px_1fr]">
        <div className="overflow-hidden rounded-2xl bg-gray-100">
          <img src={data.thumbnailUrl} alt="thumbnail" className="h-56 w-full object-cover md:h-72" />
        </div>
        <div className="rounded-2xl border p-4 md:p-6">
          <div className="flex items-center gap-3">
            <img src={data.leader.profileImageUrl} alt="profile" className="h-10 w-10 rounded-full object-cover" />
            <p className="text-sm font-semibold">{data.leader.nickname} <span className="text-xs text-gray-500">({data.leader.grade})</span></p>
          </div>
          <div className="mt-5 grid gap-2 text-sm">
            <p><span className="text-gray-500">모집 인원:</span> {data.participants}/{data.capacity}</p>
            <p><span className="text-gray-500">진행 요일:</span> {data.days.join(", ")}</p>
            <p><span className="text-gray-500">시작일:</span> {data.startDate}</p>
          </div>
          <div className="mt-6 flex gap-2">
            <button className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white">참가하기</button>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border p-4 md:p-6">
        <h2 className="text-lg font-bold">스터디 소개</h2>
        <p className="mt-3 text-sm text-gray-700">{data.description}</p>
      </section>
    </div>
  );
}