import './styles.scss';

import React, { useContext } from 'react';
import { Checkbox } from '../Checkbox/index.tsx';
import { If } from '../If/index.tsx';
import { FormContext } from '../Form/index.tsx';
import { muscleDescription } from '../../data/muscleDescription.ts';

interface Props {
  title: string;
  checkboxLabels: string[];
  subRows?: string[];
}

export const TableRow = ({ title, checkboxLabels, subRows = [] }: Props) => {
  const { handleFormChange, form, errors, isPrepare } = useContext(FormContext);

  return (
    <div className="eq-table_row">
      <div className="eq-table_row-primary">
        <span className="eq-table_row-primary_title">{title}: </span>
        {muscleDescription[title]}
      </div>
      <div className="eq-table_row-checkbox-container">
        <If test={subRows.length === 0}>
          <div className="eq-table_row-checkbox">
            {checkboxLabels.map((checkboxLabel) => {
              const key = title.replace(/\s+/g, '-').toLowerCase();
              return (
                <Checkbox
                  isDisabled={isPrepare}
                  key={`${key}-${checkboxLabel}`}
                  id={key}
                  isChecked={form[key] === checkboxLabel}
                  name={key}
                  onChange={() => handleFormChange(key, checkboxLabel)}
                  error={errors[key]}>
                  {checkboxLabel}
                </Checkbox>
              );
            })}
          </div>
        </If>
        <If test={subRows && subRows.length > 0}>
          {subRows.map((row) => {
            return (
              <div className="eq-table_row-checkbox" key={row}>
                <div className="eq-table_row-checkbox-side">{row}</div>
                {checkboxLabels.map((checkboxLabel) => {
                  const key = `${title.replace(/\s+/g, '-').toLowerCase()}-${row.toLowerCase()}`;
                  return (
                    <Checkbox
                      isDisabled={isPrepare}
                      key={`${key}-${checkboxLabel}`}
                      id={key}
                      isChecked={form[key] === checkboxLabel}
                      name={key}
                      onChange={() => handleFormChange(key, checkboxLabel)}
                      error={errors[key]}>
                      {checkboxLabel}
                    </Checkbox>
                  );
                })}
              </div>
            );
          })}
        </If>
      </div>
    </div>
  );
};
