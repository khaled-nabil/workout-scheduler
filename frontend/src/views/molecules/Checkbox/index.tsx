import React, { FC, useState } from 'react';
import { Input } from 'views/atoms';
import { CheckboxMolecule } from './Checkbox.interface';
import { Label } from 'views/atoms';

const Checkbox: FC<CheckboxMolecule> = ({ label, children, ...props }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((state) => !state);
  };
  return (
    <Label variant={checked}>
      <Input
        display="none"
        type="checkbox"
        defaultChecked={checked}
        onClick={handleChange}
        {...props}
      >
        {children}
      </Input>
      <span>{label}</span>
    </Label>
  );
};

export default Checkbox;
