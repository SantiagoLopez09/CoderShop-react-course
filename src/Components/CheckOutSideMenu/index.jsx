import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from "../../utils";
import "./styles.css";

const CheckOutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context. setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      dae: '01.01.2023',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
  }
  

  return (
    <aside
      className={`${
        context.isCheckoutSideMeuOpen ? 'flex' :' hidden'
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon 
          className="h-6 w-6 text-black cursor-pointer"
          onClick={() => context.closeCheckoutSideMeu()}></XMarkIcon>
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
      {
        context.cartProducts.map( product => (          
          <OrderCard 
            key ={product.id}
            id={product.id}
            title ={product.title} 
            imageUrl ={product.images} 
            price ={product.price} 
            handleDelete={handleDelete}
          />
        ))
      }
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='text-light '>Total:</span>
          <span className='text-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        <button className='bg-black py-3 text-white w-full rounded-lg ' onClick={() => handleCheckout()}>CheckOut</button>
      </div>
    </aside>
  );
};

export default CheckOutSideMenu;
