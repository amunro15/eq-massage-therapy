import './styles.scss';

import React, { useState, useContext, useEffect } from 'react';
import { FormContext } from '../Form/index.tsx';

import { ExerciseOption } from '../ExerciseOption/index.tsx';
import { If } from '../If/index.tsx';

import { Option } from '../../data/exerciseCategories.ts';
import { exerciseCategoryOptions } from '../../data/exerciseCategoryOptions.ts';
import { exerciseData } from '../../data/exerciseData.ts';
import dropdown from '../../assets/icons/dropdown.svg';

import { classname } from '../../helpers/classname.tsx';

export const RecommendationCategory = ({ exerciseCategory }: { exerciseCategory: Option }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { isPrepare, form } = useContext(FormContext);

  useEffect(() => {
    if (isPrepare) {
      setIsOpen(true);
    }
  }, [isPrepare]);

  return (
    <li className="eq-recommendation_category">
      <div
        className={classname('eq-recommendation_category-label', {
          'eq-recommendation_category-disabled': isPrepare
        })}
        onClick={() => !isPrepare && setIsOpen(!isOpen)}>
        {exerciseCategory.label}
        <div
          className={classname('eq-recommendation_category-dropdown', {
            'eq-recommendation_category-dropdown-invert': isOpen
          })}>
          <img src={dropdown as unknown as string} alt="Dropdown" />
        </div>
      </div>
      <If test={isOpen && !isPrepare}>
        {exerciseCategoryOptions[exerciseCategory.value]?.map((option: Option) => {
          return <ExerciseOption data={exerciseData[option.value]} key={option.value} />;
        })}
      </If>
      <If test={isOpen && isPrepare}>
        {exerciseCategoryOptions[exerciseCategory.value]?.map((option: Option) => {
          if (Object.keys(form).includes(option.value)) {
            return <ExerciseOption data={exerciseData[option.value]} key={option.value} />;
          }
          return null;
        })}
      </If>
    </li>
  );
};
