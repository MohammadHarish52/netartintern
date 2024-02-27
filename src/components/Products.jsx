import { productData } from "../Constants/productData";

const Products = () => {
  return (
    <div className="Products">
      <h3>C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
      <div className="products_container">
        {productData.map((data) => (
          <div className="product" key={data.id}>
            <p>{data.title}</p>
            <p>|</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
