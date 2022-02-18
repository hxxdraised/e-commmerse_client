import {Layout} from 'antd'
import Link from 'next/link'
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
                My puper ©2022 Created by
                <Link href="http://t.me/hoodraised_dust"> hxxdraised </Link>
                with Ant Design
            </Footer>
        </Layout>
    )
}

export default MyApp
