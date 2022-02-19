import Head from "next/head";
import {useEffect, useState} from "react";
import Router, {useRouter} from "next/router";
import axios from "axios";
import {Card, Col, Row, Space, Typography, InputNumber, Statistic, Button} from "antd"
import Breadcrumbs from "../../../components/Breadcrumbs";
import SiteLayoutContent from '../../../components/SiteLayoutContent'
import styled from "styled-components";


const {Title, Text, Paragraph} = Typography

const ProductInfoWrapper = styled.div`
    flex: 1 !important;
`

const ProductTitle = styled(Typography.Paragraph).attrs({
    ellipsis: {rows: 2},
})`
  margin-top: .5rem;
`

export default function OrderPage() {
    let [productInfo, setProductInfo] = useState({})
    let [productQuantity, setProductQuantity] = useState(1)
    let [userProfile, setUserProfile] = useState({})
    let [userAddress, setUserAddress] = useState({})

    const router = useRouter()

    useEffect(() => {
        if (!router.isReady) return;
        axios({
            method: "get",
            url: 'http://192.168.0.113:8000/api/v1/product/' + router.query['SKU']
        }).then(response => {
            setProductInfo(response.data.products)
        }).catch(error => {
            if (error.response.status === 404)
                Router.push("/404")
        })
        axios({
            method: "get",
            url: 'http://192.168.0.113:8000/api/v1/user/2/address'
        }).then(response => {
            setUserAddress(response.data)
        }).catch(error => {
        })
        axios({
            method: "get",
            url: 'http://192.168.0.113:8000/api/v1/user/2/profile'
        }).then(response => {
            setUserProfile(response.data.profile)
        }).catch(error => {
        })
    }, [router.isReady])

    return (
        <div>
            <Head>
                <title>{productInfo.name}</title>
                <meta name="description" content=""/>
                <link rel="icon" href=""/>
            </Head>
            <Breadcrumbs path={[{name: "All products", href: "/"},
                {name: productInfo.name, href: "/product/" + router.query['SKU']},
                {name: "Order", href: ""},]}/>
            <SiteLayoutContent>
                <Row justify="start">
                    <Col sm={24} md={15} style={{padding: "1rem"}}>
                        <Card>
                            <Title level={3}>Shipping information</Title>
                            <Text>
                                <b>{userProfile.first_name} {userProfile.last_name} {userProfile.phone}</b><br/>
                                {userAddress.street} {userAddress.house}, {userAddress.apartment}<br/>
                                {userAddress.city}, {userAddress.region}, {userAddress.country}, {userAddress.zip_code}
                            </Text>
                        </Card>
                        <Card>
                            <Title level={3}>Order review</Title>
                            <Space style={{display: 'flex'}}>
                                <img src={productInfo.preview_image} style={{width: "5rem", height: "5rem"}}/>
                                <ProductInfoWrapper>
                                    <ProductTitle>{productInfo.name}</ProductTitle>
                                    <Title level={5}>€ {productInfo.price}</Title>
                                </ProductInfoWrapper>
                                <InputNumber size="medium" min={1} max={100000}
                                             defaultValue={1} value={productQuantity}
                                             onChange={e => setProductQuantity(e)}/>
                            </Space>
                        </Card>
                    </Col>
                    <Col sm={24} md={9} style={{padding: "1rem"}}>
                        <Card>
                            <Title level={3}>Order summary</Title>
                            <Statistic title="Total" value={productInfo.price*productQuantity} prefix="€ "/>
                            <Button type="primary" block style={{marginTop: "1rem"}}
                                    onClick={() => Router.push("/product/"+productInfo.SKU+"/order")}>
                                Go to the payment
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </SiteLayoutContent>
        </div>
    )
}