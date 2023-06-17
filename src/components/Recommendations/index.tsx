import './styles.scss';

import React, { useContext } from 'react';
import { RecommendationCategory } from '../RecommendationCategory/index.tsx';
import { exerciseCategories, Option } from '../../data/exerciseCategories.ts';
import { FormContext } from '../Form/index.tsx';
import { If } from '../If/index.tsx';
import { exerciseCategoryOptions } from '../../data/exerciseCategoryOptions.ts';
import { Heading, HeadingType } from '../Heading';
import { exerciseData } from '../../data/exerciseData.ts';

export const Recommendations = () => {
  const { isPrepare, form } = useContext(FormContext);

  const isRecommendationsExist = Object.keys(exerciseData).find(
    (code) => Object.keys(form).includes(code) && form[code] === true
  );

  return (
    <>
      <If test={!!isRecommendationsExist || !isPrepare}>
        <Heading type={HeadingType.H1}>Recommendations</Heading>
      </If>
      <ul className="eq-recommendations">
        <If test={!isPrepare}>
          {exerciseCategories.map((exerciseCategory) => {
            return (
              <RecommendationCategory
                key={exerciseCategory.value}
                exerciseCategory={exerciseCategory}
              />
            );
          })}
        </If>
        <If test={isPrepare}>
          {exerciseCategories.map((exerciseCategory) => {
            const selectionsPerExerciseCategory = exerciseCategoryOptions[
              exerciseCategory.value
            ]?.filter((item: Option) => {
              return Object.keys(form).includes(item.value) && form[item.value] === true;
            });
            return (
              <If key={exerciseCategory.value} test={selectionsPerExerciseCategory?.length > 0}>
                <RecommendationCategory
                  key={exerciseCategory.value}
                  exerciseCategory={exerciseCategory}
                />
              </If>
            );
          })}
        </If>
      </ul>
    </>
  );
};
