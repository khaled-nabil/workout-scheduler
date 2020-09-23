import React, { FC, forwardRef, useState } from 'react';
import { Input } from 'views/atoms';
import { CheckboxMolecule } from './Checkbox.interface';
import { Label } from 'views/atoms';

const Checkbox: FC<CheckboxMolecule> = forwardRef(
  (
    { label, children, ticked = false, p, mx, defaultChecked, ...props },
    ref,
  ) => {
    const [checked, setChecked] = useState(defaultChecked);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
    return (
      <Label variant={checked} p={p} mx={mx}>
        <Input
          defaultChecked={defaultChecked}
          display="none"
          type="checkbox"
          onChange={onChange}
          ref={ref}
          {...props}
        >
          {children}
        </Input>
        <span>{label}</span>
      </Label>
    );
  },
);

export default Checkbox;
