import { useState, useEffect } from "react";
import { axiosInstance } from "../../../api/axios";
import { Study } from "../../../types/study";

export const useStudyList = (category: string) => {
  const [studies, setStudies] = useState<Study[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get("/study/", {
          params: { category: category !== "all" ? category : undefined },
        });
        setStudies(response.data.results); // results 배열로 수정
      } catch (err) {
        setError("스터디 목록을 불러오는 데 실패했습니다.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudies();
  }, [category]);

  return { studies, isLoading, error };
};
