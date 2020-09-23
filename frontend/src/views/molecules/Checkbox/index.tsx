import React, { FC, forwardRef, useState } from 'react';
import { Input } from 'views/atoms';
import { CheckboxMolecule } from './Checkbox.interface';
import { Label } from 'views/atoms';
import styled from 'styled-components';
import css from '@styled-system/css';

const LabelClickable = styled(Label)(
  css({
    cursor: 'pointer',
  }),
);

const Checkbox: FC<CheckboxMolecule> = forwardRef(
  ({ label, p, mx, defaultChecked, submit, ...props }, ref) => {
    const [checked, setChecked] = useState(defaultChecked);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
      if (submit) submit();
    };
    return (
      <LabelClickable variant={checked} p={p} mx={mx}>
        <Input
          defaultChecked={defaultChecked}
          display="none"
          type="checkbox"
          onChange={onChange}
          ref={ref}
          {...props}
        />
        <span>{label}</span>
      </LabelClickable>
    );
  },
);

export default Checkbox;
