import React,{useEffect,useState} from 'react'
import { Table, Tag, Space } from 'antd';

function List(props) {
    const columns = [
        {
          title: '商品名称',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: '数量',
          dataIndex: 'num',
          key: 'num',
        },
        {
          title: '生产地址',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '标签',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a onClick={() => {props.history.push('/admin/editor?name='+record.name+'&num='+record.num)}}>查看 {record.name}</a>
              <a>删除</a>
            </Space>
          ),
        },
      ];
      
    const initTableData = [
        {
          key: '1',
          name: '头盔',
          num: 32,
          address: '哈雷',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: '餐箱',
          num: 42,
          address: 'xx生产',
          tags: ['loser'],
        },
        {
          key: '3',
          name: '电动车',
          num: 32,
          address: '雅迪',
          tags: ['cool', 'teacher'],
        },
      ];

    const [tableData,setTableData] = useState(initTableData)
    const [total,setTotal] = useState(0)
    
    useEffect(() => {
        //初始化请求数据，axios
        // setTableData(res.data.list)
    },[])



    
      return (
        <div>
           <Table columns={columns} dataSource={tableData} />
        </div>
    )
}

export default List
