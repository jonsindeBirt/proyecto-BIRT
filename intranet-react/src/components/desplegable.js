import React from 'react';
import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';

function Desple() {
    return (
  <div className="col-4">
        <ButtonGroup vertical>
      
        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
          <Dropdown.Item style={{background: "red"}} eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
  </div>   

    );
  }
  export default Desple;
