import axios from "axios";
import { type Photo } from "../types/photo";

const API_KEY = import.meta.env.VITE_PEXELS_TOKEN;
const API_URL = 'https://api.pexels.com/v1/search';

interface PhotoHttpResponse {
    page: number;
    photos: Photo[];
    per_page: number;
    total_results: number;
}

export const getPhotos = async (query:string, page: number):Promise<PhotoHttpResponse> => {
    const response = await axios.get<PhotoHttpResponse>(API_URL, {
        params: {
            query,
            page,
            orientation: 'landscape',
        },
        headers: {
            accept: 'application/json',
            Authorization: API_KEY,
        }
    });
    return response.data;
}