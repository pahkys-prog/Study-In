import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StudyForm from "@/features/study/components/StudyForm";
import { useStudyForm } from "@/features/study/hooks/useStudyForm";
import type { StudyFormState } from "@/types/study.d";

export default function StudyCreate() {
  const navigate = useNavigate();

  const handleSubmit = useCallback((formState: StudyFormState) => {
    // API 붙일 때 여기만 교체
    console.log("[StudyCreate] submit →", formState);
    // navigate('/') 또는 navigate(`/study/${newId}`)
    alert("스터디가 생성되었습니다! (API 연동 전 임시 메시지)");
  }, []);

  const {
    form,
    errors,
    tagInput,
    setTagInput,
    isValid,
    fileInputRef,
    updateField,
    handleThumbnailChange,
    handleDayToggle,
    handleAddTag,
    handleRemoveTag,
    handleTagInputKeyDown,
    handleSubmit: onSubmit,
    handleReset,
  } = useStudyForm(handleSubmit);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── 페이지 헤더 ── */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="뒤로 가기"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-base font-bold text-gray-900">스터디 만들기</h1>

          {/* 필수 항목 입력 진행률 표시 */}
          <div className="ml-auto flex items-center gap-2">
            <RequiredProgress form={form} />
          </div>
        </div>
      </div>

      {/* ── 본문 ── */}
      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* 안내 배너 */}
        <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-2xl mb-6">
          <span className="text-xl flex-shrink-0">💡</span>
          <div>
            <p className="text-sm font-semibold text-blue-800">
              정회원만 스터디를 생성할 수 있어요
            </p>
            <p className="text-xs text-blue-600 mt-0.5">
              <span className="font-medium text-[#4F7BF7]">*</span> 표시 항목을
              모두 채우면 스터디 만들기 버튼이 활성화됩니다.
            </p>
          </div>
        </div>

        {/* 폼 */}
        <StudyForm
          form={form}
          errors={errors}
          tagInput={tagInput}
          isValid={isValid}
          fileInputRef={fileInputRef}
          setTagInput={setTagInput}
          updateField={updateField}
          handleThumbnailChange={handleThumbnailChange}
          handleDayToggle={handleDayToggle}
          handleAddTag={handleAddTag}
          handleRemoveTag={handleRemoveTag}
          handleTagInputKeyDown={handleTagInputKeyDown}
          handleSubmit={onSubmit}
          handleReset={handleReset}
        />
      </main>
    </div>
  );
}

// ─── 진행률 표시 컴포넌트 ──────────────────────────────────────────────────────

function RequiredProgress({ form }: { form: StudyFormState }) {
  const checks = [
    !!form.thumbnail,
    !!form.title.trim(),
    !!form.studyType,
    form.studyType === "offline" ? !!form.location.trim() : true,
    form.maxMembers !== "" && Number(form.maxMembers) >= 3,
    !!form.startDate,
    form.durationWeeks !== "",
    !!form.startTime,
    !!form.endTime,
    !!form.subject,
    !!form.difficulty,
    form.tags.length > 0,
  ];
  const filled = checks.filter(Boolean).length;
  const total = checks.length;
  const percent = Math.round((filled / total) * 100);

  return (
    <div className="flex items-center gap-2">
      <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percent}%`,
            background: percent === 100 ? "#22c55e" : "#4F7BF7",
          }}
        />
      </div>
      <span className="text-xs text-gray-500 tabular-nums">
        {filled}/{total}
      </span>
    </div>
  );
}
