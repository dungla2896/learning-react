import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button} from 'antd';

const FinishedAndDeleteAllTodo = (props) => {
  return(
    <>
      <Row style={{marginTop: '5px', marginBottom: '5px'}}>
        <Col span={24}>
          <Button 
            type="dashed"
            onClick={() => props.action('finishedAll')}
          >Finished All</Button>
          <Button
            type="dashed"
            onClick={() => props.action('deleteAll')}
            style={{marginLeft: '10px', marginRight: '10px'}}
          >Delete All</Button>

          {props.show && (<Button type="dashed" onClick={() => props.action('unfinishedAll')}>Unfinished All</Button>)}
          
        </Col>
      </Row>
    </>
  )
}
FinishedAndDeleteAllTodo.propTypes = {
  action: PropTypes.func.isRequired
}
export default React.memo(FinishedAndDeleteAllTodo);