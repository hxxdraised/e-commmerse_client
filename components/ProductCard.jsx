import {Button, Card, Typography} from "antd";
import Router from 'next/router'
import {ShoppingCartOutlined} from '@ant-design/icons'
import styled from 'styled-components'

const {Meta} = Card
const {Text, Paragraph} = Typography

const Wrapper = styled(Card).attrs({
    hoverable: true,
})`
  position: relative;
  height: 100%;
  margin: auto;
  padding-bottom: 1.5rem;
`

const Price = styled(Typography.Title).attrs({
    level: 4,
})`
  display: inline-block;
  margin: 0 !important;
`

const ProductTitle = styled(Typography.Paragraph).attrs({
    ellipsis: {rows: 2},
})`
  margin-top: .5rem;
`

const CartButton = styled(Button).attrs({
    type: "primary",
})`
  margin: 1rem 0;
  position: absolute;
  bottom: 0;
`

//<img src={props.image}/>
export default function ProductCard(props) {
    return (
        <Wrapper cover={<img src={props.image}/>}>
            <Price>€ {props.price}</Price>
            {props.oldPrice
                ? <Text delete style={{marginLeft: ".5rem"}}>€ {props.oldPrice}</Text>
                : ""
            }
            <ProductTitle>{props.productName}</ProductTitle>
            <CartButton onClick={() => Router.push("/404")}>
                <ShoppingCartOutlined/> Shop now
            </CartButton>
        </Wrapper>
    )
}