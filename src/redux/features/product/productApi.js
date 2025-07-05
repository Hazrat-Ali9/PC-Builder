import { apiSlice } from "../api/apiSlice";
// product api
const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export default productApi;
export const { useGetProductsQuery } = productApi;
