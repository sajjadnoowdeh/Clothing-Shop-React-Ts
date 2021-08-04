import React from "react";
const HomePage = React.lazy(()=> import("../pages/HomePage/HomePage"));
const ProductSinglePage= React.lazy(()=> import("../pages/ProductSinglePage/ProductSinglePage"))
const CategoryProducts = React.lazy(()=>import("../pages/CategoryProducts/CategoryProducts"))
export let routers = [
        {path:"/", exact:true, Component:HomePage},
        {path:"/category/:category_name", exact:true, Component:CategoryProducts},
        {path:"/suggest/:id", exact:true, Component:ProductSinglePage},
        {path:"/category/:category_name", exact:true, Component:CategoryProducts},



]