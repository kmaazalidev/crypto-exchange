import { Col, Row } from 'antd';
import Navbar from './Navbar';
function Home(){
    return(
        <Row>
            <Col span={8}></Col>
            <Col span={8}>
            <Navbar/>
            </Col>
            <Col span={8}></Col>
        </Row>
    )
}

export default Home;