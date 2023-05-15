import React from 'react';
import { Layout } from 'antd';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeaderCustom from './components/HeaderCustom';
import MenuCustom from './components/MenuCustom';
import ContentCustom from './components/ContentCustom';
import Home from './components/Home';
import About from './components/About';
import TaskList from "./components/TaskList";

const { Header, Content, Sider } = Layout;

const App = () => {
    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <HeaderCustom />
                <Layout>
                    <MenuCustom />
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Layout>
            </Layout>
        </Router>
    );
};

export default App;
