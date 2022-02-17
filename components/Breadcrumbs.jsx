import {Breadcrumb} from "antd";
import Link from "next/link"

export default function Breadcrumbs(props) {
    return (
        <Breadcrumb style={{margin: '16px 0'}}>
            {props.path.map(item => (
                <Breadcrumb.Item key={item.link}>
                    <Link href={item.href}>
                        <a>
                            {item.name}
                        </a>
                    </Link>
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    )
}