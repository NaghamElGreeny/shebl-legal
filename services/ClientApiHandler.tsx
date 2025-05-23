"use client";
import AppError from "../utils/appError";
import axiosInstance from "./axiosClient";
import type { ServicesResponse } from "../types";
export const getAllServices = async () => {
  return await axiosInstance
    .get("/our-services")
    // .get("/our-features")
    .then((res) => res.data.data)
    .catch(() => []);
};
export const getFaq = async () => {
  return await axiosInstance
    .get("/faq")
    .then((res) => res.data.data)
    .catch(() => []);
};
export const getSocial = async () => {
  return await axiosInstance
    .get("/social")
    .then((res) => res.data.data)
    .catch(() => []);
};
export const getPrivacy = async () => {
  return await axiosInstance
    .get("/privacy")
    .then((res) => res.data.data)
    .catch(() => []);
};
export const getTerms = async () => {
  return await axiosInstance
    .get("/terms")
    .then((res) => res.data.data)
    .catch(() => []);
};
// export const getMainPage = async () => {
//   return await axiosInstance
//     .get("/main_bannerd")
//     .then((res) => res.data.data)
//     .catch(() => []);
// };
export const getMainPage = async () => {
  try {
    const { data } = await axiosInstance.get("", {
      params: {
        banner_type: "main_bannerd",
      },
    })
    return data || [];
  } catch {
    throw new AppError("Failed to fetch why-us data ,NAghamm", 500);
  }
};


export const getWhyUsData = async () => {
  try {
    const { data } = await axiosInstance.get("/why-us");
    return data || [];
  } catch {
    throw new AppError("Failed to fetch why-us data ,NAghamm", 500);
  }
};

// export const getCategoryData = async (id: number) => {
//   try {
//     const { data } = await axiosInstance.get(`/categories?category_id=${id}`);
//     return data?.data || [];
//   } catch {
//     throw new AppError("Failed to fetch Category data", 500);
//   }
// };
// export const getProductsByCategory = async (id: number, params: any) => {
//   console.log("🚀 ~ getProductsByCategory ~ params:", params);
//   try {
//     const { data } = await axiosInstance.get(`/products`, {
//       params: { category_id: id, ...params },
//     });
//     return data || [];
//   } catch (error) {
//     console.error("Error fetching products by category:", error);
//     return [];
//   }
// };

// export const getSortData = async () => {
//   try {
//     const { data } = await axiosInstance.get(`/sort`);
//     return data || [];
//   } catch {
//     throw new CustomError("Failed to fetch Sort data", 500, "APIError");
//   }
// };

