import { FETCH_CURRENCY_INFORMATION } from "@/commons/contants";
import { CurrencyItem } from "@/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://interview.switcheo.com'

export const useFetchCurrencyInformation = (
  options?: Partial<UseQueryOptions>
) => {
  return useQuery({
    ...options,
    queryKey: [FETCH_CURRENCY_INFORMATION],
    queryFn: async () => {
      try {
        const response = await axios.get<CurrencyItem[]>(
          `${BASE_URL}/prices.json`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching currency information:", error);
        throw new Error("Failed to fetch currency information");
      }
    },
  });
};
