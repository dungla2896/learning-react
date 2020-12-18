import React from 'react';
import { Row, Col, Card, Skeleton } from 'antd';
import MyContext from '../context/my-context';

const Global = () => {
  return(
    <MyContext.Consumer>
      {context => {
        if(context.Global === undefined){
          return <Skeleton active />
        }
        return (
          <Row>
            <Col span={8}>
              <Card title="Nhiem benh" bordered={true}>
                <p>- Moi nhiem : {context.Global.NewConfirmed}</p>
                <p>- Tong ca nhiem : {context.Global.TotalConfirmed}</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Tu vong" bordered={true}>
                <p>- Moi tu vong : {context.Global.NewDeaths}</p>
                <p>- Tong ca tu vong : {context.Global.TotalDeaths}</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Khoi benh" bordered={true}>
                <p>- Moi khoi : {context.Global.NewRecovered}</p>
                <p>- Tong ca khoi : {context.Global.TotalRecovered}</p>
              </Card>
            </Col>
          </Row>
        );
      }}
    </MyContext.Consumer>
    
  )
}
export default Global;