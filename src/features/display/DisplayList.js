import { Col, Row, Card, CardBody, CardHeader } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';
import DisplayOverview from './DisplayOverview';

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
          <Col>
            {/* <DisplayCard item={item} /> */}
            <DisplayOverview item={item} />
          </Col>
        );
      })}
    </Row>
  );
};
export default DisplayList;
