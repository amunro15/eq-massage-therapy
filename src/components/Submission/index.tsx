import './styles.scss';

import React, { useContext, useEffect } from 'react';
import { FormContext } from '../Form/index.tsx';
import { isEmptyObject } from '../../helpers/object.tsx';
import { scrollToError } from '../../helpers/scrollToError.tsx';
import { If } from '../If/index.tsx';
import { Button, ButtonAlign, ButtonType } from '../Button/index.tsx';

export const Submission = () => {
  const { handleOnPrepare, errors, isPrepare } = useContext(FormContext);

  useEffect(() => {
    if (!isEmptyObject(errors)) {
      scrollToError();
    }
  }, [errors]);

  return (
    <div className="eq-submission">
      <If test={!isPrepare}>
        <Button align={ButtonAlign.Right} onClick={() => handleOnPrepare(true)}>
          Prepare
        </Button>
      </If>
      <If test={isPrepare}>
        <div className="eq-submission-buttons">
          <Button align={ButtonAlign.Left} onClick={() => handleOnPrepare(false)}>
            Back
          </Button>
          <Button align={ButtonAlign.Right} type={ButtonType.Submit}>
            Submit
          </Button>
        </div>
      </If>
    </div>
  );
};
