import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';

import {Header, Container, Sidebar, Segment, Button, Icon, Image, Menu} from 'semantic-ui-react';
import {Bar} from './components/Layouts/'
const styles = {
  App: {
    height: "100vh"
  },
  MenuToggle: {
    padding: "1em 1em",
    margin: "1em 1em",
    width: "50%"
  }

}
class App extends Component {
  state = { visible: false}

  toggleVisible = () => this.setState({visible: !this.state.visible})

  render() {
    const { visible } = this.state;
    return (
      <Router>
      <div className="App" style={styles.App}>
         
      <Sidebar.Pushable as={Segment}>
 
      <Bar visible={visible} />
        <Sidebar.Pusher>
          <Segment basic>
            <Header as='h1' dividing>Andrew C. Thompson's Portfolio</Header>
          </Segment>
          <Container>

          </Container>
         <Button style={styles.MenuToggle} onClick={this.toggleVisible} primary round>
            Toggle Menu
        </Button> 
        </Sidebar.Pusher>
      </Sidebar.Pushable>
        </div>
      </Router>
    );
  }
}

export default App;
