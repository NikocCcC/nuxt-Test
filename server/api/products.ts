export default defineEventHandler((event) => {
  const getProduct = $fetch("https://dummyjson.com/products");
  return getProduct;
});
