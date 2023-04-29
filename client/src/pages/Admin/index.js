import React, { useEffect } from 'react'
import Header from '../../components/Header'
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { Tabs } from 'antd'
import { useSelector } from 'react-redux';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact'
const { TabPane } = Tabs;

function Admin() {
    const { portfolioData } = useSelector((state) => state.root);

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            window.location.href = '/admin-login';
        }
    }, [])

    return (
        <div>
            <Header />
            <div className='flex gap-10 items-center px-5 py-2 justify-between'>
                <div className='flex gap-10 items-center'>
                    <h1 className='text-2xl m-5 text-primary'>Portfolio Admin</h1>
                </div>
                <div>
                    <div className='underline text-primary text-xl cursor-pointer'
                        onClick={() => {
                            localStorage.removeItem('token');
                            window.location.href = '/admin-login';
                        }}>Logout</div>
                </div>
            </div>
            {portfolioData && <div className='mt-5 p-5'>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Intro" key={1}>
                        <AdminIntro />
                    </TabPane>
                    <TabPane tab="About" key={2}>
                        <AdminAbout />
                    </TabPane>
                    <TabPane tab="Experiences" key={3}>
                        <Experiences />
                    </TabPane>
                    <TabPane tab="Projects" key={4}>
                        <Projects />
                    </TabPane>
                    <TabPane tab="Contact" key={5}>
                        <Contact />
                    </TabPane>
                </Tabs>
            </div>
            }
        </div>
    )
}

export default Admin