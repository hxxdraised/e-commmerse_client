import Link from 'next/link'
import {Layout, Menu} from 'antd';
import styled from 'styled-components'
import {UserOutlined, InboxOutlined, ShoppingCartOutlined} from '@ant-design/icons'

const Header = Layout.Header

const LogoWrapper = styled.div`
  float: left;
  width: 6rem;
  height: 4rem;
  margin: 0 3rem;
`
const LogoImg = styled.img`
  max-width: 100%;
`
const HeaderMenu = styled(Menu).attrs({
    mode: "horizontal",
    theme: "light"
})`
  float: right;
`

export default function PageHeader() {
    return (
        <Header>
            <LogoWrapper>
                <Link href="/">
                    <LogoImg src="https://www.pngitem.com/pimgs/b/285-2856889_placeholder-png.png"/>
                </Link>
            </LogoWrapper>
            <HeaderMenu>
                <Menu.Item><UserOutlined /></Menu.Item>
                <Menu.Item><InboxOutlined /></Menu.Item>
                <Menu.Item><ShoppingCartOutlined/></Menu.Item>
            </HeaderMenu>
        </Header>
    )
}