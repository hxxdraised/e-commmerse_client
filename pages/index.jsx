import Head from 'next/head'
import axios from "axios";
import Link from "next/link"
import {Breadcrumb, Layout, Typography, Row, Col} from "antd";
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
                <title>Каталог товаров</title>
                <meta name="description" content=""/>
                <link rel="icon" href=""/>
            </Head>
            <Breadcrumbs path={[{name: "Каталог", href: ""}]}/>
            <SiteLayoutContent>
                <Title level={2}>Каталог товаров</Title>
                <ProductsWrapper>
                    <Row justify="start">
                        {products.map(product => (
                            <Col sm={12} md={8} xl={6} style={{padding: "1rem"}} key={product.SKU}>
                                <Link href={"/product/" + product.SKU}>
                                    <a>
                                        <ProductCard
                                            productName={product.name}
                                            image={product.image}
                                            price={product.price}
                                            oldPrice={product.oldPrice}/>
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
