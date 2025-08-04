import axiosInstance from "./instance";
import AppError from "@/utils/appError";

const fetchData = async (endpoint: string, errorMsg: string, config = {}) => {
  try {
    const { data } = await axiosInstance.get(endpoint, config);
    return data?.data ?? [];
  } catch (error) {
    console.error("Fetch error at:", endpoint, error);
    throw new AppError(
      error instanceof Error ? error.message : errorMsg,
      500
    );
  }
};

export const getHomeData = () => fetchData("/home", "Failed to fetch home");
export const getSocial = () => fetchData("/social", "Failed to fetch social");
export const getFaq = () => fetchData("/faq", "Failed to fetch FAQ");
export const getSettingsData = () => fetchData("/settings", "Failed to fetch settings");
export const getWhyUsData = () => fetchData("/why-us", "Failed to fetch Why Us");
export const getMainPage = () => fetchData("/main-page", "Failed to fetch Why Us");
export const getServices = () => fetchData("/our-services", "Failed to fetch Why Us");
// export const getSections = () => fetchData("/main_bannerd", "Failed to fetch Why Us");

export const getSections = () => fetchData("", "Failed to fetch main page", {
  params: { banner_type: "main_bannerd" },
});

// export const getServiceBySlug = (slug: string) =>
//   fetchData(`/services/${slug}`, "Failed to fetch service");