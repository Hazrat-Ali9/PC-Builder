import Categories from "../Categories/Categories";
import Product from "./Product";

function ProductFeed({ products, categories }) {
  const { data: productsData, isLoading: productsIsLoading } = products;
  const { data: categoriesData, isLoading: categoriesIsLoading } = categories;

  let content = null;

  if (productsIsLoading) {
    content = <p>Loading...</p>;
  }

  if (!productsIsLoading && productsData.length > 0) {
    content = productsData?.slice(0,8)?.map(
      ({
        id,
        productName,
        price,
        description,
        category,
        image,
        status,
        reviews,
      }) => (
        <Product
          key={`product-${id}`}
          id={id}
          productName={productName}
          price={price}
          description={description}
          category={category}
          image={image}
          status={status}
          reviews={reviews}
        />
      )
    );
  }

  return (
    <div className="w-full py-20 px-6 bg-gray-100 mt-10" id="products-feed">
      <Categories categories={categoriesData} />
      <h2 className="text-center capitalize text-2xl font-semibold ">
        Featured Products
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Check & Get Your Desired Product!
      </p>
      <div className="grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 mx-auto max-w-screen-xl gap-x-6 gap-y-8">
        {content}
      </div>
    </div>
  );
}

export default ProductFeed;
