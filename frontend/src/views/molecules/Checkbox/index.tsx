import React, { FC, forwardRef } from 'react';
import { Input } from 'views/atoms';
import { CheckboxMolecule } from './Checkbox.interface';
import { Label } from 'views/atoms';

const Checkbox: FC<CheckboxMolecule> = forwardRef(
  ({ label, children, ticked = false, p, mx, ...props }, ref) => (
    <Label p={p} mx={mx}>
      <Input
        display="none"
        type="checkbox"
        defaultChecked={true}
        ref={ref}
        {...props}
      >
        {children}
      </Input>
      <span>{label}</span>
    </Label>
  ),
);

export default Checkbox;
