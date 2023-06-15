import React, { useContext } from 'react';
import { FormContext } from '../Form/index.tsx';
import { TextArea } from '../TextArea/index.tsx';

export const LastNotes = () => {
  const { handleFormChange, form, isPrepare } = useContext(FormContext);

  return (
    <TextArea
      isDisabled={isPrepare}
      onChange={(val: string) => handleFormChange('notes', val)}
      label="Additional Notes"
      name="notes"
      value={form['notes']}
    />
  );
};
