import React, { FC } from 'react';
import { Input } from 'views/atoms';
import { InputFieldMolecule } from './InputField.interface';

const InputField: FC<InputFieldMolecule> = ({ label, children, ...props }) => (
  <>
    <label>{label}</label>
    <Input {...props}>{children}</Input>
  </>
);

export default InputField;
