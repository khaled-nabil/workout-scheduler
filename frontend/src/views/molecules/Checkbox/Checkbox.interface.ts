import { UseFormMethods } from 'react-hook-form';
import { InputAtom } from 'views/atoms/Input/Input.interface';

export interface CheckboxMolecule extends InputAtom {
  label: string;
  submit?: Function;
}
