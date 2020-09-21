import React, { FC, useState } from 'react';
import { Input } from 'views/atoms';
import { CheckboxMolecule } from './Checkbox.interface';
import { Label } from 'views/atoms';

const Checkbox: FC<CheckboxMolecule> = ({ label, children, ...props }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((state) => !state);
  };
  const { p, mx, ...otherProps } = props;
  return (
    <Label variant={checked} p={p} mx={mx}>
      <Input
        display="none"
        type="checkbox"
        defaultChecked={checked}
        onClick={handleChange}
        {...otherProps}
      >
        {children}
      </Input>
      <span>{label}</span>
    </Label>
  );
};

export default Checkbox;
