import ArtistInputForm from "../../components/1ServicesPage/ArtistInputForm";
import { Layout, Flex, Carousel, Divider } from "antd";
const { Sider, Content } = Layout;
import { Outlet, useOutletContext } from "react-router-dom";
import { useState } from "react";

const contentStyle = {
  textAlign: "center",
  minHeight: 570,
  lineHeight: "120px",
  // color: '#fff',
  // backgroundColor: '#0958d9',
  color: "black",
  backgroundColor: "#eae8f4",
  // width: '40%',
};

const siderStyle = {
  textAlign: "left",
  justifyContent: "top",
  lineHeight: "25px",
  color: "black",
  backgroundColor: "white",
  // width: '60%',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% )",
  maxWidth: "calc(100% )",
};

export default function LandingPageOut() {
  
  const [responseMessage, setResponseMessage] = useState("");

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  useOutletContext();

  return (
    <>
      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          <Layout>
            <Content style={contentStyle}>

            <Divider orientation="left" style={{ margin: "0px" }}> <h2 style={{ fontFamily: 'Palatino Linotype' }}> Artist input</h2> </Divider>
                <ArtistInputForm setResponseMessage={setResponseMessage} />
            </Content>

            <Sider width="55%" style={siderStyle}>
            <Divider orientation="left" style={{margin: "0px" }}> <h2 style={{ fontFamily: 'Palatino Linotype'}}> Key things you need to know before attending the concert</h2> </Divider>
              {/* <p style={{margin: '0 0 0 2%'}}> insert Json stringify here </p> */}
              {/* <p style={{margin: '0 0 0 2%'}}> {JSON.stringify(responseMessage.responseData)} </p> */}

                {/* Render the JSON response with formatting */}
                {/* <pre style={{ margin: '0 0 0 2%' }}>
                {JSON.stringify(responseMessage.responseData, null, 2)}
              </pre> */}

              {/* <div style={{ margin: '0 0 0 2%' }}>
                {responseMessage.responseData && responseMessage.responseData.choices &&
                  responseMessage.responseData.choices[0] &&
                  responseMessage.responseData.choices[0].message &&
                  responseMessage.responseData.choices[0].message.content}
              </div> */}

              {/* <div style={{ margin: '0 0 0 2%' }}>
                {responseMessage.responseData && responseMessage.responseData.content}
              </div> */}

              <div style={{ margin: '0 0 0 2%', whiteSpace: 'pre-wrap' }}>
    {responseMessage.responseData && responseMessage.responseData.content}
  </div>

            </Sider>
          </Layout>
        </Layout>
      </Flex>
    </>
  );
}
