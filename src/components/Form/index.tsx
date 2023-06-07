import React, { useState, PropsWithChildren } from 'react';
import { isEmptyObject } from '../../helpers/object.tsx';

export interface FormProps {
  initialValues: Record<string, any>;
  onSubmit: (val) => void;
}

export interface FormContextProps {
  form: Record<string, any>;
  errors: Record<string, any>;
  isPrepare: boolean;
  handleFormChange: (name: string, value: string | boolean) => void;
  handleOnPrepare: (val: boolean) => void;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const optionalFields = ['summary', 'notes'];

export const Form = ({ children, initialValues, onSubmit }: PropsWithChildren<FormProps>) => {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isPrepare, setIsPrepare] = useState(false);

  const handleFormChange = (name: string, value: string | boolean) => {
    const updatedForm = {
      ...form,
      [name]: value
    };

    setForm(updatedForm);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  const handleOnPrepare = (val: boolean) => {
    const formattedErrors = Object.keys(form).reduce((prev, curr) => {
      if (form[curr] === '' && !optionalFields.some((item) => item === curr)) {
        return Object.assign(prev, { [curr]: 'Required' });
      }
      return prev;
    }, {});

    setErrors(formattedErrors);

    if (isEmptyObject(formattedErrors)) {
      setIsPrepare?.(val);
    }
  };

  const values: FormContextProps = {
    form,
    errors,
    isPrepare,
    handleFormChange,
    handleOnPrepare,
    handleOnSubmit
  };

  return (
    <FormContext.Provider value={values}>
      <form noValidate onSubmit={handleOnSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export const FormContext = React.createContext({
  form: {},
  errors: {},
  isPrepare: false,
  handleFormChange: (name: string, value: string | boolean) => null,
  handleOnPrepare: (val: boolean) => null,
  handleOnSubmit: (e) => null
} as FormContextProps);
