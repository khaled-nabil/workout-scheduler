import { InputAtom } from 'views/atoms/Input/Input.interface';

export interface CheckboxMolecule extends InputAtom {
  label: string;
  ticked?: boolean;
}
