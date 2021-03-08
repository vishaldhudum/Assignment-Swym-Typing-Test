import React from 'react';

import Form from "react-bootstrap/Form";

export default function SelectDropdown(props) {
  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Control
        as="select"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        <option
          key="default"
          value={0}
        >
          Select
        </option>
        {
          props.options.map((option) => {
            return (
              <option
                key={option.label}
                value={option.value}
              >
                {option.label}
              </option>
            )
          })
        }
      </Form.Control>
    </Form.Group>
  );
}