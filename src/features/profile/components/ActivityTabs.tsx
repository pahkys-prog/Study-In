import { useState } from 'react'

// 임시 스터디 데이터 - 실제 데이터 연결 시 API로 교체 필요
const mockStudies = [
  { id: 1, category: '취업/코테', status: '모집 중', title: '크롬 확장 프로그램 함께 구현 해보실 분 찾습니다.', location: '전국', members: 8 },
  { id: 2, category: '취업/코테', status: '모집 중', title: '크롬 확장 프로그램 함께 구현 해보실 분 찾습니다.', location: '전국', members: 8 },
  { id: 3, category: '취업/코테', status: '모집 중', title: '크롬 확장 프로그램 함께 구현 해보실 분 찾습니다.', location: '전국', members: 8 },
  { id: 4, category: '취업/코테', status: '모집 중', title: '크롬 확장 프로그램 함께 구현 해보실 분 찾습니다.', location: '전국', members: 8 },
]

const ActivityTabs = () => {
  // 상단 탭 상태 관리 (내가 만든 스터디 / 참여 중인 스터디)
  const [activeMainTab, setActiveMainTab] = useState<'my' | 'joined'>('my')
  // 하위 탭 상태 관리 (종료된 스터디 / 관심 스터디)
  const [activeSubTab, setActiveSubTab] = useState<'ended' | 'liked'>('ended')
  // 현재 페이지 상태 관리
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  return (
    <div className="flex flex-col gap-4 px-4 py-4">

      {/* 상단 탭 - 내가 만든 스터디 / 참여 중인 스터디 */}
      <div className="flex border-b border-gray-300">
        <button
          onClick={() => setActiveMainTab('my')}
          className={`flex-1 py-2 text-base font-medium ${
            activeMainTab === 'my'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-500'
          }`}
        >
          내가 만든 스터디
        </button>
        <button
          onClick={() => setActiveMainTab('joined')}
          className={`flex-1 py-2 text-base font-medium ${
            activeMainTab === 'joined'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-500'
          }`}
        >
          참여 중인 스터디
        </button>
      </div>

      {/* 하위 탭 - 종료된 스터디 / 관심 스터디 */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveSubTab('ended')}
          className={`px-4 py-1 rounded-full text-sm ${
            activeSubTab === 'ended'
              ? 'bg-activation text-primary font-medium'
              : 'bg-gray-100 text-gray-500'
          }`}
        >
          종료된 스터디
        </button>
        <button
          onClick={() => setActiveSubTab('liked')}
          className={`px-4 py-1 rounded-full text-sm ${
            activeSubTab === 'liked'
              ? 'bg-activation text-primary font-medium'
              : 'bg-gray-100 text-gray-500'
          }`}
        >
          관심 스터디
        </button>
      </div>

      {/* 스터디 카드 목록 - 2열 그리드 */}
      <div className="grid grid-cols-2 gap-3">
        {mockStudies.map((study) => (
          <div key={study.id} className="border border-gray-300 rounded-lg p-3 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">{study.category}</span>
              <span className="text-xs text-primary">{study.status}</span>
            </div>
            <p className="text-sm font-medium text-gray-900 line-clamp-2">{study.title}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">{study.location}</span>
              <span className="text-xs text-gray-500">{study.members}명</span>
            </div>
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center items-center gap-2 mt-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 rounded-full text-sm ${
              currentPage === page
                ? 'bg-primary text-white'
                : 'text-gray-500'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

    </div>
  )
}

export default ActivityTabs