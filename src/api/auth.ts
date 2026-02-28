import { axiosInstance } from './axios';

// 백엔드로 보낼 데이터 타입
export interface LoginRequest {
    email: string;
    password: string;
}

// 백엔드에서 받을 데이터 타입 (토큰)
export interface LoginResponse {
    access_token: string;
    refresh_token: string;
    user: {
        pk: number;
        email: string;
        uid: string;
    };
}
export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await axiosInstance.post<LoginResponse>('/accounts/login/', data);
    return response.data;
};