import './styles.scss';

import React from 'react';
import { TableRow } from '../TableRow/index.tsx';
import { TableRowDivider } from '../TableRowDivider/index.tsx';

export const Table = () => {
  return (
    <div className="eq-table">
      <TableRowDivider header="Carrot Stretches" />
      <TableRow
        title="Right stretch through the head and neck"
        checkboxLabels={['Complete', 'Partial', 'Incomplete']}
      />
      <TableRow
        title="Left stretch through the head and neck"
        checkboxLabels={['Complete', 'Partial', 'Incomplete']}
      />
      <TableRow
        title="Head and neck in full forward extension"
        checkboxLabels={['Complete', 'Partial', 'Incomplete']}
      />
      <TableRow
        title="Head and neck down to the ground"
        checkboxLabels={['Complete', 'Partial', 'Incomplete']}
      />
      <TableRow title="Chin to chest" checkboxLabels={['Complete', 'Partial', 'Incomplete']} />
      <TableRow
        title="Bowing head through the front limbs"
        checkboxLabels={['Complete', 'Partial', 'Incomplete']}
      />
      <div className="eq-table-page_section">
        <TableRowDivider
          header="Upper Neck Muscles (Crest)"
          body="As a way of relating to overall neck tightness in your horse, walk around while stiffening the base of your neck...you will soon discover the effect it has on your shoulders - the shoulder muscles will become stiff, weak and compromised in their ability to move & function properly."
        />
        <TableRow
          title="Poll"
          checkboxLabels={['Not tight', 'Moderate', 'Fully tight']}
          subRows={['Left', 'Right']}
        />
        <TableRow
          title="Masseter Muscle/Cheek"
          checkboxLabels={['Not tight', 'Moderate', 'Fully tight']}
          subRows={['Left', 'Right']}
        />
        <TableRow
          title="Rectus Capitus Lateralis"
          checkboxLabels={['Not tight', 'Moderate', 'Fully tight']}
          subRows={['Left', 'Right']}
        />
        <TableRow
          title="Splenius"
          checkboxLabels={['Not tight', 'Moderate', 'Fully tight']}
          subRows={['Left', 'Right']}
        />
      </div>
      <TableRowDivider header="Lower Neck Muscle" />
      <TableRow
        title="Multifidus Cervicus"
        checkboxLabels={['Not tight', 'Moderate', 'Fully tight']}
        subRows={['Left', 'Right']}
      />
      <TableRowDivider
        header="Shoulder Muscles"
        body="As a way of relating to overall shoulder tightness in your horse, try walking around WITHOUT moving your shoulders. If you do not allow your shoulders to move, subconsciously, you will stiffen your lower back & waist area. This is especially important to think about as saddles sit over the shoulder and back muscles. If the shoulder movement is compromised due to an ill-fitting saddle, it will affect the movement throughout the entire body. Remember, no one muscle group can work without affecting the other."
      />
      <TableRow
        title="Trapezius/Rhomboids"
        checkboxLabels={['Not tight', 'Moderate', 'Fully tight']}
        subRows={['Left', 'Right']}
      />
      <TableRow
        title="Deltoid"
        checkboxLabels={['Not tight', 'Moderate', 'Fully tight']}
        subRows={['Left', 'Right']}
      />
      <TableRow
        title="Tricep"
        checkboxLabels={['Not tight', 'Moderate', 'Fully tight']}
        subRows={['Left', 'Right']}
      />
      <TableRow
        title="Pectorals Transversus/Pectoralis Descendens/Pectoral Muscles"
        checkboxLabels={['Not tight', 'Moderate', 'Fully tight']}
        subRows={['Left', 'Right']}
      />
      <div className="eq-table-page_section">
        <TableRowDivider
          header="Back Muscles"
          body="As a way of relating to overall back tightness in your horse, place your hand on your lower back while you are in a standing position. Next, go ahead & attempt to walk WITHOUT moving your waist. If you executed this task correctly, you would have clearly noticed how walking in this restricted manner has blocked your back & leg motion, compromising your ability to move forward, to balance properly, to lengthen your step & to coordinate your limbs efficiently."
        />
        <TableRow
          title="Latissimus Dorsi"
          checkboxLabels={['Not tight', 'Moderate', 'Fully tight']}
          subRows={['Left', 'Right']}
        />
        <TableRow
          title="Longissimus Dorsi"
          checkboxLabels={['Not tight', 'Moderate', 'Fully tight']}
          subRows={['Left', 'Right']}
        />
        <TableRow
          title="Intercostal Muscles/Rib Cage"
          checkboxLabels={['Not tight', 'Moderate', 'Fully tight']}
          subRows={['Left', 'Right']}
        />
      </div>
      <div className="eq-table-page_section">
        <TableRowDivider
          header="Hindquarter Muscles"
          body="As a way of relating to overall hindquarter tightness in your horse, try 2 exercises: First, bend over with LOCKED knees & walk around...you will soon discover that you cannot adequately move your legs forward, underneath your body & your ability to propel yourself forward in any manner is severely compromised. Next, try walking around while you are tensing your calf muscles. You will soon feel how this affects your ankle (the human hock equivalent)...Muscle tightness in the hind limbs will restrict the movement of the hip, hock & stifle, thus resulting in a loss of forward power, a shortened step & a loss of balance."
        />
        <TableRow
          title="Hip/Illiacus (False Hip)"
          checkboxLabels={['Not tight', 'Moderate', 'Fully tight']}
          subRows={['Left', 'Right']}
        />
        <TableRow
          title="Gluteus"
          checkboxLabels={['Not tight', 'Moderate', 'Fully tight']}
          subRows={['Left', 'Right']}
        />
        <TableRow
          title="Tensor Fascia Latae"
          checkboxLabels={['Not tight', 'Moderate', 'Fully tight']}
          subRows={['Left', 'Right']}
        />
      </div>
    </div>
  );
};
