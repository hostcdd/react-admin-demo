import React, { Fragment,useState } from 'react';
import { Form, Input, Select, Button, Table, Tag, Space } from 'antd';
const { Option } = Select;

function User() {
    const onFinish = (values) => {
        console.log('Received values from form: ', values);
      };
    
      const checkPrice = (rule, value) => {
        if (value > 0) {
          return Promise.resolve();
        }
    
        return Promise.reject('必须大于0');
      };

      const dataSource = [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ];
      
      const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
      ];

    return (
        <Fragment>
            <Form
                name="customized_form_controls"
                layout="inline"
                onFinish={onFinish}
                >
                <Form.Item
                    name="userName"
                    label="用户名"
                >
                <Input />
                </Form.Item>
                <Form.Item
                    name="age"
                    label="年龄"
                    rules={[
                    {
                        validator: checkPrice,
                    },
                    ]}
                >
                <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">查询</Button>
                    <Button className='ml-10'>重置</Button>
                </Form.Item>
            </Form>

            <Table dataSource={dataSource} columns={columns} />
        </Fragment>
        
    )
}

export default User
