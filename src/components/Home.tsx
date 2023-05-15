// components/Home.tsx
import React from 'react';
import TaskList from "./TaskList";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";


const Home = () => {
    return (
        <Layout>
            <Content>
                <TaskList />
            </Content>
        </Layout>
    );
};
export default Home;