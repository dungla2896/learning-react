import React, {useEffect, useState} from 'react';
import { Row, Col, Card, Skeleton, Button, Pagination } from 'antd';
import { api } from '../../service/api';

const { Meta } = Card;
const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setListUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [pervious, showPrevious] = useState(false);
  const [next, showNext] = useState(false);
  const [totalItems, setTotalItems] = useState(1);

  useEffect(()=>{
    const getData = async () => {
      // call data tu api
      await setLoading(true);
      const listUsers = await api.getDataUsers(page);
      if(listUsers){
        await setListUsers(listUsers.data);
        await setTotalPage(listUsers.total_pages);
        await setTotalItems(listUsers.total);
        await setLoading(false);

        // can kiem tra page
        if(page < 1){
          setPage(1);
        } else if(page > listUsers.total_pages) {
          setPage(listUsers.total_pages);
        }

        // check viec hien thi nut previous
        if(page > 1 && page <= listUsers.total_pages){
          showPrevious(true);
        } else {
          showPrevious(false);
        }
        // check viec hien thi nut next
        if(page < listUsers.total_pages && page >= 1){
          showNext(true);
        } else {
          showNext(false);
        }
      }
    }
    getData();
  }, [page]); // muon su dung nhu la componentDidMount hay nhu la ComponentDidUpDate

  const perviousAndNextPage = (type) => {
    if(type === 'previous'){
      if(page > 1){
        setPage(page - 1);
      }
    } else if(type === 'next'){
      if(page < totalPage){
        setPage(page + 1);
      }
    }
  }

  const changePage = (currentPage) => {
    setPage(currentPage);
  }

  if(loading || users.length === 0){
    return (<Skeleton active />);
  }

  return (
    <>  
      <Row style={{marginTop: '20px', marginBottom: '20px'}}>
      {users.map((item, index) => (
        <Col span={8} key={index}>
          <Card
            hoverable
            style={{ width: 220 }}
            cover={<img alt={item.email} src={item.avatar} />}
          >
          <Meta title={item.first_name} description={item.email} />
          </Card>
        </Col>
      ))}
      </Row>
      <Row style={{marginTop: '20px', marginBottom: '60px', textAlign: 'center'}}>
        <Col span={12} offset={6}>
          {pervious && (<Button
            onClick={() => perviousAndNextPage('previous') }
            type="primary">Previous</Button>)}

          {next && (<Button
            onClick={() => perviousAndNextPage('next') }
            type="primary"
            style={{marginLeft: '10px'}}>Next</Button>)}
        </Col>
      </Row>

      <Row style={{marginTop: '20px', marginBottom: '60px', textAlign: 'center'}}>
        <Col span={24}>
          <Pagination
            current={page} 
            pageSize={3}
            total={totalItems}
            onChange={(currentPage) => changePage(currentPage)}
          />
        </Col>
      </Row>
    </>
  )
}
export default React.memo(Users);