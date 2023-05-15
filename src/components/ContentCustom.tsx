import React from 'react';
import {Breadcrumb, theme} from "antd";
import { Content } from 'antd/es/layout/layout'
import TaskList from "./TaskList";
import TaskStore from "./TaskStore";
const ContentCustom = (props: any) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return(
        <Content style={{ margin: '0 16px' }}>]
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            </div>
        </Content>
    );
};

export default ContentCustom;
