import './App.css';

import React from 'react';
import html2pdf from 'html2pdf.js';

import { Table } from './components/Table';
import { Summary } from './components/Summary';
import { Recommendations } from './components/Recommendations';
import { Heading, HeadingType } from './components/Heading';
import { Paragraph } from './components/Paragraph';
import { Form } from './components/Form';
import { Footer } from './components/Footer';
import { HorseMapImage } from './components/HorseMapImage';

const App = () => {
  return (
    <div className="App" id="app">
      <Form
        initialValues={{
          'client-name': '',
          'horse-name': '',
          'date-of-appointment': '',
          'time-of-appointment': '',
          'date-of-next-appointment': '',
          'time-of-next-appointment': '',
          summary: '',
          'bowing-head-through-the-front-limbs': '',
          'chin-to-chest': '',
          'deltoid-left': '',
          'deltoid-right': '',
          'gluteus-left': '',
          'gluteus-right': '',
          'head-and-neck-down-to-the-ground': '',
          'head-and-neck-in-full-forward-extension': '',
          'hip/illiacus-(false-hip)-left': '',
          'hip/illiacus-(false-hip)-right': '',
          'intercostal-muscles/rib-cage-left': '',
          'intercostal-muscles/rib-cage-right': '',
          'latissimus-dorsi-left': '',
          'latissimus-dorsi-right': '',
          'left-stretch-through-the-head-and-neck': '',
          'longissimus-dorsi-left': '',
          'longissimus-dorsi-right': '',
          'masseter-muscle/cheek-left': '',
          'masseter-muscle/cheek-right': '',
          'multifidus-cervicus-left': '',
          'multifidus-cervicus-right': '',
          'pectorals-transversus/pectoralis-descendens/pectoral-muscles-left': '',
          'pectorals-transversus/pectoralis-descendens/pectoral-muscles-right': '',
          'poll-left': '',
          'poll-right': '',
          'rectus-capitus-lateralis-left': '',
          'rectus-capitus-lateralis-right': '',
          'right-stretch-through-the-head-and-neck': '',
          'splenius-left': '',
          'splenius-right': '',
          'tensor-fascia-latae-left': '',
          'tensor-fascia-latae-right': '',
          'trapezius/rhomboids-left': '',
          'trapezius/rhomboids-right': '',
          'tricep-left': '',
          'tricep-right': '',
          notes: ''
        }}
        onSubmit={() =>
          html2pdf(document.getElementById('app'), {
            margin: 5,
            filename: 'myfile.pdf'
          })
        }>
        <Summary />
        <Heading type={HeadingType.H1}>Muscle Groups and Functions</Heading>
        <Table />
        <Paragraph>
          PLEASE NOTE: EQUINE MASSAGE THERAPY &amp; EQUINE ACUPRESSURE THERAPY ARE NOT SUBSTITUTIONS
          FOR VETERINARY CARE. IF YOUR HORSE APPEARS ILL OR INJURED, CONTACT YOUR VETERINARIAN
          IMMEDIATELY.
        </Paragraph>
        <Paragraph>
          PLEASE NOTE: Advice about nutrition, especially in the case of illness, injury, disorders
          or conditions requiring medical treatment, is not intended to replace veterinary care. It
          may be used in conjunction with such care to facilitate healing and maintain health. The
          information offered by Denise Bean-Nigro, DBA Exclusive Equestrian Services LLC, is
          presented for the purpose of educating horse owners. Suggested feeds, supplements, and
          procedures are administered voluntarily with the understanding that any adverse reaction
          is the responsibility of the owner. Furthermore, Denise Bean-Nigro, DBA Exclusive
          Equestrian Services LLC, cannot be held accountable for horses response, whether favorable
          or adverse, to nutritional intervention.
        </Paragraph>

        <HorseMapImage />

        <Heading type={HeadingType.H1}>Recommendations</Heading>
        <Recommendations />
        <Footer />
      </Form>
    </div>
  );
};

export default App;
