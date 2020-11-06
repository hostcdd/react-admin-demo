import React from 'react'
import qs from 'qs'
import { Descriptions } from 'antd';

function Editor(props) {
    let parm = props.location.search.replace(/\?/g,'');
    let parmObj = qs.parse(parm);

    return (
        <Descriptions title={parmObj.name || 'xx'+'详情'}>
            <Descriptions.Item label="名称">{parmObj.name}</Descriptions.Item>
            <Descriptions.Item label="数量">{parmObj.num}</Descriptions.Item>
            <Descriptions.Item label="编号">1810000000</Descriptions.Item>
            <Descriptions.Item label="备注">empty</Descriptions.Item>
            <Descriptions.Item label="生产地址">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
        </Descriptions>
    )
}

export default Editor
