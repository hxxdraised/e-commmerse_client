import {Space, Typography} from "antd";
import styled from "styled-components";


const {Title, Text} = Typography

const Wrapper = styled(Space)`
  display: flex;
  margin: 1rem 0;

`

const Price = styled(Title).attrs({
    level: 2,
})`
  display: inline-block;
  margin: 0 !important;
`

export default function PriceBlock(props) {
    return (
        <Wrapper>
            <Price level={2}>€ {props.price}</Price>
            {props.oldPrice
                ? <Text delete style={{marginLeft: ".5rem"}}>€ {props.oldPrice}</Text>
                : ""
            }
        </Wrapper>
    )
}