import Head from 'next/head'
import axios from "axios";
import Link from "next/link"
import {Layout, Typography, Row, Col} from "antd";
import {useEffect, useState} from 'react';
import styled from "styled-components";
import SiteLayoutContent from '../components/SiteLayoutContent'
import ProductCard from '../components/ProductCard'
import Breadcrumbs from "../components/Breadcrumbs";


const {Title} = Typography

const ProductsWrapper = styled(Layout)`
  display: flex;
  background: #fff;
`

export default function Home() {
    let [products, setProducts] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url: 'http://192.168.0.113:8000/api/v1/product/'
        }).then(response => {
            setProducts(response.data.products)
            console.log(response.data.products)
        })
    }, [])

    return (
        <div>
            <Head>
                <title>All products</title>
                <meta name="description" content=""/>
                <link rel="icon" href=""/>
            </Head>
            <Breadcrumbs path={[{name: "All products", href: ""}]}/>
            <SiteLayoutContent>
                <Title level={2}>All products</Title>
                <ProductsWrapper>
                    <Row justify="start">
                        {products.map(product => (
                            <Col sm={12} md={8} xl={6} style={{padding: "1rem"}} key={product.SKU}>
                                <Link href={"/product/" + product.SKU}>
                                    <a>
                                        <ProductCard
                                            productName={product.name}
                                            image={product.preview_image}
                                            price={product.price}
                                            oldPrice={product.old_price}/>
                                    </a>
                                </Link>
                            </Col>
                        ))}
                    </Row>

                </ProductsWrapper>

            </SiteLayoutContent>
        </div>
    )
}
