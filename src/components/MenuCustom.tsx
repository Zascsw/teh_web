import {Menu, MenuProps, theme} from "antd";
import React, {useState} from 'react';
import Sider from 'antd/es/layout/Sider'
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    to: string,
    key: JSX.Element,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key: to,
        icon,
        children,
        label: <Link to={to}>{label}</Link>,
    } as MenuItem;
}


const items: MenuItem[] = [
    getItem('Home', 'home', <PieChartOutlined />),
    getItem('About', 'about', <DesktopOutlined/>),
];




const MenuCustom = () => {

    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    );
};
export default MenuCustom;