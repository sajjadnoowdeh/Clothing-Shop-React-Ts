import React from "react";
import axios from "axios";
import {
  Container,
  Navbar,
  Badge,
  Nav,
  NavDropdown,
  Form,
  Row,
  Col,
  Button,
  Modal
} from "react-bootstrap";
import { BiShoppingBag, BiSearch } from "react-icons/bi";
import {FaRegUserCircle,FaRegUser} from "react-icons/fa";
import { MdExitToApp ,MdExpandMore} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { useHistory } from "react-router";
import { logoaut } from "../../Store/reducers/auth.reducer/auth.reducer";
import { getCategoryProductThunk, removeProductCard } from "../../Store/reducers/product.reducer/product.reducer";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsXCircle } from "react-icons/bs";
import CustomHookSearch from "./CustomHookSearch";
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { IProduct } from "../../interface";
import "./NavbarDress.style.scss";
export default function NavbarDress() {
  const {isLogin,username} = useSelector((state:RootState)=> state.reducer.auth)
  const cart = useSelector((state: RootState) => state.reducer.productsItems.cart );
  const {wishList} = useSelector((state:RootState)=>state.reducer.wishList)
  const [itemsSearch,setItemsSearch] = React.useState<IProduct[]>([])
  const [loading,setLoading] = React.useState<boolean>(false)
  const [error,setErorr] = React.useState<string>("");
  const [open, setOpen] = React.useState(false); 
  const [searchNav,setSeatchNav] = React.useState<string>("")
  const dispatch = useDispatch();
  const history = useHistory();
  const [totalPriceCart, setTotalPriceCart] = React.useState<any>();
  let modalCart = document.querySelector(".cart__modal");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDisplayModalCart = () => {
    modalCart?.classList.toggle("show-sub-nav");
  };
  React.useEffect(() => {
    modalCart?.classList.add("show-sub-nav");
    document.querySelector(".drop-down-profile")?.classList.add("show-sub-nav")
    document.querySelector(".arrow-top")?.classList.add("show-sub-nav")
   
  });
  const removeItemProduct = (id: number) => {
    dispatch(removeProductCard(id));
  };
  React.useEffect(() => {
    setTotalPriceCart(
      cart.reduce((prev, current: any) => prev + current.totalPrice, 0)
    );
  }, [cart]);

  const handleProfile = ()=>{
    document.querySelector(".drop-down-profile")?.classList.toggle("show-sub-nav")
    document.querySelector(".arrow-top")?.classList.toggle("show-sub-nav")
    document.querySelector(".arrow-top-username")?.classList.toggle("rotate_usrename")

  }
  const handleSearchNav =(e:React.ChangeEvent)=>{
    let inputEl = e.target as  HTMLInputElement;
    setSeatchNav(inputEl.value)
  }

  React.useEffect(()=>{
    const getSearchProducts= async ()=>{
      try {
          setLoading(true)
          let {data} = await axios.get(`/api/searchProduct?value=${searchNav}`)
          console.log(data);
          
          setItemsSearch(data)
      } catch (error) {
          setErorr(error.message)
      }finally{
          setLoading(false)
      }
      
  }
  if(searchNav !== ""){
    getSearchProducts();
    
  }
  if(searchNav === ""){
    setItemsSearch([])
  }
  },[searchNav])
 
  return (
    <>
    <Container className="navbar-dress py-4 d-flex align-items-center justify-content-between">
      <div className="order-lg-1 brand ">
        <Link
          to="/"
          className="d-flex justify-content-center justify-content-lg-end"
        >
          <img
            className="img-brand"
            src="https://www.banimode.com//themes/new/assets/images/banilogo.png"
            alt=""
          />{" "}
        </Link>
      </div>

      <div className="d-none d-lg-flex  align-items-center">
        <div>
          <Button
            onClick={handleDisplayModalCart}
            className="basket-btn"
            style={{ backgroundColor: "none" }}
          >
        
            <Badge className="count-shop">{cart.length}</Badge>
            <BiShoppingBag color="black" size={35} />
          </Button>

          <div className="cart__modal py-4">
            <Container>
              <div className="total__cart">
                <span> مبلغ قابل برداخت:</span>
                <span>{totalPriceCart} تومان </span>
              </div>
              {cart.length === 0 ? (
                <div
                  style={{ margin: "100px 0" }}
                  className="d-flex  flex-column justify-content-center align-items-center"
                >
                  <img
                    src="https://www.banimode.com/themes/new/assets/images/thank-unsucess.svg"
                    alt=""
                  />
                  <p className="my-2">سبد خرید شما خالی است</p>
                </div>
              ) : (
                cart.map((item) => (
                  <>
                    <div key={item.id} className="cart__item">
                      <Row>
                        <Col sm={4}>
                          <div className="w-100 img__cart my-4">
                            <img className="w-100" src={item.img} alt="" />
                            <BsXCircle
                              onClick={() => removeItemProduct(item.id)}
                            />
                            <div className="bg__img__cart"></div>
                          </div>
                        </Col>
                        <Col sm={8}>
                          <div className="desc__cart h-100 d-flex flex-column justify-content-evenly ">
                            <strong>{item.name}</strong>
                            <small> {item.type}</small>
                            <div>
                              <small
                                style={{
                                  borderLeft: "1px solid #6f7377",
                                  paddingLeft: "15px",
                                }}
                              >
                                سایز:‌ {item.size}
                              </small>
                              <small> تعداد :{item.count}</small>
                            </div>
                            <div className="d-flex justify-content-between">
                              {item.discount ? (
                                <>
                                  <strong>
                                    {item.discount &&
                                      item.price -
                                        (item.price * item.discount) / 100}{" "}
                                    تومان
                                  </strong>
                                  <small
                                    className="text-decoration-line-through ms-4"
                                    style={{ color: "#f37a23" }}
                                  >
                                    {item.price} تومان
                                  </small>
                                </>
                              ) : (
                                <small
                                  className=" ms-4"
                                  style={{ color: "#f37a23" }}
                                >
                                  {item.price} تومان
                                </small>
                              )}
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </>
                ))
              )}

              <div className="btn__cart">
                <Link to="/cart">
                  <button>مشاهده سبد خرید</button>
                </Link>
              </div>
            </Container>
          </div>
        </div>
        <Button
            onClick={()=>history.push("/wishlist")}
            className="wish-btn"
            style={{ backgroundColor: "none" }}
          >
        
            <Badge className="count-shop">{wishList.length}</Badge>
            <BiHeart fill={"black"} size={35}  />
          </Button>
     
        {
          (isLogin)
          ?
          <div className="d-flex align-center-center section-profile">
               <div onClick={handleProfile} className="profile d-flex align-items-center">
                    <FaRegUserCircle size={29}/>
                    <div className="me-2 mt-1"> {username.username}</div>
                    <MdExpandMore className="arrow-top-username" size={26}/>
               </div>

               <div className="drop-down-profile d-flex flex-column justify-content-around">
                  <div className="d-flex justify-content-between align-items-center" >
                      <FaRegUser fill={"#00bf6f"} size={25} />
                      <span>حساب کاربری</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center" onClick={()=>dispatch(logoaut())}> 
                      <MdExitToApp fill={"#ea6011"} size={25}/>
                      <span>خروج از حساب</span>
                  </div>
               </div>
                  <div className="arrow-top"></div>
          </div>
          
          :

          <Link to="/register">
            <div className="login d-flex align-items-center ms-2">
              <a className="text-decoration-none" href="#">
                {" "}
                ورود
              </a>
              <span className="px-1">/</span>
              <a className="text-decoration-none" href="#">
                ثبت نام
              </a>
            </div>
        </Link>
        }
        
        </div>
       

      <form className="d-none d-lg-flex" onClick={handleClickOpen}>
        <input
          type="text"
          className="input-nav"
          placeholder="جستجو در میان بیش از ۴۰۰ برند معتبر"
        />
        <BiSearch size={30} className="search-icon" />
      </form>
    </Container>
 
    <Dialog fullScreen open={open} onClose={handleClose} >
      <Container>
        <div className="d-flex sectoin-modal-nav">
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>

              <form className="d-none d-lg-flex form-modal" >
              <input
                onChange={(e)=>handleSearchNav(e)}
                type="text"
                className="input-nav-modal"
                placeholder="جستجو در میان بیش از ۴۰۰ برند معتبر"
              />
              <BiSearch  size={30} className="search-icon-modal" />
            </form>
        </div>


        <p>نتایج جستجو:</p>
        <Row className="p-3">
          {
            itemsSearch.map((item:IProduct)=>(
              <Col key={item.id} lg={3} className="d-flex flex-column mb-2">
                 <small className="mb-2"> <small className="search-text">  {searchNav} در</small> {item.type}</small>
              </Col>
            ))
          }
         
        </Row>
           
      </Container>
         
    </Dialog>

    </>
  );
}
