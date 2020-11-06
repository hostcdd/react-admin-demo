import React from 'react'
import { Result, Button } from 'antd';

function Notfind(props) {
    return (
        <Result
            status="404"
            title="404"
            subTitle="抱歉，你访问的页面不存在"
            extra={<Button type="primary" onClick={() => {props.history.push("/admin/list");}}>回到首页</Button>}
        />
    )
}

export default Notfind
