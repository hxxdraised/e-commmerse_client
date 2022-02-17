import styled from "styled-components";
import {Layout} from "antd";

const Wrapper = styled(Layout)`
  min-height: 280px;
  padding: 24px;
  background: #fff;
`

export default function SiteLayoutContent(props){
    return(
        <Wrapper>{props.children}</Wrapper>
    )
}