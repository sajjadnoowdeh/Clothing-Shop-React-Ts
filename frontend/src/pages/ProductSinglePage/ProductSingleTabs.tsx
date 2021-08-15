import React from "react";
import { Tabs, Tab, Table } from "react-bootstrap";
import "./ProductSinglePage.style.scss";
const ProductSingleTabs = () => {
  const [key, setKey] = React.useState<any>("home");
  return (
    <div className="tab-single my-5 lists-tabs">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 d-flex justify-content-start"
        style={{ margin: 0, padding: 0 }}
        onSelect={(k) => setKey(k)}
        activeKey={key}
      >
        <Tab eventKey="home" title="ویژگی ها" className="py-4 px-3 ">
          <ul>
            <li>
              <span>جنس الیاف: </span> <small> 100% نخ پنبه</small>
            </li>
            <li>
              <span>نرمی و زبری:</span> <small>نرم</small>
            </li>
            <li>
              <span>جزئیات مدل:</span> <small>لباس مدل ساده ای دارد.</small>
            </li>
            <li>
              <span>قد لباس:</span>{" "}
              <small>مناسب سایز M، در حدود 64 سانتی متر</small>
            </li>
          </ul>
        </Tab>
        <Tab eventKey="مشخصات محصول" title="مشخصات محصول" className="py-4 px-3 ">
          <Table striped bordered hover>
           
            <tbody>
              <tr>
              
                <td>کد محصول</td>
                <td>LCW-1S66502</td>
             
              </tr>
              <tr>
          
                <td>یقه</td>
                <td>گرد</td>
        
              </tr>
              <tr>
              
                <td>آستین  </td>
                <td>کوتاه</td>
              </tr>
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="نظرات کاربران" title="نظرات کاربران" className="py-4 px-3 ">
          asdf
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductSingleTabs;
