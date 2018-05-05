import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Sidebar, Menu, Icon, Segment} from 'semantic-ui-react';

export default class Bar extends Component {
    render(){
        const {visible} = this.props;
    return (
    
      <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
        <Menu.Item as={NavLink} to="/" name='home'>
          <Icon name='home' />
          About
        </Menu.Item>
        <Menu.Item as={NavLink} to="/portfolio" name='folder'>
          <Icon name='folder' />
          Portfolio
        </Menu.Item>
        <Menu.Item as={NavLink} to="/contact" name='phone'>
          <Icon name='phone' />
            Contact
        </Menu.Item>
      </Sidebar>
     
    )    }

}