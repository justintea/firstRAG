import NavbarOut from "../../components/0Navbar/NavbarOut/NavbarOut"
import React from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from "react-router-dom";
import PaintforhireForm from "../../components/1ServicesPage/PrayerInputForm";
import { Layout, Flex, Divider } from "antd";
const { Sider, Content } = Layout;
import { Outlet, useOutletContext } from "react-router-dom";



const { Meta } = Card;
const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '1750%',
  textAlign: 'center',
  background: 'black',
  // background: '#364d79',

};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% )",
  maxWidth: "calc(100% )",
};

const siderStyle = {
  textAlign: "left",
  justifyContent: "top",
  lineHeight: "25px",
  color: "black",
  backgroundColor: "white",
};

export default function LandingPageOut() {
  
  // maybe useeffect
  // with state change, render prayer 
  // 1 side form, the other side output 
  return (
    <>
      {/* <h1>Landing Page</h1> */}

      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          {/* <Header style={headerStyle}>Header</Header> */}
          <Layout>
          

            <Sider width="40%" style={siderStyle}>
            <Divider orientation="left" style={{margin: "0px" }}> <h2 style={{ fontFamily: 'Palatino Linotype'}}> Prayer input </h2> </Divider>

        
              <PaintforhireForm  />

            </Sider>
          </Layout>
          {/* <Footer style={footerStyle}>Footer</Footer> */}
        </Layout>
      </Flex>


    </>
  );
}
