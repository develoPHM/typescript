interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}
//
// // 상품 목룍을 받아오기 위한 api 함수
// function fetchProducts(): Promise<Product[]> {
//   //.
// }
//
// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }
//
// type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
//
// function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {
// }

interface UpdateProduct {
  id?: number;
  name?: string;
  price?: number;
  brand?: string;
  stock?: number;
}

// 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>

function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {
}

// 특정 상품 정보를 업데이트(갱신)하는 함수
type UpadateProduct = Partial<Product>
function updateProductItem(productItem: Partial<Product>) {

}