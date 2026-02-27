export interface DropdownProps {
  options: string[];
  selected?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}