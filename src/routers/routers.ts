import React from "react";


const ProductNewAll = React.lazy(()=>import( '../pages/ProductNewAll/ProductNewAll'))
const HomePage = React.lazy(()=> import("../pages/HomePage/HomePage"));
const ProductFamal = React.lazy(()=> import("../components/ProductsNew/ProductFamale/ProductFamale"))
const ProductMale = React.lazy(()=> import("../components/ProductsNew/ProductMale/ProductMale"))
const ProductBaby = React.lazy(()=> import("../components/ProductsNew/ProductBaby/ProductBaby"))
const ProductsTshirt = React.lazy(()=> import("../components/ProductsMale/ProductsTshirt/ProductsTshirt"))
const ProductsShirt = React.lazy(()=> import("../components/ProductsMale/ProductsShirt/ProductsShirt"))
const ProductsCout = React.lazy(()=> import("../components/ProductsMale/ProductCout/ProductCout"))
const productsMaleAll = React.lazy(()=> import("../components/ProductsMale/ProductsMaleAll/ProductsMaleAll"))
const productsFamaleMunto = React.lazy(()=> import("../components/ProductsMenuFamale/ProductMuntoFamale"))
const productsFamalePants = React.lazy(()=> import("../components/ProductsMenuFamale/ProductPantsFamale"))
const productsFamaleSkirt = React.lazy(()=> import("../components/ProductsMenuFamale/ProductSkirtFamale"))
const productsFamaleAll= React.lazy(()=> import("../components/ProductsMenuFamale/ProductsFamaleAll"))
const productsBaby= React.lazy(()=> import("../components/ProductsMenuBaby/ProductBaby"))
const productsBabyJacket= React.lazy(()=> import("../components/ProductsMenuBaby/ProductBabyJacket"))
const productsBabyAll= React.lazy(()=> import("../components/ProductsMenuBaby/ProductBabyAll"))


export let routers = [
        {path:"/", exact:true, Component:HomePage},
        {path:"/newset", exact:true, Component:ProductNewAll},
        {path:"/newset/famale", exact:true, Component:ProductFamal},
        {path:"/newset/male", exact:true, Component:ProductMale},
        {path:"/newset/baby", exact:true, Component:ProductBaby},
        {path:"/maleAll", exact:true, Component:productsMaleAll},
        {path:"/male/Tshirt", exact:true, Component:ProductsTshirt},
        {path:"/male/shirt", exact:true, Component:ProductsShirt},
        {path:"/male/cout", exact:true, Component:ProductsCout},
        {path:"/famale/munto", exact:true, Component:productsFamaleMunto},
        {path:"/famale/pants", exact:true, Component:productsFamalePants},
        {path:"/famale/skirt", exact:true, Component:productsFamaleSkirt},
        {path:"/famaleAll", exact:true, Component:productsFamaleAll},
        {path:"/baby/babyDress", exact:true, Component:productsBaby},
        {path:"/baby/jacket", exact:true, Component:productsBabyJacket},
        {path:"/baby", exact:true, Component:productsBabyAll},

]