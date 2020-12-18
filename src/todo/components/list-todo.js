import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, List, Checkbox, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Text } = Typography;

const ListTodo = (props) => {
  return (
    <Row style={{padding: '20px', border: '1px solid #ccc', backgroundColor:'white'}}>
      <Col span={24}>
          <List
            itemLayout="horizontal"
            dataSource={props.todo}
            renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Checkbox
                  onChange={() => props.finished(item.id)}
                  checked={item.done}
                ></Checkbox>}
                title={item.done ? (<Text delete mark>{item.name}</Text>) : (<Text>{item.name}</Text>)}
              />
              <div>
                <DeleteOutlined
                  onClick={() => props.delete(item.id)}
                />
              </div>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  )
}
ListTodo.propTypes = {
  todo: PropTypes.array.isRequired,
  delete: PropTypes.func.isRequired,
  finished: PropTypes.func
}
export default React.memo(ListTodo);