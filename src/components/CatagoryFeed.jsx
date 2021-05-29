import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AppCategories from '../data/AppCategories';
import GameCategories from '../data/GameCategories';

const CatagoryFeed = () => {
  return (
    <div className='category-feed'>
      <div className='select'>
        <select name='language'>
          <option value='all'>Language</option>
          <option value='english'>English</option>
          <option value='hindi'>Hindi</option>
        </select>
      </div>
      <h3>Categories</h3>
      <div>
        <h4>Apps</h4>
        <Row>
          {AppCategories.map((value, index) => {
            return (
              <Col lg={6} md={3} sm={4} xs={6} key={index}>
                <div className='category-card'>
                  <img src={value.img} alt={value.name} />
                  {value.name}
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <div>
        <h4>Games</h4>
        <Row>
          {GameCategories.map((value, index) => {
            return (
              <Col lg={6} md={3} sm={4} xs={6} key={index}>
                <div className='category-card'>
                  <img src={value.img} alt={value.name} />
                  {value.name}
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default CatagoryFeed;
