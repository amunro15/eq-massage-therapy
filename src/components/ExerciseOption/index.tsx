import './styles.scss';
import React, { useContext } from 'react';
import { FormContext } from '../Form/index.tsx';

import { ExerciseData } from '../../data/exerciseData';
import { Checkbox } from '../Checkbox/index.tsx';
import { If } from '../If/index.tsx';
import { Heading, HeadingType } from '../Heading/index.tsx';
import { Paragraph } from '../Paragraph/index.tsx';
import { classname } from '../../helpers/classname.tsx';

interface Props {
  data: ExerciseData;
}

export const ExerciseOption = ({ data }: Props) => {
  const { handleFormChange, form, isPrepare } = useContext(FormContext);

  const { header, body, image, list, id } = data;

  return (
    <div
      className={classname('eq-exercise_option', {
        'eq-exercise_option-selected': !!form[id],
        'eq-exercise_option-disabled': isPrepare
      })}
      onClick={() => !isPrepare && handleFormChange(id, !form[id])}>
      {!isPrepare && (
        <Checkbox isDisabled={isPrepare} id={id} isChecked={!!form[id]} name={header} />
      )}
      <div className="eq-exercise_option-content">
        <div className="eq-exercise_option-content-copy">
          <Heading type={HeadingType.H2}>{header}</Heading>
          {body && <Paragraph>{body}</Paragraph>}
          <If test={!!list && list.length > 0}>
            <ul>
              {list?.map((item: string) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </If>
        </div>
        <If test={!!image && image.length > 0}>
          <div
            className={classname('eq-exercise_option-content-image', {
              'eq-exercise_option-content-image-only': !body && !list
            })}>
            {image?.map((item: string) => {
              return <img src={item} alt={`${header}`} key={item} />;
            })}
          </div>
        </If>
      </div>
    </div>
  );
};
