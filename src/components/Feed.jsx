import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppFeed from './AppFeed';
import CatagoryFeed from './CatagoryFeed';

const Feed = () => {
  return (
    <Container fluid className='feed'>
      <Row>
        <Col lg={{ order: 'last', span: 3 }}>
          <CatagoryFeed />
        </Col>
        <Col lg={9} md={12}>
          <AppFeed />
        </Col>
      </Row>
    </Container>
  );
};

export default Feed;
