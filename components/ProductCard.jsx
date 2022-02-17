import {Card} from "antd";
import Link from "next/link"
import {ShoppingCartOutlined} from '@ant-design/icons'
import styled from 'styled-components'

const {Meta} = Card

const Wrapper = styled(Card).attrs({
    hoverable: true,
    actions: [
        <Link href="/404">
            <ShoppingCartOutlined/>
        </Link>],
})`
  margin: auto;
`

export default function ProductCard(props) {
    return (
        <Wrapper cover={<img src={props.image}/>}>
            <Meta title={props.productName}/>
        </Wrapper>
    )
}