import React, { useContext } from 'react';
import { FormContext } from '../Form/index.tsx';
import { TextArea } from '../TextArea/index.tsx';

export const LastNotes = () => {
  const { handleFormChange, form, isPrepare } = useContext(FormContext);

  if (isPrepare && !form['notes']) {
    return null;
  }

  return (
    <TextArea
      isDisabled={isPrepare}
      isPrepare={isPrepare}
      onChange={(val: string) => handleFormChange('notes', val)}
      label="Additional Notes"
      name="notes"
      value={form['notes']}
    />
  );
};
