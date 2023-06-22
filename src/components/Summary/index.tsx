import './styles.scss';

import React, { useContext } from 'react';
import { Heading, HeadingType } from '../Heading/index.tsx';
import { Input } from '../Input/index.tsx';
import { InputDate } from '../InputDate/index.tsx';
import { InputTime } from '../InputTime/index.tsx';
import { FormContext } from '../Form/index.tsx';
import { TextArea } from '../TextArea/index.tsx';

import logo from '../../assets/logo.png';

export const Summary = () => {
  const { handleFormChange, form, errors, isPrepare } = useContext(FormContext);

  const date = new Date();
  const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
  const month = date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
  const minDate = `${date.getFullYear()}-${month}-${day}`;

  return (
    <div className="eq-summary">
      <div className="eq-summary-top">
        <div className="eq-summary-info">
          <img src={logo} alt="Exclusive Equestrian logo" width="200" />
          <div>Denise Bean-Nigro</div>
          <div>Email: ExEqServices@gmail.com</div>
          <div>Phone: (978) 828-1974</div>
          <div>Website: www.ExclusiveEquestrianServices.com</div>
        </div>
        <div className="eq-summary-client">
          <Input
            isDisabled={isPrepare}
            isPrepare={isPrepare}
            onChange={(val: string) => handleFormChange('client-name', val)}
            label="Client name: "
            name="client-name"
            value={form['client-name']}
            error={errors['client-name']}
          />
          <Input
            isDisabled={isPrepare}
            isPrepare={isPrepare}
            onChange={(val: string) => handleFormChange('horse-name', val)}
            label="Horse name: "
            name="horse-name"
            value={form['horse-name']}
            error={errors['horse-name']}
          />
          <Heading type={HeadingType.H3}>Current Appointment</Heading>
          <div className="eq-summary-date_time">
            <InputDate
              isDisabled={isPrepare}
              isPrepare={isPrepare}
              onChange={(val: string) => handleFormChange('date-of-appointment', val)}
              label="Date: "
              name="date-of-appointment"
              value={form['date-of-appointment']}
              error={errors['date-of-appointment']}
            />
            <InputTime
              isDisabled={isPrepare}
              isPrepare={isPrepare}
              onChange={(val: string) => handleFormChange('time-of-appointment', val)}
              label="Time: "
              name="time-of-appointment"
              value={form['time-of-appointment']}
              error={errors['time-of-appointment']}
            />
          </div>
          <Heading type={HeadingType.H3}>Next Appointment</Heading>
          <div className="eq-summary-date_time">
            <InputDate
              isDisabled={isPrepare}
              isPrepare={isPrepare}
              onChange={(val: string) => handleFormChange('date-of-next-appointment', val)}
              label="Date: "
              minDate={minDate}
              name="date-of-next-appointment"
              value={form['date-of-next-appointment']}
              error={errors['date-of-next-appointment']}
            />
            <InputTime
              isDisabled={isPrepare}
              isPrepare={isPrepare}
              onChange={(val: string) => handleFormChange('time-of-next-appointment', val)}
              label="Time: "
              name="time-of-next-appointment"
              value={form['time-of-next-appointment']}
              error={errors['time-of-next-appointment']}
            />
          </div>
        </div>
      </div>
      {isPrepare && form['summary'] && (
        <TextArea
          isDisabled={isPrepare}
          isPrepare={isPrepare}
          onChange={(val: string) => handleFormChange('summary', val)}
          label="Summary"
          name="summary"
          value={form['summary']}
        />
      )}
    </div>
  );
};
