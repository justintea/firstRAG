import { Button, Form, Input, Select, Space } from "antd";
const { Option } = Select;
import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

export default function ArtistInputForm({ user, setUser, setResponseMessage }) {

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const [form] = Form.useForm();
  const Navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);
    let concertValuesArray = values; 
    console.log('this is values: ', values);
    console.log('this is valuesArray: ', concertValuesArray);
    console.log(user);

    if (user === null) {
      localStorage.setItem("data1Key", JSON.stringify(concertValuesArray));
      console.log(localStorage);
      //! stay on the page, upon click
      // Navigate('/login');      //* head to loginPage to login
  
      //* postlogin 
      } else {
      localStorage.setItem("data1Key", JSON.stringify(concertValuesArray));
      console.log(localStorage);
      //! stay on the page, upon click
      // Navigate('/user/cart');
      }

    //! next time this should be at prayerService & prayerAPI files
    try {
      const response = await fetch("/api/sendData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
         //! stay on the page, upon click
        console.log('Response is ok');
        const responseData = await response.json();
        // Handle success, e.g., navigate to the output page
        // setResponseMessage(responseData.message);
        setResponseMessage(responseData);

        // // Handle success, e.g., navigate to the output page
        // Navigate("/user/cart");
      } else {
        // Handle error
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }

    
  }


  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
        
        <Form.Item
        name="favArtist"
        label="Artist"
        style={{ width: "85%" , margin: '0 0 5% 8.5%'}}
        rules={[
          {
            required: true,
            message: "Who will be performing?",
          },
        ]}
      >
          <Input  />
        </Form.Item>

      <Form.Item
        name="favSong"
        label="Favourite song"
        style={{ width: "85%" , margin: '0 0 5% 8.5%'}}
        rules={[
          {
            required: true,
            message: "What is your favourite song from the artist?",
          },
        ]}
        >
        <Input  />
      </Form.Item>
      
      <Form.Item
        name="performanceLocation"
        label="Concert location"
        style={{ width: "85%" , margin: '0 0 5% 8.5%'}}
        rules={[
          {
            required: true,
            message: "Where will the concert be held?",
          },
        ]}
        >
        <Input  />
      </Form.Item>

        
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" style={{ backgroundColor: "#01628f" , margin: "0  0 0 60%" }} htmlType="submit">
            Generate guide
          </Button>
        </Space>
      </Form.Item>
    </Form>

    </>
  );
}
