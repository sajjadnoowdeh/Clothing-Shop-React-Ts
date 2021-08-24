import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products } from "../../../Data/Data";
import { getCategoryProduct } from "./product.api";
import {
  getProductsLowest,
  getProductsHighest,
  getProductsHighestDiscount,
  getProductsDefaultSort,
  handleSearch,
  handleFilterBrand,
  handleFiltersizing,
  handleFiltersizingALl
} from "./product.api";

import { IProduct } from "../../../interface";
interface IState {
  cart: IProduct[];
  productsCategory: any;
  productsData: IProduct[];
  loading: boolean;
  error: string | undefined;
}
let init: IState = {
  cart: [],
  productsCategory: [],
  productsData: products,
  loading: false,
  error: "",
};

// action thunk get categorys
export const getCategoryProductThunk = createAsyncThunk(
  "productReducer",
  async (category: string) => {
    try {
      let data = await getCategoryProduct(category);
      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// action thunk get categorys lowest
export const handleDataLowestThunk = createAsyncThunk(
  "productReducer/lowest",
  async (category_name: string) => {
    try {
      let data = await getProductsLowest(category_name);
      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
// action thunk get categorys highest
export const handleDataHighestThunk = createAsyncThunk(
  "productReducer/highest",
  async (category_name: string) => {
    try {
      let data = await getProductsHighest(category_name);
      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// action thunk get categorys highest discount
export const handleDataHighestDiscountThunk = createAsyncThunk(
  "productReducer/highestDescount",
  async (category_name: string) => {
    try {
      let data = await getProductsHighestDiscount(category_name);
      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// action thunk get default
export const handleDefaultSortThunk = createAsyncThunk(
  "productReducer/defaultSort",
  async (category_name: string) => {
    try {
      let data = await getProductsDefaultSort(category_name);
      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// action thunk get default
export const handleSearchThunk = createAsyncThunk(
  "productReducer/search",
  async (payload: { value: string; category: string }) => {
    try {
      let data = await handleSearch(payload.value, payload.category);
      console.log(data);

      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// action thunk filter brand
export const handleFilterBrandThunk = createAsyncThunk(
  "productReducer/brand",
  async (payload: { filtered: string; category: string }) => {
    console.log(payload);

    try {
      let data = await handleFilterBrand(payload.filtered, payload.category);
      console.log(data);

      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// action thunk filter sizeing
export const handleFilterSizingThunk = createAsyncThunk(
  "productReducer/sizing",
  async (payload: { filteredSize: string, category: string }) => {
    console.log(payload);

    try {
      let data = await handleFiltersizing(
        payload.filteredSize,
        payload.category
      );
      console.log(data);

      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
);


//action thunk filter sizeing
export const handleAllSizingThunk = createAsyncThunk(
    "productReducer/sizingAll",
    async (payload: { filtered: string,filteredSize:string, category: string }) => {
      console.log(payload);
  
      try {
        let data = await handleFiltersizingALl(
          payload.filtered,
          payload.filteredSize,
          payload.category
        );
        console.log(data);
  
        return data;
      } catch (error) {
        throw error.response.data;
      }
    }
  );

const productReducer = createSlice({
  name: "productReducer",
  initialState: init,
  reducers: {
    productChangeClickImg: (state, action: PayloadAction<number>) => {
       state.productsCategory = state.productsCategory.map((item:IProduct,index:number)=> item.id === action.payload ? {...item,img:item.subImg} : item)
    },
    productChangeClickSubImg: (state, action: PayloadAction<{id:number,category:string}>) => {
      state.productsCategory = state.productsData.filter((item)=>item.category === action.payload.category).map((item:IProduct,index:number)=> item.id === action.payload.id ? {...item,img:item.img} : item)
    },
    //  sort category products
    sortByLowest: (state, action: PayloadAction<any>) => {
      state.productsCategory = action.payload;
    },

    //  add To Cart
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    updateCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, count: item.count + 1 } : item
      );
    },
    updateCountCard: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, count: item.count + 1 } : item
      );
    },
    updateTotalCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              totalPrice: item.discount
                ? (item.price - (item.price * item.discount) / 100) * item.count
                : item.price * item.count,
            }
          : item
      );
    },
    updateCountMinusCard: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, count: item.count - 1 } : item
      );
    },
    removeProductCard: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    checkCountCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, count: 1 } : item
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCategoryProductThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCategoryProductThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.productsCategory = action.payload;
    });
    builder.addCase(getCategoryProductThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // sort lowest
    builder.addCase(handleDataLowestThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleDataLowestThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.productsCategory = action.payload;
    });
    builder.addCase(handleDataLowestThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // sort highest

    builder.addCase(handleDataHighestThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleDataHighestThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.productsCategory = action.payload;
    });
    builder.addCase(handleDataHighestThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // sort highest Discount

    builder.addCase(handleDataHighestDiscountThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(
      handleDataHighestDiscountThunk.fulfilled,
      (state, action) => {
        state.loading = false;
        state.productsCategory = action.payload;
      }
    );
    builder.addCase(
      handleDataHighestDiscountThunk.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }
    );

    // sort default

    builder.addCase(handleDefaultSortThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleDefaultSortThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.productsCategory = action.payload;
    });
    builder.addCase(handleDefaultSortThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(handleSearchThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleSearchThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.productsCategory = action.payload;
    });
    builder.addCase(handleSearchThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(handleFilterBrandThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleFilterBrandThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.productsCategory = action.payload;
    });
    builder.addCase(handleFilterBrandThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(handleFilterSizingThunk.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(handleFilterSizingThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.productsCategory = action.payload;
      });
      builder.addCase(handleFilterSizingThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });


      builder.addCase(handleAllSizingThunk.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(handleAllSizingThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.productsCategory = action.payload;
      });
      builder.addCase(handleAllSizingThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {
  productChangeClickImg,
  productChangeClickSubImg,
  addToCart,
  updateCart,
  updateCountCard,
  updateCountMinusCard,
  checkCountCart,
  removeProductCard,
  updateTotalCart,
} = productReducer.actions;
export default productReducer.reducer;
