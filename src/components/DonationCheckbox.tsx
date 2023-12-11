import type { DonationCheckboxProps } from '../types';

export const DonationCheckbox = ({
  onChange,
  checked,
  content,
}: DonationCheckboxProps) => {
  return (
    <div>
      <label>
        <input
          type='checkbox'
          onChange={onChange}
          checked={checked}
        />
        <span>{content}</span>
      </label>
    </div>
  );
};
