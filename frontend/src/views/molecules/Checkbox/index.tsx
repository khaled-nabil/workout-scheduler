import React, { FC, useState } from 'react';
import { Input } from 'views/atoms';
import { CheckboxMolecule } from './Checkbox.interface';
import { Label } from 'views/atoms';

const Checkbox: FC<CheckboxMolecule> = ({
  label,
  onChange,
  children,
  ticked = false,
  ...props
}) => {
  const [checked, setChecked] = useState(ticked);
  const handleClick = () => {
    setChecked((state) => !state);
  };
  const { p, mx, ...otherProps } = props;
  return (
    <Label variant={checked} p={p} mx={mx}>
      <Input
        display="none"
        type="checkbox"
        defaultChecked={checked}
        onClick={handleClick}
        onChange={onChange}
        {...otherProps}
      >
        {children}
      </Input>
      <span>{label}</span>
    </Label>
  );
};

export default Checkbox;
