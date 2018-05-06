import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Header, Sidebar, Segment, Button} from 'semantic-ui-react';

import {MenuBar, SwitchContainer} from './components/Layouts/';

const styles = {
  App: {
    height: '100vh',
  },
  Content : {
    padding: '1em 1em',
    margin: '1em 1em',
    position: 'relative',
    top: '60px'
    // width: '50%',
  },
};

// style={styles.MenuToggle}

class App extends Component {
  state = {visible: false};
  toggleVisible = () => this.setState({visible: !this.state.visible});

  render() {
    const {visible} = this.state;
    return (
      <Router>
        <Segment.Group className="App" style={styles.App}>
          <Segment attached>
            <Header as="h1">
              Andrew Thompson's Portfolio
            </Header>
          </Segment>

          <Sidebar.Pushable as={Segment}>
            <MenuBar visible={visible} />
            <Sidebar.Pusher>
              <SwitchContainer />
              <Button style={styles.Content} icon={visible ? "chevron left" : "chevron right"} onClick={this.toggleVisible} size="tiny" />
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Segment.Group>
      </Router>
    );
  }
}

export default App;
