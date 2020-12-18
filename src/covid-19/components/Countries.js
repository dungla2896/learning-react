import React from 'react';
import { Row, Col, Table, Skeleton } from 'antd';
import MyContext from '../context/my-context';

const Countries = () => {
  const columns = [
    {
      title: 'Ngay',
      dataIndex: 'Date',
      key: 'Date'
    },
    {
      title: 'Quoc gia',
      dataIndex: 'Country',
      key: 'Country'
    },
    {
      title: 'Moi nhiem',
      dataIndex: 'NewConfirmed',
      key: 'NewConfirmed'
    },
    {
      title: 'Tong ca nhiem',
      dataIndex: 'TotalConfirmed',
      key: 'TotalConfirmed'
    },
    {
      title: 'Tu vong',
      dataIndex: 'NewDeaths',
      key: 'NewDeaths'
    },
    {
      title: 'Tong tu vong',
      dataIndex: 'TotalDeaths',
      key: 'TotalDeaths'
    },
    {
      title: 'Khoi benh',
      dataIndex: 'TotalDeaths',
      key: 'NewRecovered'
    },
    {
      title: 'Tong ca khoi benh',
      dataIndex: 'TotalRecovered',
      key: 'TotalRecovered'
    }
  ];
  return(
    <MyContext.Consumer>
      {context => {
        if(context.Countries === undefined){
          return <Skeleton active/>
        }
        return(
          <Row style={{marginTop:'20px', marginBottom:'20px'}}>
            <Col span={24}>
              <Table
                dataSource={context.Countries}
                columns={columns}
              />
            </Col>
          </Row>
        );
      }}
    </MyContext.Consumer>
  );
}
export default Countries;