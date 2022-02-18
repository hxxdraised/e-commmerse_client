import Head from 'next/head'
import axios from "axios";
import {useEffect, useState} from 'react';
import {Typography, Row, Col, Button, Divider, Card, Rate} from "antd";
import styled from "styled-components";
import {useRouter} from "next/router";
import SiteLayoutContent from '../../components/SiteLayoutContent'
import Breadcrumbs from "../../components/Breadcrumbs";


const {Title, Text, Paragraph} = Typography

export default function ProductPage() {
    let [productInfo, setProductInfo] = useState([])
    const router = useRouter()

    useEffect(() => {
        if (!router.isReady) return;
        axios({
            method: "get",
            url: 'http://192.168.0.113:8000/api/v1/product/' + router.query['SKU']
        }).then(response => {
            setProductInfo(response.data.products)
            console.log(response.data.products)
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
                {name: productInfo.name, href: ""},]}/>
            <SiteLayoutContent>
                <Row justify="start" align="middle">
                    <Col sm={24} md={13} lg={12} xl={10} style={{padding: "1rem"}}>
                        <img src={productInfo.preview_image} style={{width: "100%", height: "auto"}}/>
                    </Col>
                    <Col sm={24} md={11} lg={12} xl={14} style={{padding: "1rem"}}>
                        <Title level={3}>{productInfo.name}</Title>
                        <Rate disabled/><Text>  | 0 Reviews</Text>
                        {productInfo.old_price
                            ? <Title level={2}><Text delete>€ {productInfo.old_price}</Text>  € {productInfo.price}</Title>
                            : <Title level={2}>{productInfo.price}</Title>}
                        <Row style={{marginBottom: "1rem"}}>
                            <Col span={14} style={{paddingRight: "1rem"}}>
                                <Button type="primary" block>Order now</Button>
                            </Col>
                            <Col span={10} style={{paddingRight: "1rem"}}>
                                <Button block>Add to cart</Button>
                            </Col>
                        </Row>
                        <Text>{productInfo.stock} piece in stock</Text>
                        <Divider />
                        <Card>
                            <Text>
                                <b>Free</b> shipping to all countries<br/>
                                Delivery from 10 to 45 days
                            </Text>
                        </Card>
                        <Card>
                            <Text><b>{productInfo.warranty_period} months</b> warranty</Text><br/>
                            <Text>
                                + <b>{productInfo.warranty_extension_period} months</b> warranty
                                <Title level={3}>for € {productInfo.warranty_extension_price}</Title>
                            </Text>
                        </Card>
                    </Col>
                </Row>
                <Divider />
                <Title level={3}>Product description</Title>
                <Paragraph ellipsis={{rows: 3, expandable: true, symbol: 'more'}}>
                    {productInfo.description}
                </Paragraph>
            </SiteLayoutContent>

        </div>
    )
}