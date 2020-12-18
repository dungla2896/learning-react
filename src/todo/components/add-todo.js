import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Input} from 'antd';

const { Search } = Input;

const AddTodo = (props) => {
  return(
    <Row style={{marginTop:'15px', marginBottom:'5px'}}>
      <Col span={24}>
        <Search
          placeholder="todo name ..."
          enterButton="Add"
          size="large"
          onSearch={value => props.add(value)}
          onChange={props.change}
          value={props.value}
        />
      </Col>
    </Row>
  );
}
AddTodo.propTypes = {
  add: PropTypes.func.isRequired,
  change: PropTypes.func,
  value: PropTypes.string
}
export default React.memo(AddTodo);