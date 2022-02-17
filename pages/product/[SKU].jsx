import Head from 'next/head'
import axios from "axios";
import {useEffect, useState} from 'react';
import {Typography} from "antd";
import styled from "styled-components";
import {useRouter} from "next/router";
import SiteLayoutContent from '../../components/SiteLayoutContent'
import Breadcrumbs from "../../components/Breadcrumbs";


const {Title} = Typography

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
            <Breadcrumbs path={[{name: "Каталог", href: "/"},
                                {name: productInfo.name, href: ""},]}/>
            <SiteLayoutContent>
                <Title>{productInfo.name}</Title>
            </SiteLayoutContent>

        </div>
    )
}