import React from "react";
const HomePage = React.lazy(()=> import("../pages/HomePage/HomePage"));
const ProductSinglePage= React.lazy(()=> import("../pages/ProductSinglePage/ProductSinglePage"))
const CategoryProducts = React.lazy(()=>import("../pages/CategoryProducts/CategoryProducts"))
const CategoryProductsMobile = React.lazy(()=>import("../pages/CategoryProductsMobile/CategoryProductMobile"))
const NotFoundPage = React.lazy(()=>import("../pages/NotFoundPage/NotFoundPage"))
const CartPage = React.lazy(()=>import("../pages/CartPage/CartPage"))
const Login = React.lazy(()=>import("../pages/Login/Login"))

export let routers = [
        
        {path:"/", exact:true, Component:HomePage},
        {path:"/login", exact:true, Component:Login},
        {path:"/cart", exact:true, Component:CartPage},
        {path:"/categoryMobile", exact:true, Component:CategoryProductsMobile},
        {path:"/category/:category_name/", exact:true, Component:CategoryProducts},
        {path:"/category/:category_name/:id", exact:true, Component:ProductSinglePage},
        {path:"*", exact:true, Component:NotFoundPage},


]