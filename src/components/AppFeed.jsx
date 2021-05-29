import React, { useEffect, useState } from 'react';
import { DropdownButton, Dropdown, Row, Col } from 'react-bootstrap';
import AppData from '../data/AppData';
import { AiFillStar, AiOutlineDownload, AiOutlineFund } from 'react-icons/ai';
import { MdClearAll } from 'react-icons/md';
const AppFeed = () => {
  const [country, setCountry] = useState('all');
  const [category, setCategory] = useState('all');
  const [type, setType] = useState('all');

  const handleSelectChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    if (fieldName === 'countries') {
      setCountry(fieldValue);
    } else if (fieldName === 'categories') {
      setCategory(fieldValue);
    } else if (fieldName === 'type') {
      setType(fieldValue);
    } else {
      setCountry('all');
      setCategory('all');
      setType('all');
    }
  };

  const clearFilter = () => {
    setCountry('all');
    setCategory('all');
    setType('all');
  };

  useEffect(() => {
    console.log(country, category, type);
  }, [country, category, type]);

  return (
    <div className='app-feed'>
      <div className='catagory-wrapper'>
        <div className='categories'>
          <div className='select'>
            <select name='countries' onChange={(e) => handleSelectChange(e)}>
              <option value='all'>Countries</option>
              <option value='India'>India</option>
              <option value='US'>United States</option>
            </select>
          </div>
          <div className='select'>
            <select name='categories' onChange={(e) => handleSelectChange(e)}>
              <option value='all'>Categories</option>
              <option value='App'>Apps</option>
              <option value='Game'>Games</option>
            </select>
          </div>
          <div className='select'>
            <select name='type' onChange={(e) => handleSelectChange(e)}>
              <option value='all'>Type</option>
              <option value='Android'>Android</option>
              <option value='IOS'>IOS</option>
            </select>
          </div>
        </div>
        <button onClick={clearFilter}>
          <MdClearAll className='icon' />
          Clear Filters
        </button>
      </div>
      <div className='filters'>
        <h3>Top Charts</h3>
        <div className='sort'>
          <DropdownButton
            id='dropdown-basic-button'
            title='Sort By'
            variant='secondary'
          >
            <Dropdown.Item>
              <AiOutlineDownload className='icon' />
              Downloads
            </Dropdown.Item>
            <Dropdown.Item>
              <AiFillStar className='icon' />
              Ratings
            </Dropdown.Item>
            <Dropdown.Item>
              <AiOutlineFund className='icon' />
              Popularity
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className='app-bucket'>
        <Row>
          {AppData.filter(
            (value) =>
              value.country.includes(country) &&
              value.category.includes(category) &&
              value.type.includes(type)
          ).map((value, index) => {
            const downloads = value.downloads;
            const downloadLength = downloads.toString().length;
            const downloadsToDisplay =
              downloadLength > 3
                ? `${Math.round(downloads / 1000)}K`
                : downloads;

            const ratings = value.ratings;
            const ratingLength = ratings.toString().length;
            const ratingsToDisplay =
              ratingLength > 3 ? `${Math.round(ratings / 1000)}K` : ratings;

            return (
              <Col lg={3} md={4} sm={6} xs={6} key={index}>
                <div className='app-card'>
                  <div
                    className='image'
                    style={{ backgroundImage: `url(${value.img})` }}
                  ></div>
                  <h4>{value.name}</h4>
                  <p className='text-primary'>{value.developer}</p>
                  <div className='ratings'>
                    <div>
                      <AiFillStar className='icon' />
                      <AiFillStar className='icon' />
                      <AiFillStar className='icon' />
                      <AiFillStar className='icon' />
                      <AiFillStar className='icon' />
                    </div>
                    <div>{ratingsToDisplay}</div>
                  </div>
                  <button>
                    <AiOutlineDownload className='icon' />
                    Download
                  </button>
                  <div className='downloads'>
                    <p>{value.size} MB</p>
                    <p>
                      <AiOutlineDownload className='icon' />
                      {downloadsToDisplay}
                    </p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default AppFeed;
