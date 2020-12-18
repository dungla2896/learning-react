import React from 'react';
import { Row, Col } from 'antd';

const PaymentOrders = () => {
    return(
        <>
            <Row>
                <Col span={18} offset={3}>
                    <h1 style={{textAlign: 'center'}}>Payment</h1>
                    <Row>
                        <Col span={12}>
                            <p>Yeu cau nhap dia chi giao hang</p>
                            <p>Nhap ghi chu giao don hang (tinh lai tong tien)</p>
                            <p>Chon phuong thuc thanh toan</p>
                        </Col>
                        <Col span={12}>
                            <p>Hien thi thong tin gio hang</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default React.memo(PaymentOrders);