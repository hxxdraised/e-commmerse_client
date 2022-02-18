import {Layout} from 'antd'
import styled from 'styled-components'
import PageHeader from "../components/PageHeader";


const {Content, Footer} = Layout

function MyApp({Component, pageProps}) {
    return (
        <Layout className="layout" style={{ minHeight: '100vh'}}>
            <PageHeader/>
            <Content style={{padding: '0 50px'}}>
                <Component {...pageProps} />
            </Content>
            <Footer style={{ textAlign: 'center'}}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    )
}

export default MyApp
