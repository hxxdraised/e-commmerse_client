import styled from "styled-components";
import {Layout} from "antd";

const Wrapper = styled(Layout)`
  padding: 24px;
  background: #fff;
  @media (min-width: 768px) {
    padding: 3rem 3rem;
  }
`

export default function SiteLayoutContent(props){
    return(
        <Wrapper>{props.children}</Wrapper>
    )
}