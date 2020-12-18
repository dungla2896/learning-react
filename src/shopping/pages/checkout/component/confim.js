import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const ComfirmOrder = () => {
    return(
        <>
            <Row>
                <Col span={18} offset={3}>
                    <h1 style={{textAlign: 'center'}}>COnfirm Order</h1>
                    <Row>
                        <Col span={12}>
                            <p>Vui long dien thong tin ben duoi</p>
                        </Col>
                        <Col span={12}>
                            <p>Neu co TK vui long <Link to="/login">dang nhap</Link></p>
                            <p>Hien thi thong tin cac san pham trong gio hang</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default React.memo(ComfirmOrder);