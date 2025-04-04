import { keepPreviousData, useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import Ingredient from "../entities/Ingredient";

const apiClient = new APIClient<Ingredient>("/ingredients");

const useIngredients = () => {
  return useQuery({
    queryKey: ["ingredients"],
    queryFn: () => apiClient.getAll({ params: {} }).then((res) => {
      if (res && res.data) {
        return res.data;
      }
      return [];
    }),
    staleTime: 24 * 60 * 60 *
1000, // 24 horas
    placeholderData: keepPreviousData,
  });
};

export default useIngredients;
