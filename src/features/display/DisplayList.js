import { Col, Row, Card, CardBody, CardHeader } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
  const items = [
    selectFeaturedCampsite(),
    selectFeaturedPromotion(),
    selectFeaturedPartner(),
  ];

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          <Col sm='4'>
            {/* <DisplayCard item={item} /> */}

            <Col>
              <Card>
                <CardHeader className='bg-primary text-white'>
                  <h3>Facts at a Glance</h3>
                </CardHeader>
                <CardBody>
                  <dl className='row'>
                    <dt className='col-6'>Founded</dt>
                    <dd className='col-6'>February 3, 2016</dd>
                    <dt className='col-6'>No. of Campsites in 2019</dt>
                    <dd className='col-6'>563</dd>
                    <dt className='col-6'>No. of Reviews in 2019</dt>
                    <dd className='col-6'>4388</dd>
                    <dt className='col-6'>Employees</dt>
                    <dd className='col-6'>42</dd>
                  </dl>
                </CardBody>
              </Card>
            </Col>
          </Col>
        );
      })}
    </Row>
  );
};
export default DisplayList;
