import HomePage from "../pages/HomePage/HomePage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import OrderPages from "../pages/OrderPages/OrderPages"
import ProductPages from "../pages/ProductPages/ProductPages"

 export const routes = [
    {
       path: "/",
       page: HomePage,
       isShowHeader: true
    },
    {
        path: "/orders",
        page: OrderPages,
        isShowHeader: true
     },
     {
        path: "/products",
        page: ProductPages,
        isShowHeader: true
     },
     {
      path: "*",
      page: NotFoundPage,
    }
]