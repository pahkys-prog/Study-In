import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StudyForm from "@/features/study/components/StudyForm";
import StudyCreateTopBar from "@/features/study/components/StudyCreateTopBar";
import { useStudyForm } from "@/features/study/hooks/useStudyForm";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { StudyFormState } from "@/types/study";
import { uploadStudyThumbnail, createStudy } from "@/api/study";

export default function StudyCreate() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (formState: StudyFormState) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setApiError(null);
    try {
      const thumbnailUrl = await uploadStudyThumbnail(formState.thumbnail!);
      // TODO: 프로필 API 연동 시 preferred_region.id를 세 번째 인자로 전달
      const { id } = await createStudy(formState, thumbnailUrl);
      navigate(`/study/${id}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const serverMsg: string | undefined =
          error.response?.data?.detail ?? error.response?.data?.validationError;
        if (status === 401) {
          setApiError("로그인이 필요합니다.");
        } else if (status === 403) {
          setApiError(serverMsg ?? "정회원만 스터디를 생성할 수 있습니다.");
        } else if (status === 400 || status === 404) {
          setApiError(serverMsg ?? "입력 정보를 다시 확인해주세요.");
        } else {
          setApiError("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        }
      } else {
        setApiError("네트워크 오류가 발생했습니다.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [isSubmitting, navigate]);

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
    handleAddTagDirect,
    handleRemoveTag,
    handleTagInputKeyDown,
    handleBlurField,
    handleSubmit: onSubmit,
    handleReset,
  } = useStudyForm(handleSubmit);

  // TODO: 프로필 API 연결 시 로그인 사용자의 인증된 지역으로 교체
  const userLocation: string | undefined = undefined;

  return (
    <div className="min-h-screen bg-background">
      {/* ── 앱 헤더 (모바일/데스크탑 공통) ── */}
      <div className="sticky top-0 z-10">
        <Header />
      </div>

      {/* ── 스터디 만들기 TopBar ── */}
      <StudyCreateTopBar isValid={isValid} isSubmitting={isSubmitting} />

      {/* ── 폼 ── */}
      <main className="max-w-[1200px] mx-auto pb-10">
        {apiError && (
          <div className="mx-4 mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
            {apiError}
          </div>
        )}
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
          handleAddTagDirect={handleAddTagDirect}
          handleRemoveTag={handleRemoveTag}
          handleTagInputKeyDown={handleTagInputKeyDown}
          handleBlurField={handleBlurField}
          handleSubmit={onSubmit}
          handleReset={handleReset}
          userLocation={userLocation}
        />
      </main>

      <Footer />
    </div>
  );
}
