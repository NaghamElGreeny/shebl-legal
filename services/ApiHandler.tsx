import axiosInstance from "./instance";
import AppError from "../utils/appError";

// export const getServiceBySlug = async (slug: string) => {
//   try {
//     const { data } = await axiosInstance.get(`/services/${slug}`);

//     return data.data;
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new AppError(error.message, 500);
//     } else {
//       throw new AppError("Field to fetch home", 500);
//     }
//   }
// };

const fetchData = async (endpoint: string, errorMsg: string) => {
  try {
    const { data } = await axiosInstance.get(endpoint);
    return data.data;
  } catch (error) {
    throw new AppError(
      error instanceof Error ? error.message : errorMsg,
      500
    );
  }
};

// 🔽 Exported API Functions
export const getHomeData = () => fetchData("/home", "Failed to fetch home");

export const getAboutData = () => fetchData("/about", "Failed to fetch about");

export const getSettingsData = () =>
  fetchData("/settings", "Failed to fetch settings");
export const getFaqData = () =>
  fetchData("/faq", "Failed to fetch Faq");

// export const getServiceBySlug = (slug: string) =>
//   fetchData(`/services/${slug}`, "Failed to fetch service");

// export const getContactData = () =>
//   fetchData("/contact", "Failed to fetch contact");

// export const getPortfolioData = () =>
//   fetchData("/portfolio", "Failed to fetch portfolio");

// export const getTeamData = () =>
//   fetchData("/team", "Failed to fetch team members");

// export const getHomeData = async () => {
//   try {
//     const { data } = await axiosInstance.get("/home");

//     return data.data;
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new AppError(error.message, 500);
//     } else {
//       throw new AppError("Field to fetch home", 500);
//     }
//   }
// };
// export const getAboutData = async () => {
//   try {
//     const { data } = await axiosInstance.get("/about");

//     return data.data;
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new AppError(error.message, 500);
//     } else {
//       throw new AppError("Field to fetch home", 500);
//     }
//   }
// };
// export const getSettingsData = async () => {
//   try {
//     const { data } = await axiosInstance.get("/settings");

//     return data.data;
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new AppError(error.message, 500);
//     } else {
//       throw new AppError("Field to fetch home", 500);
//     }
//   }
// };

// export const getCategoriesData = async () => {
//   try {
//     const { data } = await axiosInstance.get("/categories");
//     return data?.data || [];
//   } catch {
//     throw new CustomError("Failed to fetch Categories data", 500, "APIError");

//   }
// };

// export const getShareData = async () => {
//   return await axiosInstance.get("/relations");
// };

// export const getSettingsData = async () => {
//   return await axiosInstance.get("/settings");
// };

// export const getTermsData = async () => {
//   return await axiosInstance.get(`/term`);
// };

// export const getPrivacyData = async () => {
//   return await axiosInstance.get(`/policy`);
// };
