import React from 'react';
import importcss from 'importcss';
import {
  Card,
  CardBlock,
  CardFooter,
  CardTitle,
  CardText,
} from 'reactstrap';
import {
  Grid,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

import Component from 'lsk-general/General/Component';
import Slide from 'lsk-general/General/Slide';
import A from 'lsk-general/General/A';

@importcss(require('./HomePage.css'))
export default class HomePage extends Component {
  render() {
    return (
      <Slide
        full
        overlay
      >
        <Grid>
          <Row>
            <Col md={4} mdOffset={4}>
              <Card color="#FFF">
                <CardBlock>
                  <CardTitle>
                    Проект 0
                  </CardTitle>
                  Igor M.A.
                </CardBlock>
              </Card>
            </Col>
          </Row>
        </Grid>
      </Slide>
    );
  }
}
