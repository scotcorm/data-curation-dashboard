import {
  Card,
  CardHeader,
  Col,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

const DisplayOverview = ({ item }) => {
  const { image, name, description } = item;
  return (
    <Card>
      {/* <CardImg src={image} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody> */}

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
    </Card>
  );
};

export default DisplayOverview;
