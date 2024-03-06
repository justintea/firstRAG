import { Button, Form, Input, Select, Space } from "antd";
const { Option } = Select;
import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

export default function PaintforhireForm({ user, setUser }) {

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

  const onFinish = (values) => {
    console.log("Success:", values);

    //*state of prelogin Form is passed in 'values'
    //* write in manner that groups them in Array of arrays, by the 3 services 

    let prayerValuesArray = values; 
  
    console.log('this is values: ', values);
    console.log('this is valuesArray: ', prayerValuesArray);
    console.log(user);

    //! Let's see if this works. regardless of user= or != null, use LocalStorage to handle formData

    if (user === null) {
      localStorage.setItem("data1Key", JSON.stringify(prayerValuesArray));
      console.log(localStorage);
      Navigate('/login');      //* head to loginPage to login
  
      //* postlogin 
      } else {
      localStorage.setItem("data1Key", JSON.stringify(prayerValuesArray));
      console.log(localStorage);
      Navigate('/user/cart');
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
      {/* <Form.Item
        name="numberOfModels"
        label="Number of models   "
        style={{ width: "85%" , margin: '0 0 5% 8.5%'}}
        rules={[
          {
            required: true,
            message: "Please input the number of models you require painting.",
          },
        ]}
      >
          <Input  />
        </Form.Item> 
        
        <Form.Item
        name="urgencyRequired"
        label="Urgency"
        rules={[
          {
            required: true,
            message: "Please choose from: Urgent (1-3 days), Normal (1-3 weeks), Relaxed (1 month+). Charges apply accordingly.",
          },
        ]}
      >
        <Select
          placeholder="Select a option"
          onChange={onUrgencyChange}
          allowClear
          style={{ width: "85%", margin: '0 0 1% 5%' }}
        >
          <Option value="Urgent">Urgent</Option>
          <Option value="Normal">Normal</Option>
          <Option value="Relaxed">Relaxed</Option>
        </Select>
      </Form.Item>
        */}
        
        <Form.Item
        name="userPersona"
        label="User persona"
        style={{ width: "85%" , margin: '0 0 5% 8.5%'}}
        rules={[
          {
            required: true,
            message: "Please input what your role is.",
          },
        ]}
      >
          <Input  />
        </Form.Item>

      <Form.Item
        name="userTask"
        label="Task"
        style={{ width: "85%" , margin: '0 0 5% 8.5%'}}
        rules={[
          {
            required: true,
            message: "What is the task you want suggestions on?",
          },
        ]}
        >
        <Input  />
      </Form.Item>
      
      <Form.Item
        name="todaysVerses"
        label="Relevant verses"
        style={{ width: "85%" , margin: '0 0 5% 8.5%'}}
        rules={[
          {
            required: true,
            message: "Input an anchor verse",
          },
        ]}
        >
        <Input  />
      </Form.Item>

      <Form.Item
        name="todaysLearnings"
        label="Learnings"
        style={{ width: "85%" , margin: '0 0 5% 8.5%'}}
        rules={[
          {
            required: true,
            message: "What are the main learnings today?",
          },
        ]}
        >
                    <Input  />

      </Form.Item>
      
      <Form.Item
        name="todaysMaterials"
        label="Materials"
        style={{ width: "85%" , margin: '0 0 5% 8.5%'}}
        rules={[
          {
            required: true,
            message: "What book or materials did the group or you use today?",
          },
        ]}
        >
                    <Input  />

      </Form.Item>
        
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" style={{ backgroundColor: "#01628f" , margin: "0  0 0 113%" }} htmlType="submit">
            Generate
          </Button>
        </Space>
      </Form.Item>
    </Form>

    </>
  );
}
