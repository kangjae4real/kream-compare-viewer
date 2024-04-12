import { axios } from "@/apis/client";
import { ProductResponse } from "@/types/product";
import { AxiosResponse } from "axios";

export const getProduct = async (id: number): Promise<AxiosResponse<ProductResponse>> => {
  return await axios.get<ProductResponse>(`/sites/${id}`);
};
