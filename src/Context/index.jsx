import { createContext, useState, useEffect} from "react";

export const ShoppingCartContext = createContext();

export const initializeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem('account')
  const signoutInLocalStorage = localStorage.getItem('sign-out')
  let parsedAccount
  let parsedSignOut

  if (!accountInLocalStorage){
    localStorage.setItem('account', JSON.stringify([]))
    parsedAccount={}
  }else{
    parsedAccount =JSON.parse(accountInLocalStorage)
  }

  if(!signoutInLocalStorage){
    localStorage.setItem('sign-out', JSON.stringify(false))
    parsedSignOut= false
  }else{
    parsedSignOut= JSON.parse(signoutInLocalStorage)
  }
}

export const ShoppingCartProvider = ({ children }) => {
  
  // My Account
  const [account, setAccount] = useState([])
  
  // Signo Out
  const [signOut, setSignOut] = useState(false)
  
  // Shopping Cart - Increment Quantity
  const [count, setCount] = useState(0);
  
  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  
  // CheckOut side Menu - Open/Close
  const [isCheckoutSideMeuOpen, setIsCheckoutSideMeuOpen] = useState(false);
  const openCheckoutSideMeu = () => setIsCheckoutSideMeuOpen(true);
  const closeCheckoutSideMeu = () => setIsCheckoutSideMeuOpen(false);

  // Product Detail - Show Product
  const [productToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  });

  // Shopping Cart - Add Products to Cart
  const [cartProducts, setCartProducts] = useState([])

// Shopping Cart - Order
  const [order, setOrder] = useState([])

// Get products
const [items, setItems] = useState(null)
const [filteredItems, setFilteredItems] = useState(null)

// Get products by titles
const [searchByTitle, setSearchByTitle] = useState(null)

// Get products by Category
const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(() => {
    fetch ('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data =>  setItems(data))
  }, []) 

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }
  
  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])


  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMeuOpen,
        openCheckoutSideMeu,
        closeCheckoutSideMeu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
<<<<<<< HEAD
        setSearchByCategory,
        account,
        setAccount,
        signOut,
        setSignOut,
=======
        setSearchByCategory
>>>>>>> e2ef58b7835872b874b97bc2a319405729ac01c2
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};