import Banner from "@/components/Banner/Banner";
import ProductFeed from "@/components/Product/ProductFeed";
import { wrapper } from "@/redux/app/store";
import categoriesApi from "@/redux/features/categories/categoriesApi";
import productApi from "@/redux/features/product/productApi";

export default function Home({ products, categories }) {
  return (
    <>
      <Banner />
      <ProductFeed products={products} categories={categories} />
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const products = await store.dispatch(
    productApi.endpoints.getProducts.initiate()
  );

  const categories = await store.dispatch(
    categoriesApi.endpoints.getCategories.initiate()
  );

  return {
    props: {
      products,
      categories,
    },
  };
});
