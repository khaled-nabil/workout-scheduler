import React, { FC, forwardRef } from 'react';
import { Input } from 'views/atoms';
import { InputFieldMolecule } from './InputField.interface';

const InputField: FC<InputFieldMolecule> = forwardRef(
  ({ label, ...props }, ref) => (
    <>
      <label>{label}</label>
      <Input ref={ref} {...props} />
    </>
  ),
);

export default InputField;
