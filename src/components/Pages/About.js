import React, {Component} from 'react';
import {Segment, Header, Card} from 'semantic-ui-react';
const styles = {
  padding: '1em 1em',
  margin: '1em 1em'
};

export default class About extends Component {
  render() {
    return (
      <Card style={styles}>
        <Card.Header as="h3" content="About" dividing />

      </Card>
    );
  }
}
