import M10 from '../assets/M10.jpeg';
import M11 from '../assets/M11.jpeg';
import M12 from '../assets/M12.png';
import M15 from '../assets/M15.png';
import M15_0 from '../assets/M15_0.png';
import PE3 from '../assets/PE3.png';
import PE6 from '../assets/PE6.png';
import PE9 from '../assets/PE9.png';
import PE10 from '../assets/PE10.png';
import PE15 from '../assets/PE15.png';
import PE16 from '../assets/PE16.png';
import PE17 from '../assets/PE17.png';
import PE18 from '../assets/PE18.png';
import PE19 from '../assets/PE19.png';
import PE20 from '../assets/PE20.png';
import PE21 from '../assets/PE21.png';
import PE28 from '../assets/PE28.png';
import PE29 from '../assets/PE29.png';
import PE30 from '../assets/PE30.png';
import PE32 from '../assets/PE32.png';
import PE33 from '../assets/PE33.png';
import PE36 from '../assets/PE36.png';
import PE37 from '../assets/PE37.png';
import PE38 from '../assets/PE38.png';
import PE40 from '../assets/PE40.png';
import UG13 from '../assets/UG13.jpeg';
import UG15 from '../assets/UG15.jpeg';
import UG23 from '../assets/UG23.jpeg';
import UG37 from '../assets/UG37.png';
import RC2 from '../assets/RC2.png';
import SE5 from '../assets/SE5.png';
import OB1 from '../assets/OB1.png';

export interface ExerciseData {
  category: string;
  header: string;
  id: string;
  body?: string;
  image?: string[];
  list?: string[];
}

export enum ExerciseCode {
  MS1 = 'MS1',
  MS2 = 'MS2',
  MS3 = 'MS3',
  MS4 = 'MS4',
  MS5 = 'MS5',
  MS6 = 'MS6',
  MS7 = 'MS7',
  MS8 = 'MS8',
  MS9 = 'MS9',
  MS10 = 'MS10',
  MS11 = 'MS11',
  MS12 = 'MS12',
  MS13 = 'MS13',
  MS14 = 'MS14',
  MS15 = 'MS15',
  UG1 = 'UG1',
  UG2 = 'UG2',
  UG3 = 'UG3',
  UG4 = 'UG4',
  UG5 = 'UG5',
  UG6 = 'UG6',
  UG7 = 'UG7',
  UG8 = 'UG8',
  UG9 = 'UG9',
  UG10 = 'UG10',
  UG11 = 'UG11',
  UG12 = 'UG12',
  UG13 = 'UG13',
  UG14 = 'UG14',
  UG15 = 'UG15',
  UG16 = 'UG16',
  UG17 = 'UG17',
  UG18 = 'UG18',
  UG19 = 'UG19',
  UG20 = 'UG20',
  UG21 = 'UG21',
  UG22 = 'UG22',
  UG23 = 'UG23',
  UG24 = 'UG24',
  UG25 = 'UG25',
  UG26 = 'UG26',
  UG27 = 'UG27',
  UG28 = 'UG28',
  UG29 = 'UG29',
  UG30 = 'UG30',
  UG31 = 'UG31',
  UG32 = 'UG32',
  UG33 = 'UG33',
  UG34 = 'UG34',
  UG35 = 'UG35',
  UG36 = 'UG36',
  UG37 = 'UG37',
  PE1 = 'PE1',
  PE2 = 'PE2',
  PE3 = 'PE3',
  PE4 = 'PE4',
  PE5 = 'PE5',
  PE6 = 'PE6',
  PE7 = 'PE7',
  PE8 = 'PE8',
  PE9 = 'PE9',
  PE10 = 'PE10',
  PE11 = 'PE11',
  PE12 = 'PE12',
  PE13 = 'PE13',
  PE14 = 'PE14',
  PE15 = 'PE15',
  PE16 = 'PE16',
  PE17 = 'PE17',
  PE18 = 'PE18',
  PE19 = 'PE19',
  PE20 = 'PE20',
  PE21 = 'PE21',
  PE22 = 'PE22',
  PE23 = 'PE23',
  PE24 = 'PE24',
  PE25 = 'PE25',
  PE26 = 'PE26',
  PE27 = 'PE27',
  PE28 = 'PE28',
  PE29 = 'PE29',
  PE30 = 'PE30',
  PE31 = 'PE31',
  PE32 = 'PE32',
  PE33 = 'PE33',
  PE34 = 'PE34',
  PE35 = 'PE35',
  PE36 = 'PE36',
  PE37 = 'PE37',
  PE38 = 'PE38',
  PE39 = 'PE39',
  PE40 = 'PE40',
  PE41 = 'PE41',
  PE42 = 'PE42',
  PE43 = 'PE43',
  PE44 = 'PE44',
  PE45 = 'PE45',
  PE46 = 'PE46',
  PE47 = 'PE47',
  PE48 = 'PE48',
  PE49 = 'PE49',
  PE50 = 'PE50',
  PE51 = 'PE51',
  PE52 = 'PE52',
  PE53 = 'PE53',
  PE54 = 'PE54',
  PE55 = 'PE55',
  PE56 = 'PE56',
  PE57 = 'PE57',
  HT1 = 'HT1',
  HT2 = 'HT2',
  HT3 = 'HT3',
  HT4 = 'HT4',
  HT5 = 'HT5',
  HT6 = 'HT6',
  HT7 = 'HT7',
  HT8 = 'HT8',
  HT9 = 'HT9',
  HT10 = 'HT10',
  HT11 = 'HT11',
  HT12 = 'HT12',
  HT13 = 'HT13',
  HT14 = 'HT14',
  HT15 = 'HT15',
  HT16 = 'HT16',
  HT17 = 'HT17',
  HT18 = 'HT18',
  HT19 = 'HT19',
  HT20 = 'HT20',
  HT21 = 'HT21',
  HT22 = 'HT22',
  HT23 = 'HT23',
  HT24 = 'HT24',
  HT25 = 'HT25',
  HT26 = 'HT26',
  MN1 = 'MN1',
  MN2 = 'MN2',
  MN3 = 'MN3',
  MN4 = 'MN4',
  MN5 = 'MN5',
  MN6 = 'MN6',
  MN7 = 'MN7',
  MN8 = 'MN8',
  MN9 = 'MN9',
  MN10 = 'MN10',
  MH1 = 'MH1',
  MH2 = 'MH2',
  MH3 = 'MH3',
  MH4 = 'MH4',
  MH5 = 'MH5',
  MH6 = 'MH6',
  MH7 = 'MH7',
  HE1 = 'HE1',
  HE2 = 'HE2',
  HE3 = 'HE3',
  HE4 = 'HE4',
  HE5 = 'HE5',
  HE6 = 'HE6',
  HE7 = 'HE7',
  HE8 = 'HE8',
  BE1 = 'BE1',
  BE2 = 'BE2',
  BE3 = 'BE3',
  BE4 = 'BE4',
  BE5 = 'BE5',
  BE6 = 'BE6',
  BE7 = 'BE7',
  BE8 = 'BE8',
  BE9 = 'BE9',
  BE10 = 'BE10',
  BE11 = 'BE11',
  BE12 = 'BE12',
  BE13 = 'BE13',
  BE14 = 'BE14',
  BE15 = 'BE15',
  BE16 = 'BE16',
  BE17 = 'BE17',
  BE18 = 'BE18',
  RC1 = 'RC1',
  RC2 = 'RC2',
  RC3 = 'RC3',
  SE1 = 'SE1',
  SE2 = 'SE2',
  SE3 = 'SE3',
  SE4 = 'SE4',
  SE5 = 'SE5',
  HI1 = 'HI1',
  HI2 = 'HI2',
  HI3 = 'HI3',
  HI4 = 'HI4',
  HI5 = 'HI5',
  HI6 = 'HI6',
  HI7 = 'HI7',
  HI8 = 'HI8',
  OB1 = 'OB1',
  OB2 = 'OB2',
  OB3 = 'OB3'
}

export const exerciseData = {
  [ExerciseCode.MS1]: {
    id: ExerciseCode.MS1,
    category: 'massage-stroke',
    header: 'Indentation Strokes',
    body: 'Take the pad of your thumb and directly press down into the tissue located in the indentation. Hold the thumb pad down for about 20 seconds. Next, using the pads of your pointing, middle and ring fingers, move your hand in a side-to side, left to right motion, vigorously and deeply until you feel the tissue soften. Lastly, take your fingers & gather up small sections of tissue & squeeze them throughout the indented area...think of squeezing a pie crust closed when performing this petrissage stroke. Each time you release the finger squeeze, exhale & drop your shoulders.  Practice 2-3 times weekly.'
  },
  [ExerciseCode.MS2]: {
    id: ExerciseCode.MS2,
    category: 'massage-stroke',
    header: 'Neck Knot',
    body: '(Before & After Ridden) Take the pad of your thumb and directly press down into the tissue located at the base of the crest, just in front of the withers. Hold the thumb pad down for about 15 seconds. Next, using the pads of your pointing, middle and ring fingers, move your hand in a side-to-side, left to right motion, vigorously and deeply until you feel the tissue soften.  This should be performed on both sides. Practice 2-3 times weekly.'
  },
  [ExerciseCode.MS3]: {
    id: ExerciseCode.MS3,
    category: 'massage-stroke',
    header: 'Lower Back Knot',
    body: '(Before & After Ridden) Take the pad of your thumb and directly press down into the tissue located in the lower back, about 2 inches away from the spine.   Hold the thumb pad down for about 15 seconds.  Next, using the pads of your pointing, middle and ring fingers, move your hand in a side-to side, left to right motion, vigorously and deeply until you feel the tissue soften. Lastly, take your palm and compress the tissue up into the back bone by pressing the palm down and twisting it, as if opening up a child-proof medicine bottle. Practice 2-3 times weekly.'
  },
  [ExerciseCode.MS4]: {
    id: ExerciseCode.MS4,
    category: 'massage-stroke',
    header: 'Neck Stroke',
    body: 'Lightly compress the lower neck muscles using a clock-wise, open palm stroke, working the palm up and down the length of the muscle for several passes. Then increase the palm pressure, and apply the stroke as if you were opening up a child-proof medicine bottle. Work up and down the length of the muscle several times in this manner until you feel the tissue soften, and begin to visually see the tissue loosen and move easily. Practice 2- 3 times weekly.'
  },
  [ExerciseCode.MS5]: {
    id: ExerciseCode.MS5,
    category: 'massage-stroke',
    header: 'Hind Leg Stroke',
    body: 'Using either the palm of your hand, or a massaging tool, work small, deep clock-wise and counter clock-wise circles throughout the outer muscles of each hind leg. Work the circles strongly into the muscle tissue until you feel the tissue soften. Practice 2-3 times weekly.'
  },
  [ExerciseCode.MS6]: {
    id: ExerciseCode.MS6,
    category: 'massage-stroke',
    header: 'Curry Comb Applications/Extensor Muscles',
    body: 'Using a curry comb that has chunky, nubby tips, strongly curry in clock-wise and counter clock-wise directions the extensor muscles located at the top of each leg (the large fleshy area, just above the knees/below the shoulders on the FRONT legs, & located just above the hock, & below the stifle on the HIND legs). Work each leg for several minutes until the tissue softens. Then move the curry comb in a side-to-side fashion to finish. This can become part of the daily grooming routine. Practice 2-3 times weekly.'
  },
  [ExerciseCode.MS7]: {
    id: ExerciseCode.MS7,
    category: 'massage-stroke',
    header: 'Stress Point #1',
    body: 'Take the pad of your thumb and directly press down into the tissue located at the top of the neck, approximately 4 inches below and 4 inches behind the ear. Hold the thumb pad down for about 30 seconds. Next, using your same thumb pad, move your thumb in a side-to side, left to right motion, vigorously and deeply over that area until you feel the tissue soften.  The area of tissue that you will be working on is about 2-3 inches wide. Practice 2-3 times weekly.'
  },
  [ExerciseCode.MS8]: {
    id: ExerciseCode.MS8,
    category: 'massage-stroke',
    header: 'Cheek Manipulations',
    body: "Cheek Manipulations: Place the palm of your hand in the center of each of horse's cheeks simultaneously and make clock-wise motions, as well as counter- clockwise motions throughout the soft cheek muscles. Be sure to use the center of your palms, raising your fingers up, away from horse's skin - this will create a stronger pressure, aiding in the release of the jaw. Next, using the pads of your fingertips, repeat the same clock-wise and counter clock-wise manipulations around the eyes, manipulating all of the thin skin the encompasses the eye sockets. Practice 2-3 times weekly."
  },
  [ExerciseCode.MS9]: {
    id: ExerciseCode.MS9,
    category: 'massage-stroke',
    header: 'Neck/Shoulder Tissue Separation',
    body: 'Using the palms of your hand, gently separate the tissue that lies at the base of the neck, in the groove in front of the shoulder/scapula. Your right palm will be pushing the tissue towards the hindquarters, while your left palm will simultaneously be pushing the tissue towards his head, as if you are opening up the groove. Begin at the top of the base (just in front of the wither), and work your way down the groove towards the bottom of the of the neck. Once you have pushed the tissue apart, use the pads of your pointing finger, middle and ring finger to move the tissue side-to-side, in a right-to- left sequence. Move the finger pads quickly and deeply along the entire length of the groove at the base of the neck.  Practice 2-3 times weekly.'
  },
  [ExerciseCode.MS10]: {
    id: ExerciseCode.MS10,
    category: 'massage-stroke',
    header: 'Atlas Grove',
    body: 'Before & After the horse is ridden - Rub the pads of your pointing, middle & ring fingers up & down in the groove located just behind the cheek bone - begin with light pressure and slowly increase to deep pressure...spend a minute or so on each side to aid in loosening the tightness found in the jaw. Practice 2-3 times weekly.',
    image: [M10]
  },
  [ExerciseCode.MS11]: {
    id: ExerciseCode.MS11,
    category: 'massage-stroke',
    header: 'Tennis Ball Stroke Application',
    body: 'Use a tennis ball to apply clock-wise and counter clock-wise compression strokes in front of the scapula/shoulder (please see photo: the area you will be working on is where the lead line lies in the accompanying photo), working the ball up and down the entire length (vertically) of the base of the neck, working deeply into the groove that lies in front of the scapula/shoulder. After applying circular strokes, apply side to side strokes. Begin all work with light pressure, gradually increasing to moderate pressure & finally deep pressure. Practice this 2-3 times weekly, for several minutes each session. This can become part of your grooming routine.',
    image: [M11]
  },
  [ExerciseCode.MS12]: {
    id: ExerciseCode.MS12,
    category: 'massage-stroke',
    header: 'Under The Tail Point',
    body: "Place your thumb pad or finger pad at about one o'clock NEXT to the &quot;dial&quot; of the anal opening (not inside). Begin with light pressure, inhale & exhale 4 times, slightly increasing the pressure with each breathe. While maintaining the direct pressure with thumb pad or finger pad, watch for the horse to lick/chew/exhale loudly/sigh/lower head/pass gas or roll the foot up onto its hind toe & relax a hind limb. These are all signs of release.  Repeat this stroke application at the location on the left side which is at about eleven o'clock NEXT to the dial surrounding the anal opening (not inside). Pressing on these points releases tension on ligaments that attach in the tail end of the sacrum, relaxing the hind end & whole horse. This may be performed each time you see your horse. Practice 2-3 times weekly.",
    image: [M12]
  },
  [ExerciseCode.MS13]: {
    id: ExerciseCode.MS13,
    category: 'massage-stroke',
    header: 'Poll Wiggles',
    body: "Begin by gently resting your left hand on the horse's nose, just above the halter. This is the hand that will request the wiggles. Place the palm of your right hand 5 inches below & behind the horse's left ear. Next, slowly & gently begin to &quot;wiggle&quot; the horse's head from side-to-side by moving your left hand (that is resting on the horse's nose) back & forth, as if the horse is saying &quot;No&quot; with its head. As you continue the wiggling motion, your horse will yield & lower its head & neck down towards the ground. Once this happens, stop wiggling & praise your horse immediately. Repeat 2 more times. This can become part of your daily grooming routine. Practice 2-3 times weekly."
  },
  [ExerciseCode.MS14]: {
    id: ExerciseCode.MS14,
    category: 'massage-stroke',
    header: 'Massage Strokes for Hematoma',
    list: [
      '1. Petrissage - think of squeezing a pie crust closed.',
      '2. Draw a star shaped pattern with your finger creating drainage channels.',
      '3. Compress the area with your palm - think of the motion used when opening up a child proof medicine bottle.'
    ]
  },
  [ExerciseCode.MS15]: {
    id: ExerciseCode.MS15,
    category: 'massage-stroke',
    header: 'Jostle the Withers',
    body: 'Position your hands across the top of the withers. Gently push & pull the withers into & away from your body. Repeat this jostling motion for 10 breaths. Next, stand on the opposite side of the horse & repeat all of the above listed steps. This can become part of the daily grooming routine.',
    image: [M15, M15_0]
  },
  [ExerciseCode.UG1]: {
    id: ExerciseCode.UG1,
    category: 'unmounted-ground-stretches',
    header: 'Carrot Bowing Stretch',
    body: "This stretch should be performed AFTER the horse has worked. Use a carrot or treat to coax the horse to stretch his head & neck down towards horse's front feet. Place your hand so as to position horse to perform the required stretch. Start at horse's nose and move the carrot downwards so that your hand travels in between horse's forelegs, causing him to arch its neck and reach horse's muzzle through its front legs, towards horse's hind legs, to stretch the topline effectively. Hold this posture for about 5-8 seconds. Repeat 3 times.  Practice 2-3 times weekly."
  },
  [ExerciseCode.UG2]: {
    id: ExerciseCode.UG2,
    category: 'unmounted-ground-stretches',
    header: 'Carrot Bowing Stretch Variations',
    body: "Should be incorporated into the routine are to also ask the horse to stretch its head & neck to the RIGHT & LEFT, using a carrot. The idea is to coax horses head & neck fully to the RIGHT, so that horse's muzzle is just about touching the center of horse's barrel, and then slowly give horse the carrot, so that horse not only has to offer the bend, but also HOLD the bend for 5-7 seconds BEFORE horse is allowed to actually eat the carrot. Perform this stretch to the RIGHT & LEFT, 3 times PER side.  Practice 2-3 times weekly."
  },
  [ExerciseCode.UG3]: {
    id: ExerciseCode.UG3,
    category: 'unmounted-ground-stretches',
    header: 'Carrot Girth Stretch',
    body: 'Use a carrot or treat to slowly ask the horse to stretch its head around, over towards the girth/elbow area. Hold for 5-7 seconds before allowing the horse to eat the treat. Repeat 3 times on each side. This stretch may become part of your daily grooming routine. As the horse improves, increase the holding time to 10 seconds. This stretch strengthens the multifidus muscles, which are a network of joint crossing that form muscular connections between each vertebrae. These muscles move & stabilize the spine.'
  },
  [ExerciseCode.UG4]: {
    id: ExerciseCode.UG4,
    category: 'unmounted-ground-stretches',
    header: 'Carrot Stretches',
    body: "This stretch should be performed AFTER the horse has worked. Repeat this stretch on both sides of horse's body, 3 times on each side. Practice 2-3 times weekly.",
    list: [
      "1. Stand by the horse's side, and encourage the horse to reach backward, up towards his wither area to retrieve a piece of carrot from your hand...do not allow horse to take the carrot immediately, but rather hold the horse in that posture for 5 seconds, allowing the horse to only nibble on the treat, than let go of it fully and allow the horse to eat the entire piece.",
      "2. Stand by the horse's side, and encourage the horse to reach backward, toward the center of horse's barrel to retrieve a piece of carrot from your hand...do not allow the horse to take the carrot immediately, but rather hold the horse in that posture for 5 seconds, by allowing the horse to only nibble on the treat, before letting go of it fully, allowing the horse to eat the entire piece.",
      "3. Stand by horse's side, and encourage the horse to reach backward, up towards the top of horse's hip to retrieve a piece of carrot from your hand...do not allow the horse to take the carrot immediately, but rather hold the horse in that posture for 5 seconds, by allowing the horse to only nibble on the treat, before letting go of it fully, allowing the horse to eat the entire piece.",
      "4. Stand by the horse's side, and encourage horse to reach backward, behind the horse's hip to retrieve a piece of carrot from your hand...do not allow the horse to take the carrot immediately, but rather hold the horse in that posture for 5 seconds, by allowing horse to only nibble on the treat, before letting go of it fully, allowing the horse to eat the entire piece."
    ]
  },
  [ExerciseCode.UG5]: {
    id: ExerciseCode.UG5,
    category: 'unmounted-ground-stretches',
    header: 'Low Lateral Stretch',
    body: 'The goal of this exercise is to lift & flex the spine to the side, as well as flex the base of the neck. It also increases core stability, abdominal strength, back flexibility & suppleness. It is equivalent to the human version of sideways sit-ups.  Practice 2-3 times ',
    list: [
      "1. Stand with your back against the horse's ribs level with the girth line.",
      "2. Holding a carrot in the hand closest to the tail, encourage the horse to bring horse's head across your body.",
      "3. Bring the carrot down to just below your knee. Keep the carrot close to the horse's lips to keep the movements smooth.",
      '4. Hold the stretch for 5-10 seconds before allowing the horse to take the carrot.',
      '5. Repeat 2-3 times per session gradually increasing the stretch by taking the head further back.',
      '6. As the exercise becomes easier, stand nearer the tail.'
    ]
  },
  [ExerciseCode.UG6]: {
    id: ExerciseCode.UG6,
    category: 'unmounted-ground-stretches',
    header: 'Rotational Shoulder Stretch',
    body: 'This stretch should be performed AFTER the horse has worked. Pick up the front leg as if cleaning out the hoof, slowly, gently and fluidly pull the leg FORWARD, until you feel resistance, stop at that point and hold the stretch for 3 seconds. Next, while maintaining that forward position, move the leg in a clock-wise times, and then a counter-clockwise direction 3 times. Repeat on the other front leg...3 times per leg. Practice 2-3 times weekly.'
  },
  [ExerciseCode.UG7]: {
    id: ExerciseCode.UG7,
    category: 'unmounted-ground-stretches',
    header: 'Rotational Hip Stretch',
    body: 'This stretch should be performed AFTER the horse has worked.',
    list: [
      "1. Stand at your horse's left hind leg, facing backwards. Lift the leg, as if you were cleaning out the hoof. Hold the hoof in your right hand, and place your left hand around the cannon bone.",
      "2. Slowly draw 3 small circles, in a clock-wise direction, on the ground with the horse's toe. Next increase the size of the circles to 3 medium size, and finally finish with 3 large size circles. Now, while still holding the hoof, repeat the exercise in counter- clockwise direction...3 small counter-clockwise circles, 3 medium size counter- clockwise circles, finishing with 3 large size counter-clockwise circles.",
      "3. Always use extreme caution when working with the horse's hind limbs to avoid injury. Be sure your hands, feet, body and head are out of the way when performing all exercises and stretches.",
      '4. Make all movements slow and fluid. Avoid any sort of jerking, pulling or tugging movements. When your horse offers resistance STOP - do not force the limb in any direction it cannot go. If the horse attempts to pull the limb away from you, allow the horse to do so - never hold onto a limb when a horse is resistant.',
      '5. Repeat this stretch 2 times on each hind leg. Repeat this stretch 3 times per week. Practice 2-3 times weekly.'
    ]
  },
  [ExerciseCode.UG8]: {
    id: ExerciseCode.UG8,
    category: 'unmounted-ground-stretches',
    header: 'Knee Lift',
    body: "This stretch should be performed AFTER the horse has worked. While you are facing the horse's head, hold the horse's front leg with both of your hands behind, but above, the knee. Slowly lift the knee straight up towards a 45 degree angle with the shoulder. At the first sign of resistance, lower the knee a little until the horse relaxes, then continue to lift it gently to the limb's limit. Initially, it won't reach the 45 degree angle. Do not force the limb any further.	Hold the stretch for about 5-10 seconds.  Repeat 3 times on each front leg. Practice 2-3 times weekly."
  },
  [ExerciseCode.UG9]: {
    id: ExerciseCode.UG9,
    category: 'unmounted-ground-stretches',
    header: 'Hind Limb Rotational Stretch',
    body: "This stretch should be performed AFTER the horse has worked. The key element for the exercises and stretches to be effective is that they are performed consistently. This is crucial in the horse's recovery and response. Practice 2-3 times weekly.",
    list: [
      "1. Pick up the hind leg as if cleaning out the hoof, slowly/gently/fluidly pull the leg out FORWARD, until you feel resistance, stop at that point and hold the stretch for 5 seconds. Next, gently push the leg BACKWARD, so that it is extending AWAY from the horse's body, holding this posture for 5 seconds. Now, gently push the leg OUT to the side, AWAY from the horse's body, holding for 5 seconds. Finish by pushing the hind leg diagonally ACROSS, in front of, the horse's other hind leg, holding here for 5 seconds.",
      "2. Always use extreme caution when working with the horse's hind limbs to avoid injury. Be sure your hands, feet, body and head are out of the way when performing all exercises and stretches.",
      '3. Make all movements slow and fluid. Avoid any sort of jerking, pulling or tugging movements. When your horse offers resistance STOP - do not force the limb in any direction it cannot go. If the horse attempts to pull the limb away from you, allow the horse to do so - never hold onto a limb when a horse is resistant.',
      '4. Repeat on the other hind leg...2 times per leg. Repeat this stretch 3 times per week.'
    ]
  },
  [ExerciseCode.UG10]: {
    id: ExerciseCode.UG10,
    category: 'unmounted-ground-stretches',
    header: 'Whole Leg Stretch',
    body: "This stretch should be performed AFTER the horse has worked. Stand facing the horse's head. Pick the horse's foreleg up with one hand holding the foot and the other lightly on top of the knee. Slowly stretch the leg forwards, with the toe pointing towards your ankle. Stretch until the leg is straight. Ideally in this stretch the knee should be straight (the leg will be in a complete posture of extension), but do not push the knee. Hold the position for 5-15 seconds. The horse may initially push the horse's weight forwards and try to lean on your hands. Release the stretch slightly and use the horse's straight leg to push its weight backwards. When the horse has found its balance again, you may increase the stretch.  Practice 2-3 times weekly."
  },
  [ExerciseCode.UG11]: {
    id: ExerciseCode.UG11,
    category: 'unmounted-ground-stretches',
    header: 'Gluteal/Biceps Femoris Stretch',
    body: "This stretch should be performed AFTER the horse has worked. Stand at your horse's side, facing backwards. Pick up the hind leg, and hold the toe with both hands on either side of the hoof. Stretch the hind limb forward, in its normal movement pattern, towards the fetlock joint, keeping the whole leg straight. Bend your knees and rest your elbow on your knee to protect your back. Slowly lift the whole leg up, pointing the foot towards the elbow joint. Initially, the horse will only be able to stretch halfway. Keep his leg as straight as possible. He will eventually be able to stretch his leg up against his abdomen. Stretch until you feel resistance, then relax.  Hold this stretch for about 5-10 seconds.  Repeat 3 times on each hind limb.  Practice 2 times weekly."
  },
  [ExerciseCode.UG12]: {
    id: ExerciseCode.UG12,
    category: 'unmounted-ground-stretches',
    header: 'Simple Pectoral Stretch',
    body: 'This stretch should be performed AFTER the horse has worked. Stand in front of your horse.  Place your hands behind its knee and gently lift its leg and bring it forward so its forearm is almost parallel to the floor. Only do as much as your horse will tolerate. Hold this posture for 5 seconds. Repeat 3 times on each front leg. Practice 3 times weekly.'
  },
  [ExerciseCode.UG13]: {
    id: ExerciseCode.UG13,
    category: 'unmounted-ground-stretches',
    header: 'Tail Pull/Back Stretch',
    body: "This stretch should be performed AFTER the horse has worked. Carefully position yourself behind the tail and gently pull the tail backwards, holding for 5- 10 seconds. Think of creating taughtness equivalent to when a dog has reached the end of its leash.  The leash is not pulling back on the dog, it's simply taught.  Repeating 3 times. Practice 2-3 times weekly.",
    image: [UG13]
  },
  [ExerciseCode.UG14]: {
    id: ExerciseCode.UG14,
    category: 'unmounted-ground-stretches',
    header: 'Lunging Exercise',
    body: 'Trot over poles at a slow tempo, maintaining the cadence, encouraging the horse to stretch down. This helps to loosen the spine. It is important to maintain the rhythm for balance and strength. The exercise works for improving range of motion with respect to the back. Practice 2-3 times weekly.'
  },
  [ExerciseCode.UG15]: {
    id: ExerciseCode.UG15,
    category: 'unmounted-ground-stretches',
    header: 'Head Tilts',
    body: "Stand on your horse's left side, facing the same direction as the horse, directly next to its head. Place your right palm, open and flat, underneath your horse's right ear so your fingers are stretching towards the ceiling. Your palm is just below the ear, while your extended fingers touch the outer edge of the ear.  Place the open flat palm of your left on your horse's muzzle. Your palm is close to the nostril while your fingers extend upward toward your horse's cheek.  Gently, slowly and simultaneously push your right palm toward the left and the left palm toward the right. This causes the top of your horse's head to fall to the left and its muzzle to press up toward the right, creating a &quot;head tilt.&quot; Continue this motion until you feel resistance. Hold the stretch for 5-10 seconds. Gently and slowly release both of your hands, allowing your horse to have its head and neck free for a few moments. Repeat the stretch twice more on the left side. Perform the stretch three times on the right side. Release your hands and praise your horse vocally and with reassuring pats along the neck. Practice 2-3 times weekly.",
    image: [UG15]
  },
  [ExerciseCode.UG16]: {
    id: ExerciseCode.UG16,
    category: 'unmounted-ground-stretches',
    header: 'Neck Extension Stretch',
    body: "While the horse is standing in the aisle, place your open palm in the center of its chest, resting there.  Use your other free hand to hold a treat. Place the treat in front of your horse's nostril, and slowly pull your hand backwards away from the nostril so that the horse begins to stretch its neck forward, lengthening the head and neck as far as it can go, reaching in extension for the treat.  If your horse attempts to walk forward to get the treat, stop it by gently pushing on the chest with your hand that was resting there. Try and hold this neck extension posture for 5-10 seconds before allowing the horse to actually eat the treat.  Practice 3 times weekly."
  },
  [ExerciseCode.UG17]: {
    id: ExerciseCode.UG17,
    category: 'unmounted-ground-stretches',
    header: 'Hip Extension Stretch',
    body: "Stand at your horse's left hind leg facing backwards. Lift the leg as if you were cleaning out the hoof.  Cup the hoof in your right hand.  Place your left hand across the front of the cannon bone. Gently and slowly push the cannon bone, while supporting the hoof in the right hand extending the hind limb backwards, towards the wall behind the horse. The hind limb is extending backward away from the horse's body. STOP pushing the leg backwards when you feel resistance. Take a deep breath and hold the extension posture for 5 seconds. Be sure to bend your knees when performing this stretch to avoid straining one's back. Also, be aware of head and foot placement to avoid injury from the horse snatching its leg away, or kicking. Perform this stretch only after the horse has worked. If the horse attempts to pull its leg away from you, let go - never hold onto a limb. Begin by holding this stretch for 5 seconds and gradually increase to 7 seconds and then 10 seconds.  Repeat 3 times on each hind leg.  Practice 2 times weekly."
  },
  [ExerciseCode.UG18]: {
    id: ExerciseCode.UG18,
    category: 'unmounted-ground-stretches',
    header: 'Poll Stretch',
    body: 'Practice 2-3 times weekly.',
    list: [
      "1. Stand next to the horse, just behind his jaw, facing the horse's neck.",
      '2. Place your right hand on his neck just behind his poll and apply light pressure to prevent him from bending his neck toward you.',
      '3. With your left hand, hold the halter nosepiece and draw just his head toward you. You want only his head to swivel toward you, while his neck remains straight. Be sure his ears and nostrils remain level - this indicates that he is not tipping his head...which you do not want.',
      '4. Hold the stretch approximately 5-10 seconds.  Repeat 3 times on each side.'
    ]
  },
  [ExerciseCode.UG19]: {
    id: ExerciseCode.UG19,
    category: 'unmounted-ground-stretches',
    header: 'Tail Rotations',
    body: 'This stretch should be performed AFTER the horse has worked.',
    list: [
      "1. Stand slightly off to the side of your horse's tail, behind the hip on one side.",
      '2. Hold the dock of the tail (about 4 inches from the top of the tail) with both hands and lift gently straight up 2-4 inches.',
      '3. Make small circular motions with the tail, circling in each direction (clock-wise & counter-clockwise) 10 rotations.',
      '4. Be sure circles are evenly sized in both directions of rotations.',
      '5. Move slowly in this stretch so the horse does not clamp its tail.',
      '6. You can get your horse to relax by gently rubbing the hairless underside at the dock.',
      '7. Once horse relaxes, move into the circling motions.',
      '8. You may vary the circle sizes as well to reflect small, medium & large size circles when executing this exercise.'
    ]
  },
  [ExerciseCode.UG20]: {
    id: ExerciseCode.UG20,
    category: 'unmounted-ground-stretches',
    header: 'Ear Rotations',
    body: 'Perform this exercise BEFORE & AFTER the horse is worked. Practice 2-3 times weekly.',
    list: [
      "1. Stand beside the horse's neck, facing the neck.",
      "2. Gently grasp the horse's ear with your hand, cupping the hand around the ear, holding on strong enough so that you can manipulate the ear, but not so tight that you are squeezing the ear. While you are doing this, speak to your horse in a positive manner, praising and reassuring him, as some horses become concerned when their ears are touched.",
      '3. Make small circular motions with the ear, circling in each direction (clock-wise & counter-clockwise) 10 rotations.',
      '4. Be sure circles are evenly sized in both directions of rotations.',
      '5. Move slowly in this stretch so the horse does not become worried',
      '6. You are looking to see and feel that the ear becomes loose, and easier to move as the rotations are performed.  Work both ears in this manner.'
    ]
  },
  [ExerciseCode.UG21]: {
    id: ExerciseCode.UG21,
    category: 'unmounted-ground-stretches',
    header: 'Hip Abduction/Extension Stretch',
    body: 'This stretch should be performed AFTER the horse has worked.',
    list: [
      "1. Stand at your horse's left hind leg, facing backwards. Lift the leg, as if you were cleaning out the hoof. Cup the hoof in your right hand. Place your left hand across the front of the cannon bone.",
      "2. Gently and slowly push the cannon bone, while supporting the hoof in the right hand, out to the side (abduction), away from the horse's body. When you feel resistance, stop and hold this position for 5 seconds.  Next (without lowering the leg), move the limb so that it is extending the hind limb backwards, towards the wall behind the horse. The hind limb is extending backward, away from the horse's body. STOP pushing the leg backwards when you feel resistance. Take a deep breath and hold the extension posture for 5 seconds. Be sure to bend your knees when performing this stretch to avoid straining one's back.  Also, be aware of head and foot placement to avoid injury from the horse snatching its leg away, or kicking.",
      "3. Repeat this sequence; hind limb moved out to the side, away from the horse's body, holding for 5 seconds, to hind limb extended backward, holding for 5 seconds for three repetitions.",
      '4. If the horse attempts to pull its leg away from you, let go - never hold onto a limb.',
      '5. Repeat this sequence stretch 3 times on each hind leg. Practice 2-3 times weekly.'
    ]
  },
  [ExerciseCode.UG22]: {
    id: ExerciseCode.UG22,
    category: 'unmounted-ground-stretches',
    header: 'Lateral Cervical Flexion',
    body: 'This stretch should be performed AFTER the horse has worked. Practice 2-3 times weekly.',
    list: [
      "1. Standing next to the left shoulder, place your left hand on the horse's nose and your right hand about 4 inches below and behind the ear.",
      '2. Gently flex the nose toward you with your left hand and apply light pressure toward the opposite ear with your right hand. You are requesting the horse to relax the atlas.  Watch for the eye to relax, feeling for a release of tension in the poll.',
      '3. Move your right hand about 3 inches down the neck vertebrae. Keep your left hand on the nose.',
      "4. Gently flex the horse's head toward you with the left hand, pushing gently away with the right hand. Bring the nose toward the shoulder, stepping back as you go.",
      '5. Relax both hands again and move the right hand farther down the vertebrae of the neck (towards the direction of the shoulder).',
      "6. Bring the horse's nose farther back toward the shoulder each time until you have brought the head all the way back to the shoulder and your hand all the way down to the lower vertebrae of the neck. As the horse relaxes, gently rock the head and neck with both hands as you go.",
      '7. Step back and allow the horse to release. Repeat on the other side. Perform this stretch slowly, fluidly and with patience and praise.'
    ]
  },
  [ExerciseCode.UG23]: {
    id: ExerciseCode.UG23,
    category: 'unmounted-ground-stretches',
    header: 'Jaw Tilts',
    body: 'This stretch should be performed AFTER the horse has worked. Practice 2-3 times.',
    list: [
      '1. Stand on the left side of the horse, facing forward.',
      "2. Place your right hand around the halter piece that lies just below the ear on the right side of your horse, and your left, open palm underneath the horse's chin.",
      '3. Slowly & gently press your left open palm upward, into the chin, causing the head to rise upward, extending the jaw. Hold this posture for 5 seconds.',
      '4. Repeat 3 times. '
    ],
    image: [UG23]
  },
  [ExerciseCode.UG24]: {
    id: ExerciseCode.UG24,
    category: 'unmounted-ground-stretches',
    header: 'Lifting the Hind Limbs',
    body: 'Practice 2-3 times weekly.',
    list: [
      "1. Position your horse so that horse is standing squarely along a fence or wall, facing the fence or wall, so that there will be a barrier in front of horse, preventing horse from walking forward. Do your best to be accurate in the &quot;squareness&quot; of the foot placement.  So the horse's weight is evenly distributed over all 4 feet.",
      '2. Ask the horse to relax its head and neck so that its back is rounded, not hollow. Ideally, have horse lower his head so that his poll and withers are at the same height...perhaps coaxing with a treat would be helpful or gently pressing down on the nosepiece of the halter.',
      '3. Keeping the neck stretched (be patient), reach back with a long whip and gently tap horse near hind limb until horse raises that foot off the ground.',
      '4. Change direction along the fence/wall line and repeat with the opposite hind limb.',
      '5. Gradually progress to having horse flex the leg and hold the foot in the air for up to 7 seconds (achieve this by gently tapping the limb again when the horse tries to put the foot back on the ground.)',
      '6. Every horse responds differently to whip cues. Some horses will lift their hind limbs when asked with a light tap near the middle of the cannon bone, but others will be more responsive to the area just below the hock or on the inside of their legs. Experiment and see what works best for your horse, and offer great praise whenever horse even attempts to do what you are requesting of it.'
    ]
  },
  [ExerciseCode.UG25]: {
    id: ExerciseCode.UG25,
    category: 'unmounted-ground-stretches',
    header: 'Front Limb Extension Stretch',
    body: "This stretch should be performed AFTER the horse has worked. Pick the horse's foreleg up, as if cleaning out the foot. Position one hand underneath the knee to support the joint, & the other hand underneath the hoof to support it. Slowly stretch the leg forwards, while keeping one hand under the knee. Stretch the leg into extension, thinking of the limb becoming almost straight. Ideally in this stretch the knee should be straight (the leg will be in a complete posture of extension), but do not push the knee, rather support the knee from underneath with your hand. Hold the position for 5-15 seconds. The horse may initially push the horse's weight forwards and try to lean on your hands. Release the stretch slightly and when the horse has found its balance again, you may increase the stretch. Make all movements slowly & do not force anything. When stretching the limb, be aware of the horse's limitations, when the limb feels stuck, stop at that point & count the seconds...never force a limb beyond it's limits. Repeat 3 times on each front leg. Practice 2-3 times weekly."
  },
  [ExerciseCode.UG26]: {
    id: ExerciseCode.UG26,
    category: 'unmounted-ground-stretches',
    header: 'Hind Limb Extension Stretch',
    body: "(A new way to pick out hind feet) Stand at your horse's left hind leg facing backwards. Lift the leg as if you were cleaning out the hoof. Cup the hoof in your right hand.  Place your left hand across the front of the cannon bone.  Gently and slowly push the cannon bone, while supporting the hoof in the right hand extending the hind limb backwards, towards the wall behind the horse. The hind limb is extending backward away from the horse's body. STOP pushing the leg backwards when you feel resistance. Take a deep breath and hold the extension posture for 5 seconds. Be sure to bend your knees when performing this stretch to avoid straining one's back. Also, be aware of head and foot placement to avoid injury from the horse snatching its leg away, or kicking. Perform this stretch only after the horse has worked. If the horse attempts to pull its leg away from you, let go - never hold onto a limb. Pick out the foot & return the foot to the ground.  Perform on each hind leg.  Practice 2-3 times weekly."
  },
  [ExerciseCode.UG27]: {
    id: ExerciseCode.UG27,
    category: 'unmounted-ground-stretches',
    header: 'Cross Pick',
    body: 'Pick both front & hind limbs from opposite side when cleaning the feet out daily. '
  },
  [ExerciseCode.UG28]: {
    id: ExerciseCode.UG28,
    category: 'unmounted-ground-stretches',
    header: 'Hay Bale Exercise',
    body: 'Place a hay bale on level ground. Lead the horse straight up to the hay bale & stop. Encourage the horse to step very slowly over the hay bale, one hoof at a time. When the horse lifts his leg up to step over the bale, praise him. Repeat a few times, back & forth, 2-3 times weekly.'
  },
  [ExerciseCode.UG29]: {
    id: ExerciseCode.UG29,
    category: 'unmounted-ground-stretches',
    header: 'Hind Limb Adduction Stretch',
    body: 'Pick up the hind limb as if cleaning out the hoof. Slowly, smoothly & fluidly push that limb across & in front of the planted hind limb (think of Leg Yielding). The elevated hind limb will now be crossing in front of the planted hind limb. Stop when you feel resistance & count for 5-10 seconds. Never force the limb, once you feel resistance or &quot;stickiness,&quot; stop & begin counting. At first the horse may only be able to hold this position for 2 or 3 seconds. Each time you perform this stretch try to add 1 or 2 seconds on so that you will eventually be able to hold the stretch for 10 seconds. This takes time & is a long term goal. Please be patient. If the horse struggles at any point, please release the leg gently down to the ground. Perform this stretch AFTER the horse has worked, 3 times on each hind leg, 2-3 times weekly.'
  },
  [ExerciseCode.UG30]: {
    id: ExerciseCode.UG30,
    category: 'unmounted-ground-stretches',
    header: 'Front Limb Abduction Stretch',
    body: "Pick up the front leg as if cleaning out the hoof. Place your inside hand, open palm, against the inside of the knee. Your other hand will be holding the hoof. Slowly, gently & fluidly push the leg AWAY from the horse's body...OUT TO THE SIDE, with your inside hand, as if you were gently opening up a bird's wing. When you feel resistance, stop at that point & hold the stretch for 5-10 seconds. Move the limb back to its normal position & place it down slowly, returning it to the ground. Repeat this request 3 times on each front leg, AFTER the horse has worked. Practice 2-3 times weekly."
  },
  [ExerciseCode.UG31]: {
    id: ExerciseCode.UG31,
    category: 'unmounted-ground-stretches',
    header: 'Pelvis Tucks',
    body: 'Practice 2-3 times weekly',
    list: [
      '1. Stand behind the horse.',
      '2. Tuck the tips of each thumb just under the dock of the tail.',
      '3. Extend your fingers straight up to form a &quot;box&quot; with your thumbs.',
      "4. Apply direct pressure into the horse's buttocks muscle with the tips of your index fingers.",
      '5. If the horse does not immediately tuck its pelvis away from that pressure, try a scratching motion.',
      '6. Repeat 3 times.',
      '7. You may need to alter your hand position slightly to find the exact area that is sensitive to create the &quot;tucking&quot; reaction that you are seeking. As always, please use caution when working behind the horse.'
    ]
  },
  [ExerciseCode.UG32]: {
    id: ExerciseCode.UG32,
    category: 'unmounted-ground-stretches',
    header: 'Quadricep Exercises',
    body: "Stand next to the hind end of the horse. Position yourself so that you are facing the hind leg. Stand with one of your legs in front of the other. Take hold of the horse's tail and gently, slowly, pull it sideways towards you, until you have achieved full tension. Hold this posture for 10 seconds. In the beginning, the horse may only be able to hold this posture for 1-2 seconds…the long term goal is that the horse will hold it for 10 seconds on each side. Execute this 3 times on each side. Compare which side the horse does better on. As always use extreme caution when working around the hind end of the horse.  Perform this exercise 3 times per week."
  },
  [ExerciseCode.UG33]: {
    id: ExerciseCode.UG33,
    category: 'unmounted-ground-stretches',
    header: 'Swaying Exercise',
    body: 'This exercise can be performed after work. Practice 2-3 times weekly.',
    list: [
      '1. Stand on the left side of your horse, facing its side, next to the hip area.',
      "2. Place your right hand on top of the horse's tail head, using a lightly closed hand to grasp this area.",
      "3. Position your left hand lightly on the horse's mid-back region.",
      '4. Gently sway your horse away from you & then in towards you by using your right hand (the hand positioned on the tail head). Think of pushing the horse away from you & gently pulling it back in towards you...just like an ocean waves calmly moves in & out.',
      '5. Find a slow, consistent rhythm that works well for your horse. Spend 1-2 minutes on each side of your horse executing this motion.',
      '6. Try to exhale when you push your horse away & inhale when you pull your horse towards you.',
      '7. Be mindful of which side is easier to move your horse from.'
    ]
  },
  [ExerciseCode.UG34]: {
    id: ExerciseCode.UG34,
    category: 'unmounted-ground-stretches',
    header: 'Modified Swaying Exercise',
    body: 'Rather than pushing & pulling the horse back & forth in a swaying motion, &quot;wiggle&quot; the tail back & forth, in shorter, wicker movements to loosen the hind end & back regions.'
  },
  [ExerciseCode.UG35]: {
    id: ExerciseCode.UG35,
    category: 'unmounted-ground-stretches',
    header: 'Rein-Back on a Curve',
    list: [
      '1. Designate a 10-meter circle using small cones or other markers.',
      '2. Stand facing your horse, outside the cones.',
      '3. Ask horse to back up 3 straight strides to start.',
      '4. Once you have momentum, gently guide the horses shoulders slightly toward your left (away from you), and allow horses hind end to swing to the right.',
      '5. Continue walking horse backward around the 10-meter arc that you are now on.',
      "6. If horse loses the circle, or gets stuck, you might need a long whip on the outside of horse's body to keep horse on the circle.",
      '7. Go halfway around the circle, than stop and praise horse.',
      '8. Finish the circle. Work your way up to being able to do the entire circle in one steady flow.',
      '9. Repeat in the opposite direction.',
      '10. If your horse shows signs of concern, or braces into a bad posture when on the curve line, go back to rein-back on a straight line to relax horse.',
      '11. Perform this exercise 3 times per week, before or after horse has worked. (If time allows, it would be ideal to perform this before & after horse has worked). Practice 2-3 times weekly.'
    ]
  },
  [ExerciseCode.UG36]: {
    id: ExerciseCode.UG36,
    category: 'unmounted-ground-stretches',
    header: 'Lateral Cervical Flexion',
    body: 'Practice 2-3 times weekly.',
    list: [
      "1. Standing next the horse's left shoulder, place your left hand on the horse's nose and your right hand about 4 inches below and behind the ear.",
      '2. Gently flex the nose toward you with your left hand and apply light pressure toward the opposite ear with your right hand. You are requesting the horse to relax the atlas.  Watch for the eye to relax, feeling for a release of tension in the poll.',
      '3. Move your right hand about 3 inches down the neck vertebrae. Keep your left hand on the nose.',
      "4. Gently flex the horse's head toward you with the left hand, pushing gently away with the right hand. Bring the nose toward the shoulder, stepping back as you go.",
      '5. Relax both hands again and move the right hand farther down the vertebrae of the neck (towards the direction of the shoulder).',
      "6. Bring the horse's nose farther back toward the shoulder each time until you have brought the head all the way back to the shoulder and your hand all the way down to the lower vertebrae of the neck. As the horse relaxes, gently rock the head and neck with both hands as you go.",
      '7. Step back and allow the horse to release. Repeat on the other side. Perform this stretch slowly, fluidly and with patience and praise.'
    ]
  },
  [ExerciseCode.UG37]: {
    id: ExerciseCode.UG37,
    category: 'unmounted-ground-stretches',
    header: 'Front Limb Adduction Stretch',
    body: "Pick up the front leg as if cleaning out the foot. Gently push the front leg diagonally across the front of the horse's body, attempting to touch the horse's toe to the ground. Allow the horse to retract that front leg & place it down in its normal stance. Repeat three times on each front leg. Practice 3 times weekly. This stretch should be performed AFTER the horse has worked. Please see the accompanying picture.",
    image: [UG37]
  },

  [ExerciseCode.PE1]: {
    id: ExerciseCode.PE1,
    category: 'pole-and-cavaletti-exercises',
    header: 'Ground Rail Exercise',
    body: 'Trot over poles at a slow tempo, maintaining the cadence, encouraging the horse to stretch down. This helps to loosen the spine. It is important to maintain the rhythm for balance and strength, and the stretch for improved range of motion. Set the poles so that each rail is raised on one end only, alternating, so the 1st pole is raised only on its right side, the 2nd pole is raised only on its left side, the 3rd rail is raised only on its right side and so on...set 4-6 poles in this fashion if possible. As a result, the horse has to pick up its legs and bend those joints to accommodate the raised rails. The distance between the poles in either exercise is 4-5 feet apart. Practice 2-3 times weekly.'
  },
  [ExerciseCode.PE2]: {
    id: ExerciseCode.PE2,
    category: 'pole-and-cavaletti-exercises',
    header: 'Hunter Course',
    body: 'Set up a basic hunter course (line, diagonal, line) using ground rails only. Practice cantering this course in a long & low frame...trying to get longer & lower over each rail, as well as each time the course is ridden. It will not be easy & it will take time to achieve, but may be quite beneficial.'
  },
  [ExerciseCode.PE3]: {
    id: ExerciseCode.PE3,
    category: 'pole-and-cavaletti-exercises',
    header: 'Circles & poles',
    body: 'Practice 2-3 times weekly',
    list: [
      '1. Set up several rails down the center line of the arena in the following pattern (beginning at A, continuing through X, down towards C).',
      "2. In the sitting trot, ride directly over the center of each pole, consistently changing rein, in a sense, riding a modified serpentine down the centerline, as you cross over each pole (changing direction as you cross over each pole). Be sure to ride directly over the center of each pole, AFTER changing the horse's bend for the new direction.",
      '3. If the horse becomes tense or &quot;bracey,&quot; modify the serpentine to go over each rail twice (or more) before changing direction.'
    ],
    image: [PE3]
  },
  [ExerciseCode.PE4]: {
    id: ExerciseCode.PE4,
    category: 'pole-and-cavaletti-exercises',
    header: 'Mounted Trot Over Alternately Raised Ground Rails',
    body: 'Set 3-5 ground rails, with 2 trot strides in between each, so that each end of the ground rail is raised several inches off the ground alternately (1st rail raised only on the RIGHT side, 2nd rail raised only on the LEFT side, 3rd rail raised only on the RIGHT side etc.), and trot through them several times in each direction in the rising trot, sitting trot and 2-point position. Practice 2-3 times weekly.'
  },
  [ExerciseCode.PE5]: {
    id: ExerciseCode.PE5,
    category: 'pole-and-cavaletti-exercises',
    header: 'Conditioning Exercise',
    body: 'Work in all gaits over elevated (3 inches) ground rails, spreading them apart about 4-5 feet, using 4-6 poles - this will encourage horse to extend his step, as well as lift it limbs upward (towards the sky), to aid in loosening the glute, as well as the hip. Practice 2-3 times weekly.'
  },
  [ExerciseCode.PE6]: {
    id: ExerciseCode.PE6,
    category: 'pole-and-cavaletti-exercises',
    header: 'Stretching on a Circle Over Rails',
    body: 'Set up 4 ground rails in a &quot;cross&quot; pattern (see below) - Lay the poles out on a 20 meter circle and ride the same stretch throughout the pattern. Encouraging the horse to extend his head and neck long and low, while maintaining a bend to the inside (around your inside leg), moving forward off of your outside leg. Seek the center of each rail, as you ride across them. Ride this pattern in the walk and then in rising trot. Remember to turn your body in as well (turn your eyes, neck, shoulders, collar bone, belt buckle and hips) so that your body is truly riding a circular track. In between circling over the poles, go around the whole arena keeping the stretch (long, low extended head & neck)...this should give the horse confidence to move around the school in a big, elastic stride, in balance and not relying on your reins for support. If however, he rushes off, you need to half-halt several times to rebalance him on his hind limbs - returning to the poles will help. Poles in this &quot;cross&quot; pattern encourage more activity of the hind limbs and back muscles during stretching. Practice 2-3 times weekly.',
    image: [PE6]
  },
  [ExerciseCode.PE7]: {
    id: ExerciseCode.PE7,
    category: 'pole-and-cavaletti-exercises',
    header: 'Poles Set Out In A &quot;Fan&quot; Pattern',
    list: [
      '1. Arrange 3-4 poles in a fan shape, about 4 feet apart. By setting the poles in a fan shape, the horse will be encouraged to work in a bend.',
      '2. Work in the walk & trot, in both directions over the poles.',
      '3. Keep to the inner side of the poles for walk.',
      '4. Ride over the poles for 3 minutes at a time in each direction. Then go off & do something else for several minutes. Practice the 3 minutes sessions 4 times per ride.'
    ]
  },
  [ExerciseCode.PE8]: {
    id: ExerciseCode.PE8,
    category: 'pole-and-cavaletti-exercises',
    header: 'Ground Pole Exercise',
    body: 'This is a wonderful way to warm-up, practicing this exercise at the beginning of each ride. Practice 2-3 times weekly.',
    list: [
      '1. Set up five ground poles on level ground. Arrange the rails so that the horse can walk comfortably over each rail without taking a stride between any of them.',
      '2. Ask the horse to walk back and forth over the rails, in both directions until you notice the horse stretch & lower its head, lift its hind legs up well, and develop a steady pace across the rails (nothing rushed, nor anything stuck or hindered - think of looking for a rhythm in which the horse is nicely marching across the poles.)',
      '3. Each day will vary; there may be days in which the horse stretches easily, relaxing into a gentle rhythm after just a few minutes, while it may take longer on other days. Be patient and allow the back to loosen.'
    ]
  },
  [ExerciseCode.PE9]: {
    id: ExerciseCode.PE9,
    category: 'pole-and-cavaletti-exercises',
    header: 'Crossed Poles Square: Volte',
    body: 'You will need 4 ground poles for this. You will be constructing a square. Lay each pole so that one end is on the ground & the other end lies on top of another pole. Begin by riding the horse in a large circle that includes going over the whole crossed poles square, then move to smaller voltes. The diameter of the volte determines greater or lesser longitudinal bend in your horse.  Once the horse circles nicely over one corner of the square, move to the next corner & ride a circle, then ride diagonally across the square to circle over the far corner of the square. Continue on in this manner so that you have circled over each corner of the square. If you have ridden the first corner on left rein, ride the second corner on left rein, third corner on right rein & final corner on right rein. Practice for several minutes in each direction after warm up & again prior to cool down. Practice 2-3 times weekly.',
    image: [PE9]
  },
  [ExerciseCode.PE10]: {
    id: ExerciseCode.PE10,
    category: 'pole-and-cavaletti-exercises',
    header: 'Leg-Yield Over a Pole',
    body: "Align the horse's front end in front of the pole as you might the wall of the riding ring. The pole serves as a visual aid to situate horse & rider. (Please see photo) Start with 2 or 3 steps of leg-yielding over the pole & gradually increase the number of steps over the rail as your horse becomes comfortable executing the exercise. Shift your weight in the saddle slightly in the direction of movement. The horse is flexed away (counter bent) from the direction of movement. Your outside leg is applied behind the girth & your inside leg pushes the horse forward & sideways at the girth. Maintain the outside rein against the horse's neck & keep a light contact on the inside rein to maintain flexing. Be careful not to over flex the horse's neck. Focus on keeping a steady rhythm & fluid movement. (Please see photo)  Practice 2-3 times weekly.",
    image: [PE10]
  },
  [ExerciseCode.PE11]: {
    id: ExerciseCode.PE11,
    category: 'pole-and-cavaletti-exercises',
    header: '&quot;Pasture Posture&quot; Ground Rails Exercise',
    body: 'Set 4 ground rails, about 4-5 feet apart, in a straight line. Practice walking & trotting over them in &quot;Pasture Posture.&quot;  Horses are designed to graze approximately 18 hours per day, therefore one of the most comfortable & most natural postures for their body to maintain is the position they are in when grazing on grass...&quot;Pasture Posture.&quot; Try to recreate this posture by slowly bringing their chin in towards their chest for several seconds & slowly letting the reins out to allow them to stretch down into &quot;Pasture Posture&quot; while sending them forward with leg...the goal is to send them on from their hind end, while they are stretching their head & neck down freely, as if to graze...this may aid in lifting the abdominal muscles, while stretching the topline (hindquarters, back & neck). It may take time, so please be patient. Practice this in both directions, over the poles, at the walk. Once confirmed, practice in trot. This is a wonderful way to both warm up & cool down when riding.  Practice 2-3 times weekly'
  },
  [ExerciseCode.PE12]: {
    id: ExerciseCode.PE12,
    category: 'pole-and-cavaletti-exercises',
    header: 'Hills & Cavalettis',
    body: 'Choose a mild hill...Walking & trotting uphill & downhill over cavaletti may be helpful at this time. You may begin with one Cavalettis & continue to add others to create any sort of pattern you wish. Practice for several minutes, in both directions, 2-3 times weekly'
  },
  [ExerciseCode.PE13]: {
    id: ExerciseCode.PE13,
    category: 'pole-and-cavaletti-exercises',
    header: 'Slow Cavalettis',
    body: 'Set up 4 cavaletti, 6 inches in height, 3 feet apart. Practice walking over them slowly for several minutes in both directions. Next, walk over them even slower in both directions several times. Finally, walk over them as if thinking of halting in between each one, but not actually halting. It is the slowness that builds strength. Practice 2 times weekly.'
  },
  [ExerciseCode.PE14]: {
    id: ExerciseCode.PE14,
    category: 'pole-and-cavaletti-exercises',
    header: 'Walking Over Alternately Raised Ground Rails',
    body: 'Set 4 ground rails, about 3 feet apart, in a straight line, so that each end of the ground rail is raised several inches off the ground alternately (1st rail raised only on the RIGHT side, 2nd rail raised only on the LEFT side, 3rd rail raised only on the RIGHT side etc.). Practice walking over them in both directions for 10 minute sessions, 2-3 times weekly.'
  },
  [ExerciseCode.PE15]: {
    id: ExerciseCode.PE15,
    category: 'pole-and-cavaletti-exercises',
    header: 'Ride a Circle Round the Outside of the poles',
    body: "Brilliant exercises for those with little equipment and particularly for those who are on their own. You just need to set the four poles out before you get on, then all the exercises can be ridden without changing anything. You can get a good couple of 40min schooling sessions out of these and there is something here suitable for every horse, from wobbly baby to 4* hopeful. I generally set them out so that the center of each pole lies on a 20m circle with a pole at each of the four compass points (or 3, 6, 9 and 12 o'clock if you prefer!), but you can adjust the diameter according to your arena size and the level of schooling of your horse. Ride a circle round the outside of the poles.  This can be done in walk, trot and canter and on both reins. As with all these exercises try to ensure a consistent curve through the horse's body and don't be tempted to use too much inside rein. More advanced horses can also ride a circle round the inside of the poles.",
    image: [PE15]
  },
  [ExerciseCode.PE16]: {
    id: ExerciseCode.PE16,
    category: 'pole-and-cavaletti-exercises',
    header: 'Ride Small Circle Round pole',
    body: "Brilliant exercises for those with little equipment and particularly for those who are on their own. You just need to set the four poles out before you get on, then all the exercises can be ridden without changing anything. You can get a good couple of 40min schooling sessions out of these and there is something here suitable for every horse, from wobbly baby to 4* hopeful. I generally set them out so that the center of each pole lies on a 20m circle with a pole at each of the four compass points (or 3, 6, 9 and 12 o'clock if you prefer!), but you can adjust the diameter according to your arena size and the level of schooling of your horse. Ride the circle round the outside of the poles, but every time you pass a pole make a small circle round it. These can start off quite large and get smaller as your horse warms up. Again try to ensure a consistent bend through the body, prevent the shoulders falling out on the smaller circles and avoid overuse of the inside rein. Try opening the inside hand a little if necessary. This can be ridden in walk and trot on both reins, and also in canter on a more advanced horse.",
    image: [PE16]
  },
  [ExerciseCode.PE17]: {
    id: ExerciseCode.PE17,
    category: 'pole-and-cavaletti-exercises',
    header: "Ride a 'Clover-Leaf' Pattern",
    body: "Brilliant exercises for those with little equipment and particularly for those who are on their own. You just need to set the four poles out before you get on, then all the exercises can be ridden without changing anything. You can get a good couple of 40min schooling sessions out of these and there is something here suitable for every horse, from wobbly baby to 4* hopeful.  I generally set them out so that the center of each pole lies on a 20m circle with a pole at each of the four compass points (or 3, 6, 9 and 12 o'clock if you prefer!), but you can adjust the diameter according to your arena size and the level of schooling of your horse. Ride a 'clover-leaf' pattern concentrating on keeping the horse absolutely straight on the straight sections then allowing correct bend round the turns. Try to make sure the three-quarter circles in each corner are the same size and that you have control of the horse's quarters when returning onto the straight line. This one is quite difficult to ride correctly and isn't suitable for cantering!  Again, ride in both directions.",
    image: [PE17]
  },
  [ExerciseCode.PE18]: {
    id: ExerciseCode.PE18,
    category: 'pole-and-cavaletti-exercises',
    header: 'Figure of 8 with a Change of Leg',
    body: "Brilliant exercises for those with little equipment and particularly for those who are on their own. You just need to set the four poles out before you get on, then all the exercises can be ridden without changing anything. You can get a good couple of 40min schooling sessions out of these and there is something here suitable for every horse, from wobbly baby to 4* hopeful. I generally set them out so that the center of each pole lies on a 20m circle with a pole at each of the four compass points (or 3, 6, 9 and 12 o'clock if you prefer!), but you can adjust the diameter according to your arena size and the level of schooling of your horse. Figure of 8 with a change of leg - ride this in canter, making the loops at either end equally sized. Depending on the stage of schooling of your horse change legs in the canter either through trot, walk (simple change) or make a flying change. Try to make your change (whichever sort you choose to do) exactly over the center and keep the horse straight in its body through the change - no swinging its head and neck to the opposite side to make sure it strikes off correctly!  Again, repeat on both reins.",
    image: [PE18]
  },
  [ExerciseCode.PE19]: {
    id: ExerciseCode.PE19,
    category: 'pole-and-cavaletti-exercises',
    header: 'Starting flying changes',
    body: "Brilliant exercises for those with little equipment and particularly for those who are on their own. You just need to set the four poles out before you get on, then all the exercises can be ridden without changing anything. You can get a good couple of 40min schooling sessions out of these and there is something here suitable for every horse, from wobbly baby to 4* hopeful. I generally set them out so that the center of each pole lies on a 20m circle with a pole at each of the four compass points (or 3, 6, 9 and 12 o'clock if you prefer!), but you can adjust the diameter according to your arena size and the level of schooling of your horse. Starting flying changes: This can be used to teach horses to change legs across the center of the school. As the horse takes off over the pole push your new inside leg forward, new outside leg back, flex its head and neck slightly to the new direction and look in the direction you wish to go. Hopefully the horse will use the pole to make a nice neat change and land on the new leading leg. This is only suitable for more advanced horses who are adjustable in the canter.",
    image: [PE19]
  },
  [ExerciseCode.PE20]: {
    id: ExerciseCode.PE20,
    category: 'pole-and-cavaletti-exercises',
    header: 'Ride a large oval',
    body: "Brilliant exercises for those with little equipment and particularly for those who are on their own. You just need to set the four poles out before you get on, then all the exercises can be ridden without changing anything. You can get a good couple of 40min schooling sessions out of these and there is something here suitable for every horse, from wobbly baby to 4* hopeful.  I generally set them out so that the center of each pole lies on a 20m circle with a pole at each of the four compass points (or 3, 6, 9 and 12o'clock if you prefer!), but you can adjust the diameter according to your arena size and the level of schooling of your horse. Ride a large oval (with nice rounded half-circle ends, not pointy ones like in the diagram!) incorporating two of the poles.  You can ride this in walk, trot or canter and on both reins. You can also change and ride over the other two poles instead which will give a slightly different exercise, as unless you have an enormous arena you will be restricted by the fence and have to ride more accurate half-circles without drifting. Make sure you stay straight before and after the poles and ride smoothly round the corners without letting the shoulders fall out.",
    image: [PE20]
  },
  [ExerciseCode.PE21]: {
    id: ExerciseCode.PE21,
    category: 'pole-and-cavaletti-exercises',
    header: 'Ride the Circle Incorporating All of the Poles',
    body: "Brilliant exercises for those with little equipment and particularly for those who are on their own. You just need to set the four poles out before you get on, then all the exercises can be ridden without changing anything. You can get a good couple of 40min schooling sessions out of these and there is something here suitable for every horse, from wobbly baby to 4* hopeful. I generally set them out so that the center of each pole lies on a 20m circle with a pole at each of the four compass points (or 3, 6, 9 and 12 o'clock if you prefer!), but you can adjust the diameter according to your arena size and the level of schooling of your horse. Ride the circle incorporating all of the poles. This is seriously tricky to do accurately. As before you need to be constantly aware of the shoulders and quarters falling in and out and you'll find that the poles come up very quickly. There are generally 3 or 4 canter strides between poles depending on the size of horse and size of circle.  Try to hit each pole exactly in the center and get the same number of strides round each quarter of the circle. Counting out loud is helpful!",
    image: [PE21]
  },
  [ExerciseCode.PE22]: {
    id: ExerciseCode.PE22,
    category: 'pole-and-cavaletti-exercises',
    header: 'Hand Walk Over Alternately Raised Poles',
    body: 'Set 2 ground rails approximately 2 feet apart. Raise each ground rail, about 6 inches off of the ground, in an alternating manner. For example, raise the first pole on the Right side only & raise the second pole on the Left side only. Practice hand walking the horse over these poles for several minutes (5-10 minutes) in each direction. Practice 2-3 times weekly. If you feel comfortable, you may also practice this exercise while mounted, in the same fashion, at the walk.'
  },
  [ExerciseCode.PE23]: {
    id: ExerciseCode.PE23,
    category: 'pole-and-cavaletti-exercises',
    header: 'Ground Pole Square; Figure Eight',
    body: "You will need 4 ground rails to create this square shape on the ground. Set each rail so that on end lyes on the ground & the other end actually lyes on top of another ground rail. Set the ground rails approximately 6 1/2 feet apart. This distance may be modified according to the horse's length of stride. Once the rails are set in the square pattern, begin riding a figure eight over the opposing corners of the square, changing direction in the middle of the square. Practice this for several minutes in walk & trot. Practice 2-3 times weekly. Please see accompanying picture for set up."
  },
  [ExerciseCode.PE24]: {
    id: ExerciseCode.PE24,
    category: 'pole-and-cavaletti-exercises',
    header: 'Raised Fan Pattern Poles',
    body: 'Set up 4 poles in a &quot;fan&quot; pattern. Raise one end of each pole slightly by placing that end on the low step of a mounting block. All 4 poles will be raised on the same end/side, & the mounting block becomes the center of the fan pattern. Practice walking over all 4 poles. Begin by going over the lowest end of each pole to warm up, then go over the middle of each pole & finally conclude by going over the highest side of each pole (this is the side closest to the mounting block). Practice multiple revolutions for several minutes in both directions, 2-3 times weekly.'
  },
  [ExerciseCode.PE25]: {
    id: ExerciseCode.PE25,
    category: 'pole-and-cavaletti-exercises',
    header: 'Ramped Ground Poles',
    body: 'Set up a &quot;ramp&quot; that ascends & descends using ground poles. Place 1 ground pole on the ground. Next, place a second ground pole, raised about 3 inches off of the ground, approximately 3-5 feet after the first pole. Now, place a third ground pole, about 6 inches off of the ground, approximately 3-5 feet after the second pole. Place a fourth ground pole, raised about 3 inches off of the ground, approximately 3-5 feet after the third ground pole. Finally, place a fifth ground pole, simply on the ground, approximately 3-5 feet after the fourth ground pole. Practice walking over this ramp slowly in both directions for 5 minutes. Execute this exercise 2-3 times weekly.'
  },
  [ExerciseCode.PE26]: {
    id: ExerciseCode.PE26,
    category: 'pole-and-cavaletti-exercises',
    header: 'Abdominal/Back/Hip Exercise',
    body: 'This exercise is to be ridden on a large circle (approximately 50 feet in diameter). Place 3 ground rails on the circular track. The first rail will lie on the ground. The second rail is raised 3 inches from the ground, and the third rail is raised 6 inches from the ground. The spacing between each rail is 4-5 feet apart. Next place a small cross-rail (about 6-18 inches in height), about 21 feet from the last ground rail (this is the 6 inch raised ground rail). The main focus of the exercise is to ride a rhythm of consistent cadence, with a lowered nose, slow, deliberate steps, working in the walk & trot. Work on each rein for about 10 - 15 minutes in each direction...2 times per week. This track, with these obstacles, in this rhythm, will aid in developing the vertebral-abdominal relationship. Just as in humans, horses need strong abdominal muscles to support the health, function and performance of the back muscles, as well as to relieve stress on those back muscles. Practice 2-3 times weekly.'
  },
  [ExerciseCode.PE27]: {
    id: ExerciseCode.PE27,
    category: 'pole-and-cavaletti-exercises',
    header: 'Back Muscle Re-Education',
    list: [
      '1. Warm up in the walk & trot, in both directions, encouraging the horse to stretch its nose down towards its knees.',
      '2. Work in the trot for 5 minutes on each rein, in the above posture, incorporating frequent changes of direction.',
      '3. Trot over 3 ground rails that are placed in a straight line, about 4-5 feet apart. Focus on developing the cadence of the trot. The more consistent the rhythm, the better the thoracolumbar hinge joint (located in the spine) will work. ',
      '4. Vigorously maintain cadence as this is a crucial contributor to the freedom & suppleness of movement. Cadence expands the amplitude of the movement of the spine. You may find it helpful to count out loud, as you post in the trot, approaching the poles, stepping across them & departing from them, as this will allow you to audibly hear any changes in pace.'
    ]
  },
  [ExerciseCode.PE28]: {
    id: ExerciseCode.PE28,
    category: 'pole-and-cavaletti-exercises',
    header: 'Pick-Up Sticks',
    image: [PE28]
  },
  [ExerciseCode.PE29]: {
    id: ExerciseCode.PE29,
    category: 'pole-and-cavaletti-exercises',
    header: 'Snake Over Poles',
    image: [PE29]
  },
  [ExerciseCode.PE30]: {
    id: ExerciseCode.PE30,
    category: 'pole-and-cavaletti-exercises',
    header: 'Bow Tie Fan Pole Exercise',
    image: [PE30]
  },
  [ExerciseCode.PE31]: {
    id: ExerciseCode.PE31,
    category: 'pole-and-cavaletti-exercises',
    header: 'Circle Variations',
    body: 'Place four poles on each point of a 20 metre circle at either A, C, E/B. These five variations are a great way to improve regularity in the rhythm of each pace.  Begin in walk, progressing to trot and canter, taking frequent rest breaks as these exercises can be strenuous for the horse. Figure of Eight: weave in-between two poles opposite each other on the circle in an evenly distributed figure of eight Ten Metre Circle: bend round each pole in a 10 metre circle shape. You can also ride a small circle in the middle, inside the poles Small Circles: create small circles at each square point of the 20 metre circle, smoothly moving on from one circle to the other as one whole exercise Two Poles: ride a 20 metre circle picking out two poles at a time Four Poles: ride the 20 metre circle going over each pole at each point of the circle - this is demanding for the horse so build up gradually.',
    list: [
      'Figure of Eight: weave in-between two poles opposite each other on the circle in an evenly distributed figure of eight',
      'Ten Metre Circle: bend round each pole in a 10 metre circle shape. You can also ride a small circle in the middle, inside the poles',
      'Small Circles: create small circles at each square point of the 20 metre circle, smoothly moving on from one circle to the other as one whole exercise',
      'Two Poles: ride a 20 metre circle picking out two poles at a time',
      'Four Poles: ride the 20 metre circle going over each pole at each point of the circle - this is demanding for the horse so build up gradually'
    ]
  },
  [ExerciseCode.PE32]: {
    id: ExerciseCode.PE32,
    category: 'pole-and-cavaletti-exercises',
    header: 'Poles With A Blank Space',
    image: [PE32]
  },
  [ExerciseCode.PE33]: {
    id: ExerciseCode.PE33,
    category: 'pole-and-cavaletti-exercises',
    header: 'Backing Up Over a Ground Rail',
    body: 'Place 1 ground pole on a mild hill. Practice backing the horse up over the pole. Back the horse slowly so that he/she may feel the pole with his/her feet & negotiate stepping over it backwards. Once the horse has successfully backed over the pole, halt & walk forward over the pole. Repeat this sequence several times...back over the pole, halt, walk forward over the pole. Repeat 2-3 times weekly. Offer praise throughout the exercise. ',
    image: [PE33]
  },
  [ExerciseCode.PE34]: {
    id: ExerciseCode.PE34,
    category: 'pole-and-cavaletti-exercises',
    header: 'Switchback Poles',
    body: 'Practice riding switchbacks in walk & trot 2-3 times weekly. Practice after warm up, again mid ride & just prior to cool down. Please see the picture of the Switchback Poles to assist with how to set up this exercise. The distance between the widest section of each pole will be approximately 6 feet. You may vary the distance as needed. The circles ridden in this exercise are 10 meters in diameter. The goal is to have a flexible, balanced horse that maintains a consistent cadence when riding through the Switchbacks. Counting out loud as you ride through each line may be helpful to initiate speed & pace.'
  },
  [ExerciseCode.PE35]: {
    id: ExerciseCode.PE35,
    category: 'pole-and-cavaletti-exercises',
    header: "The Two C's",
    body: 'Place six poles in two C shapes, one above the other so you have room to walk an S shape within them both. This exercise will set-up the complexity of adjustability and really make your horse think on its feet. Begin by walking in-between the poles in an S shape, flexing through each bend. Pick out straight lines and trot through in an even, balanced pace. Increase the complexity by introducing lines diagonally through the shape. Use the corners of the shape to circle acro',
    list: [
      '1. Begin by walking in-between the poles in an S shape, flexing through each bend',
      '2. Pick out straight lines and trot through in an even, balanced pace',
      '3. Increase the complexity by introducing lines diagonally through the shape',
      '4. Use the corners of the shape to circle across'
    ]
  },
  [ExerciseCode.PE36]: {
    id: ExerciseCode.PE36,
    category: 'pole-and-cavaletti-exercises',
    header: 'Raised Poles',
    body: "Place three poles at one end of the quarter-line of the arena three feet apart, then stride out two strides (ten/eleven metres) or three horse strides (fourteen/fifteen metres) and then place another three poles at the other end of the quarter-line three feet apart.  Place tram-lines in the middle to aid straightness. Raised poles with a difference - this exercise will build strength in your horse's hindquarters. Start with poles flat on the ground. Begin by trotting through the three poles at either end of this exercise as part of a large circle. Trot through the first three poles and the circle round one of the tram-line poles before proceeding down the next three poles. Same as above, but this time circle round both tram-line poles in a figure of eight shape before proceeding down the last three poles. Now trot and canter down the line of poles without circling. You can now raise the middle poles of each three on first hole or first cup level and canter through - gradually build up to raising all poles",
    list: [
      '1. Start with poles flat on the ground',
      '2. Begin by trotting through the three poles at either end of this exercise as part of a large circle',
      '3. Trot through the first three poles and the circle round one of the tram-line poles before proceeding down the next three poles',
      '4. Same as above, but this time circle round both tram-line poles in a figure of eight shape before proceeding down the last three poles',
      '5. Now trot and canter down the line of poles without circling',
      '6. You can now raise the middle poles of each three on first hole or first cup level and canter through - gradually build up to raising all poles'
    ],
    image: [PE36]
  },
  [ExerciseCode.PE37]: {
    id: ExerciseCode.PE37,
    category: 'pole-and-cavaletti-exercises',
    header: 'Figure Eight Raised 1 Foot Poles',
    image: [PE37]
  },
  [ExerciseCode.PE38]: {
    id: ExerciseCode.PE38,
    category: 'pole-and-cavaletti-exercises',
    header: 'Zig Zag Poles',
    body: "In a large arena or field, place four poles on the ground end-to-end, in a zig-zag pattern. Using shorter rails will increase the difficulty; I recommend starting with standard 10' or 12' rails. Try to be spaced about 10-15m from the rail, especially for greener horses. This exercise is great for horses who anticipate, as the frequent turns keep them guessing about where to go and they can't build up steam. The pattern consists of cantering over a rail, followed by a circle to change direction, over another rail, and circle in the opposite direction. In the above diagram, start on the left lead, canter over the red pole. Go straight a few strides, then circle left and canter over the orange pole. Circle right, and canter over the yellow pole.  Circle left, and finally over the green pole.  Reverse the pattern to go in both directions (starting over the green pole). *start in a walk or a trot to get a feel for the exercise.  Experienced horses and riders can make smaller circles, down to 10m or less. Less-advanced horses, still struggling with balance, may make larger circles up to 20m or more. Start at the trot, until you are comfortable with the pattern and where to make your turns. Green horses may break to the trot when they lose their balance; no worry, just pick up a canter again, complete the circle, and keep going. To make the most of this exercise: Use the turns to balance the horse and package him to get to the base of the rail. Don't let your horse dive around the circle, keep his shoulders up and hindquarters beneath him. Keep the horse very straight on approach and landing, do not let his shoulders fall in or out. Don't be tempted to circle too early. Make your circles round and even, at a size appropriate to your horse's level, while arriving at the center of the next pole. Concentrate on maintaining a consistent, rhythmic canter. Ideally, perform a flying change of lead over the pole. If not, keep your horse straight and ask again; or, quickly transition to trot or walk and perform a simple change. This exercise is NOT about flying changes, so if your horse is green at changes, plan on prompt simple changes instead. Keep your body position quiet - it's just a pole on the ground, don't throw yourself at it like it's a real jump! When your horse is quite accomplished, turn the poles into low jumps and repeat the exercise. Nothing should change because they are fences: maintain a steady rhythm and focus on the quality of the circle and the horse's straightness. Do you have a brave, catty horse? Canter through the zig-zag in a straight line, bouncing over the four rails at an angle. ",
    list: [
      "1. Use the turns to balance the horse and package him to get to the base of the rail. Don't let your horse dive around the circle, keep his shoulders up and hindquarters beneath him.",
      "2. Keep the horse very straight on approach and landing, do not let his shoulders fall in or out. Don't be tempted to circle too early.",
      "3. Make your circles round and even, at a size appropriate to your horse's level, while arriving at the center of the next pole.",
      '4. Concentrate on maintaining a consistent, rhythmic canter.',
      '5. Ideally, perform a flying change of lead over the pole. If not, keep your horse straight and ask again; or, quickly transition to trot or walk and perform a simple change. This exercise is NOT about flying changes, so if your horse is green at changes, plan on prompt simple changes instead.',
      "6. Keep your body position quiet - it's just a pole on the ground, don't throw yourself at it like it's a real jump!",
      "7. When your horse is quite accomplished, turn the poles into low jumps and repeat the exercise. Nothing should change because they are fences: maintain a steady rhythm and focus on the quality of the circle and the horse's straightness.",
      '8. Do you have a brave, catty horse? Canter through the zig-zag in a straight line, bouncing over the four rails at an angle. '
    ],
    image: [PE38]
  },
  [ExerciseCode.PE39]: {
    id: ExerciseCode.PE39,
    category: 'pole-and-cavaletti-exercises',
    header: 'Fan Poles',
    body: 'Place three to five poles in each corner of your arena in a fan shape - three feet apart at the narrow end and six feet apart at the wide end. Increase the depth of your corners with this fun fan shaped pole exercise.',
    list: [
      '1. Begin in walk, progressing to trot and canter.',
      '2. Flex your horse gently to the inside to help increase suppleness round the bend',
      '3. Practice incorporating these poles as part of a circle',
      '4. If you manage to place poles in each corner of the arena, try increasing and decreasing the pace as you ride large round the arena e.g decrease pace on short side and increase on long side'
    ]
  },
  [ExerciseCode.PE40]: {
    id: ExerciseCode.PE40,
    category: 'pole-and-cavaletti-exercises',
    header: '&quot;M&quot; Ground Poles',
    body: 'Arrange 4 ground poles to create the letter &quot;M.&quot; Please see the attached picture for further explanation. Practice lunging the horse at the walk & trot over the various sections of the poles. Work in both directions, approximately 5 minutes in each direction. Practice 2-3 times weekly. ',
    image: [PE40]
  },
  [ExerciseCode.PE41]: {
    id: ExerciseCode.PE41,
    category: 'pole-and-cavaletti-exercises',
    header: 'Square Poles',
    body: "Place four poles in a square shape around X. This will help with your horse's adjustability.  It is important for a horse to become used to working out where to place its legs at poles, even on a diagonal approach.",
    list: [
      '1. Start by walking across the diagonal between both H - F and K - M, then progress to a slow, relaxed but engaged trot and then canter',
      '2. Focus on keeping a consistent rhythm',
      '3. To set-up the difficulty, ride 10 or 15 metre circles at each corner point of the square',
      '4. Both the diagonal and circle exercises can be combined to create a complete exercise'
    ]
  },
  [ExerciseCode.PE42]: {
    id: ExerciseCode.PE42,
    category: 'pole-and-cavaletti-exercises',
    header: 'Poles on a serpentine',
    body: "Place four poles down the centre-line of your arena between A and C. The serpentine is a simple exercise to help improve your horse's balance, straightness, rhythm and suppleness.",
    list: [
      '1. Begin in walk, progressing to trot and canter',
      '2. In walk, practice halting over each pole for four seconds',
      '3. In trot, gently flex your horse on each bend of the serpentine',
      "4. In canter, depending on your horse's experience, add a flying change at the second last pole",
      '5. You can practice riding around each pole to create a two-loop or four-loop serpentine',
      '6. Make sure you regularly change your starting point between A and C and work evenly on both reins',
      '7. Focus on straightness, aiming for the middle of each pole and creating an even space on each bend',
      '8. Count each stride of the serpentine between A and C (or vice versa) and repeat to see if you can keep the same amount of strides. This will help with keeping a regular rhythmic tempo to each pace',
      '9. If you and your horse are familiar with shoulder-fore, incorporate this around each loop of the serpentine to add an extra technical difficulty'
    ]
  },
  // Health tips
  [ExerciseCode.HT1]: {
    id: ExerciseCode.HT1,
    category: 'health-tips',
    header: 'Disclaimer',
    body: "Please note: Advice about nutrition, especially in the case of illness, injury, disorders or conditions requiring medical treatment, is not intended to replace veterinary care. It may be used in conjunction with such care to facilitate healing and maintain health. The information offered by Denise Bean-Raymond, d.b.a. Exclusive Equestrian Services LLC, is presented for the purpose of educating horse owners. Suggested feeds, supplements, and procedures are administered voluntarily with the understanding that any adverse reaction is the responsibility of the owner. Furthermore, Denise Bean-Raymond, d.b.a. Exclusive Equestrian Services LLC, cannot be held accountable for horse's response, whether favorable or adverse, to nutritional intervention."
  },
  [ExerciseCode.HT2]: {
    id: ExerciseCode.HT2,
    category: 'health-tips',
    header: 'Supplements',
    body: 'This supplement is available from www.gettyequinenutrition.com, click &quot;Free Shipping Supplement Store,&quot; & scroll down to the bottom of the page. The supplements are listed in alphabetical order.'
  },
  [ExerciseCode.HT3]: {
    id: ExerciseCode.HT3,
    category: 'health-tips',
    header: 'Adjust Girth',
    body: 'You may want to try riding with the girth 1/2 to 1 hole lower to alleviate pressure on the pectoral muscles.'
  },
  [ExerciseCode.HT4]: {
    id: ExerciseCode.HT4,
    category: 'health-tips',
    header: 'Salt',
    body: 'Adding 2 tablespoons of plain, white, non-iodized table salt daily may be helpful to encourage drinking.'
  },
  [ExerciseCode.HT5]: {
    id: ExerciseCode.HT5,
    category: 'health-tips',
    header: 'Sugar Free Treats',
    body: 'Sugar free treats are available from www.whitehavenfarm.com.  They are called Emerald Valley Beet Treats. Another sugar free treat option includes a product called Equi Treats, available from www.uckeleequine.com. There is also Equipockts L/S from http://www.beetebites.com/equipockets/.'
  },
  [ExerciseCode.HT6]: {
    id: ExerciseCode.HT6,
    category: 'health-tips',
    header: 'For Stocked up Legs',
    body: 'You may want to purchase the herbal supplement called CLEAVERS & MARIGOLD.  It is a lymphatic blend.  It can be found at www.hiltonherbsusa.com.'
  },
  [ExerciseCode.HT7]: {
    id: ExerciseCode.HT7,
    category: 'health-tips',
    header: 'COLOSTRUM-38 E',
    body: 'www.biostarus.com...Supplement is called COLOSTRUM-38 EQ'
  },
  [ExerciseCode.HT8]: {
    id: ExerciseCode.HT8,
    category: 'health-tips',
    header: 'FURNACE EQ',
    body: 'www.biostarus.com...Supplement is called FURNACE EQ'
  },
  [ExerciseCode.HT9]: {
    id: ExerciseCode.HT9,
    category: 'health-tips',
    header: 'Adding Fat',
    body: 'Oils soothe the stomach lining...Adding fat, rather than carbs is a wise choice because it takes less bulk to get the same amount of increased calories. Fat offers more than double the energy (calories) than starch & sugar and is safer to feed. A wonderful option is flaxseed meal. It is high in beneficial fat...Omega 3 fatty acids to be exact. They reduce inflammation, protect joints & hooves, keep the immune system healthy, & produce a shiny coat. Nutra-Flax is a good option (www.gettyequinenutrition.com). Another good source is Canola Oil. Start with 1 tablespoon per meal. Slowly build up to as much as 1 cup per 500lbs of body weight. It generally takes 4- 6 weeks for your horse to benefit from extra fat. Canola Oil is high in Omega-9 Fatty Acids which are beneficial to blood vessels, as well as the heart. It can be purchased at the grocery store.'
  },
  [ExerciseCode.HT10]: {
    id: ExerciseCode.HT10,
    category: 'health-tips',
    header: 'Beet Pulp',
    body: "A healthy choice...Speedi-Beet is the brand to use. Poulin adds soy oil (inflammatory) & other brands add molasses (inflammatory) - Speedi-Beet does not add anything. A general guideline to use is as follows: a 1/2 pound (DRY WEIGHT BEFORE SOAKING), is a good amount when using it as a carrier for supplements. This is also the amount often used to replace higher sugar/starchier grains. Feeding 1-2 lbs. (DRY WEIGHT) will generally help to maintain weight, & 3 - 4 lbs. daily (DRY WEIGHT), will assist in weight gain. These numbers can be adjusted accordingly based on the horse's weight & body condition, as they change over time. This is simply a baseline to begin with.  Please take your time & work the horse up slowly (over several weeks to these amounts). Horses sometimes find plain beet pulp unappealing, therefore adding a small amount of organic honey & chopped up carrot to the beet pulp to make it more appetizing.  Beet pulp is a good source of digestible fiber & protein. It also has a low glycemic index & provides a significant amount of digestible energy. It makes an excellent carrier for supplements as well. Soaking it also provides additional water intake for the horse which is beneficial as well. Be sure to add your supplements once you are ready to feed, otherwise the vitamins in the supplements will be destroyed by the prolonged water contact. SPEEDI-BEET BRAND does not contain molasses & is non GMO.  Dodge Grain now carries it as well."
  },
  [ExerciseCode.HT11]: {
    id: ExerciseCode.HT11,
    category: 'health-tips',
    header: 'Alfalfa Cubes',
    body: 'These are a wonderful option to feed daily, as they are low in Non-Structural Carbohydrates, high in protein (assists in muscle building & repair), a great source of biotin (biotin & vitamin B6 are needed to produce keratin, a protein found in hair & hooves) & high in Calcium which buffers stomach acid (why horses with ulcers should be fed Alfalfa). Soak the cubes prior to feeding & begin by offering 1/2 pound (DRY WEIGHT) daily, slowly working up to 1 pound daily. Beet pulp and/or Alfalfa cubes are also wonderful options to feed just prior to riding to aid in absorbing stomach acid.'
  },
  [ExerciseCode.HT12]: {
    id: ExerciseCode.HT12,
    category: 'health-tips',
    header: 'Pre & Pro-Biotics',
    body: "The horse's hindgut (cecum & large intestine) contains billions of beneficial bacteria that produce enzymes for digesting fiber found in forage (hay & grass). If their numbers get disrupted, the horse will not be able to derive enough calories to maintain normal weight. Causes for disruption include illness, stress, over-consumption of cereal grains (oats, corn, barley, & wheat), ulcers, forage restrictions, anti-biotics.  Therefore, it is important to feed both a pre-biotic & a probiotic.  A pre-biotic boosts the health of the bacteria that naturally live in the hindgut. A pre-biotic contains fermentation products that feed these bacteria so that they can multiply in number. The result is better forage digestion. These bacteria are also responsible for producing necessary B vitamins which are needed to obtain calories from other nutrients in the diet. Probiotics contains live microbes including bacteria & yeast thereby adding to the general microbial population in the hindgut.  Excellent potency with respect to a combination equine probiotic product is called Bio-Vet's Equine Generator (www.circlehproducts.com). It combines the Lactobacilli needed by the upper tract with Saccharomyces yeast and a bacterial strain that is also a lactate fermenter, Pediococcus.  Dr. Scott Weese of Canada recommends a minimum intake of 10 billion CFU (colony forming units) per day to have any significant impact. Most commercial equine products fall short. Equine Generator has 12.5 billion per ounce."
  },
  [ExerciseCode.HT13]: {
    id: ExerciseCode.HT13,
    category: 'health-tips',
    header: 'Chiropractor',
    body: 'I would suggest having a chiropractor evaluate your horse. I refer my clients to Dr. Jesse Springer. She may be reached at (978) 501-5254, or jsvatekdvm@comcast.net. She prefers email. If you decide to schedule with her, please let her know that I referred you. If you do not hear back from her immediately, do not hesitate to call/email a second time, as she is very busy.'
  },
  [ExerciseCode.HT14]: {
    id: ExerciseCode.HT14,
    category: 'health-tips',
    header: 'Back Health',
    list: [
      '1. Massage back for several minutes before saddling. Simply run your hands up & down the back (side-to-side), using a flat, open palm position.',
      '2. Leave the horse saddled for 5-10 minutes before working it.',
      '3. Once tacked up, lead the horse around the arena before mounting; once around the entire arena in each direction, then mount.',
      '4. After warming up at the walk, canter before trotting to alleviate back tension.',
      '5. Allow the horse to canter, at its own pace, staying OFF its back (2 Point Position), without asking for a frame - allow the horse to place its head & neck wherever it would like. Canter 1-2 laps around the arena, in BOTH directions this way - in a &quot;FREE&quot; canter.'
    ]
  },
  [ExerciseCode.HT15]: {
    id: ExerciseCode.HT15,
    category: 'health-tips',
    header: 'Saddle Fit',
    body: 'I would suggest having your saddle fit checked. I refer my clients to Tony Cooper. He may be reached at 978-249-9776 or www.anthonycoopersaddler.com. If you decide to schedule with him, please let him know that I referred you. If you do not hear back from him immediately, do not hesitate to call a second time, as he is a very busy man.'
  },
  [ExerciseCode.HT16]: {
    id: ExerciseCode.HT16,
    category: 'health-tips',
    header: 'Natural Vitamin E',
    body: 'This is a common vitamin that our horses in this region are deficient in. It is a powerful antioxidant, important in immunity & muscle function. Also, scar tissue, adhesions & proud flesh resulting from injury and/or surgery may be significantly reduced with large amounts of vitamin E. Please use a natural vitamin E product, be sure to look for D-Alpha Tocopherol. Anything listed as DL-Alpha Tocopherol is synthetic & will not be absorbed efficiently. You may be interested in a product called SOLGAR NATURAL VITAMIN E 1000 IU SOFTGELS. These are often available at www.amazon.com, at a reasonable cost. Health food stores generally charge about $30.00 a bottle for the 100 count size, & the same size is often available at Amazon for about $20.00 a bottle.  Of course, you may choose to shop around & find another Natural Vitamin E option altogether, simply sharing this product with you. www.gettyequinenutrition.com sells a product called SU-PER E NATURAL (without Selenium) which is a powder & www.smartpakequine.com, offers a NATURAL VITAMIN E PELLET (without Selenium). You may want to offer between 4000 IU - 6000 IU of vitamin E daily. It is wise to have vitamin E & Selenium levels checked by your veterinarian at both Spring & Fall shots visits. Adding a daily fat will assist in the absorption of the vitamin E, since it is a fat soluble vitamin. A wonderful option is flaxseed meal. It is high in beneficial fat...Omega 3 fatty acids to be exact. They reduce inflammation, protect joints & hooves, keep the immune system healthy, & produce a shiny coat. Nutra-Flax is a good option (www.gettyequinenutrition.com ), click Free Shipping Supplement Store, & scroll down to NUTRA FLAX FLAXSEED MEAL. If you are looking for something less expensive, another good source is Canola Oil. Start with 1 tablespoon per meal.  Slowly build up to as much as 1 cup per 500 lbs of body weight. It generally takes 4- 6 weeks for your horse to benefit from extra fat. Canola Oil is high in Omega-9 Fatty Acids which are beneficial to blood vessels, as well as the heart. It can be purchased at the grocery store (Market Basket for example).'
  },
  [ExerciseCode.HT17]: {
    id: ExerciseCode.HT17,
    category: 'health-tips',
    header: 'Transitional Heats in Mares (by Heidi Smith, DVM',
    body: "Springtime can be a frustrating time for horse breeders as mares undergo a phase called &quot;transitional heat.&quot; During winter, the majority of mares go through a stage called &quot;anestrus&quot; or absence of heat cycles. As the hours of daylight begin to lengthen in the spring, the mare's reproductive tract is signaled to begin activity again. As the ovaries once again become active, instead of starting off with regular heat cycles, they build multiple tiny follicles (the structures on the ovaries that contain the oocytes or eggs). The follicles produce the hormone estrogen, which causes the mare to show signs of estrus or heat. However, breeding at this time will not produce pregnancy, as none of the follicles are large enough to rupture and release an egg. This transitional period may be fairly short (a few days) or quite long (more than a month). The mare may show heat constantly during this transition, or may show very erratic signs of heat. Toward the end of this transitional heat, the mare usually will develop a larger follicle and finally ovulate an egg. Once she does this, she will usually begin a regular pattern of heat cycles. Until the mare develops regular cycles, the only way to differentiate a transitional heat from a normal heat with a normal follicle is to have the mare palpated or ultra-sounded by a veterinarian familiar with equine reproduction. One of the most frequent questions we are asked prior to the onset of transitional heat is whether we can give the mare an injection to bring her into heat. The injections used to initiate heat belong to a class of drugs called prostaglandins. They work by causing the degeneration of a structure in the ovary called the corpus luteum (or &quot;CL&quot;), which grows from the remains of the follicle from the previous heat. Until the mare has been through a heat and a subsequent ovulation, there is no CL present on which the drug can work. Hence, there is no way for us to bring the mare into heat with drugs before increased daylight causes her reproductive system to &quot;switch on&quot; for spring. Breeders who want early foals often achieve success at &quot;fooling&quot; Mother Nature by putting the mares under artificial lights for 16 hours a day beginning in the late fall."
  },
  [ExerciseCode.HT18]: {
    id: ExerciseCode.HT18,
    category: 'health-tips',
    header: 'Ulcer Tips',
    list: [
      "1. An ulcer is an erosion of the tissue that lines the gastrointestinal tract. It can form anywhere along the tract, however they are more commonly found in the stomach. Cells within the stomach lining produce a very strong acid (HCL); the horse's stomach is protected from this acid, by a thick mucous lining. This acid protects your horse from infection, as well as starts the process of protein digestion.  Your horse produces this acid continuously.  We as humans do not, we only produce it when we eat.  He secretes acid all the time because he is designed to eat all the time. Eating requires chewing which produces saliva. Saliva is a natural antacid that neutralizes acid so it does not erode his stomach lining, or have a chance to travel down the rest of his digestive tract, causing more issues. Ulcers are caused by work, stress, improper feeding & pain killers. Hay is a wonderful thing when it comes to ulcers as it absorbs stomach acid, requires more chewing which results in more saliva and buffers stomach acid.  In fact, ulcers may be greatly helped by giving your horse Alfalfa hay. 2/3 grass hay, mixed with 1/3 Alfalfa hay is a good ratio to begin with. Feeding some hay or cubes before the horse is ridden or worked is helpful, this helps to absorb some of the stomach acid, thus preventing the acid from sloshing around internally aggravating and/or causing ulcerations. Feeding about 1/4 of a pound (dry weight) before each ride is appropriate.",
      "2. Lecithin is the common term for a phospholipid known as “phosphatidyl choline” (PC). It is a naturally occurring substance; it is the most abundantly found phospholipid in animal and plant cell membranes, and is most commonly derived from soybeans. Chemically, it primarily consists of essential fatty acids (both omega 3 & omega 6) along with a molecule of choline (an essential B vitamin-like nutrient). Lecithin has been well studied in its ability to treat ulcers. Researchers* at the University of Texas Health Science Center in Houston examined the administration of PC along with NSAIDs and found that not only does PC significantly reduce gastrointestinal injury, but in some cases, it even eliminated gastrointestinal ulcerations. Furthermore, it offers this protection without altering the efficacy of bute (or other NSAID). Lecithin is easy to feed - You can buy lecithin granules in any health food store, or in bulk through online providers such as BulkFoods.com. I recommend offering ½ cup of lecithin once a day. It can be mixed with any feed and is quite palatable. Another option is SBS Equine Products' lecithin-based supplement called “Starting Gate.” In addition to offering gastrointestinal protection, lecithin boosts the health of all cell membranes, including those of skin, hair, and hooves. And the body can also use the choline component to produce acetylcholine, a neurotransmitter necessary for proper neuromuscular function. Phospholipids act as a barrier to acid damage. Lecithin (phospahatidyl choline) is a naturally-occurring phospholipid that can be easily supplemented to protect your horse against ulcers.",
      '3. Beet Pulp:  Beet pulp is a good source of digestible fibre & has a low glycemic index.  It also provides a significant amount of digestible energy. Speedi-Beet is the brand to use. Poulin adds soy oil (inflammatory) & other brands add molasses (inflammatory). Speedi- Beet does not add anything.  A general guideline to use is as follows: a 1/2 pound (dry weight before soaking), this is a good amount when using it as a carrier for supplements. This is also the amount often used to replace higher sugar/starchier grains. Feeding 1-2 lbs. (dry weight) will generally help to maintain weight, & 3-4 lbs. daily (dry weight), will assist in weight gain.  Beet pulp is considered forage.',
      "4. I would also suggest adding Aloe Vera Juice to the horse's daily diet...2-4 ounces per day. You can purchase good quality juice at most health food stores, or online.",
      '5. Another supplement option is available from www.silverliningherbs.com, the product is called # 29 LCR. Use the promo code SHELLEYMURPHY at checkout for a discount. The aloe vera juice & the herbs sooth & heal the stomach lining.',
      '6. Sucralfate is a non-absorbed aluminum salt of sucrose.  It is a medication that forms a sticky, thick gel that binds to ulcerated areas within the colon, forming a coating to help the area heal. It can be used for both foregut & hind gut ulcerations, acting as a bandage. It is best given separately from any other medications the horse is receiving on the same day.'
    ]
  },
  [ExerciseCode.HT19]: {
    id: ExerciseCode.HT19,
    category: 'health-tips',
    header: 'Lecithin to Inhibits Bute-Related Ulcers by Juliet M. Getty, Ph.D.',
    body: 'Your horse is in pain and needs bute. Bute causes ulcers - this we know. But knowing how it damages the lining of the gastrointestinal tract is the key to knowing how to prevent its damaging impact. ',
    list: [
      "Your horse's stomach - an acid production machine: First, understand that most ulcers can easily be prevented by appreciating the way the horse's stomach is designed. The lower portion (glandular region) is lined with a protective mucus layer, but the upper portion (squamous region) does not, which makes it especially vulnerable to stomach acid. Most ulcers occur here because the horse's stomach continuously secretes acid, even when empty. A steady supply of forage - all the time, all day, and all night - will put the acid to its proper work and protect your horse's stomach. This is the way horses are meant to eat - they are forage grazers. But even when horses are fed properly, administering non-steroidal anti-inflammatory drugs (NSAIDs) such as bute (phenylbutazone), Banamine (flunixin meglumine), or aspirin, can create ulcerations along the entire gastrointestinal tract. This has to do with the way they reduce pain and inflammation. We tend to assume that it is bute itself that is directly irritating the stomach lining. In actuality, the damage happens after the bute has been absorbed. Bute inhibits the cyclooxygenase enzymes 1 and 2; some of these enzymes reduce the formation of various prostaglandins, some of which promote inflammation and pain. But others maintain the integrity of the entire digestive tract by stimulating the production of molecules known as phospholipids. Phospholipids form a barrier to help prevent stomach acid from damaging the underlying epithelium.",
      "Antacids have a downside: Our tendency is to get rid of the acid by administering antacids, H2 blockers, or the proton- pump inhibitor omeprazole (GastroGard®).  But stomach acid is actually important--it is there for two reasons: First, it is necessary to initiate the digestion of protein, a nutritionally critical function. Protein digestion provides amino acids (building blocks of protein) for your horse's overall health. And second, acid is your horse's primary defense against all of the microbes that he picks up off the ground, some of which are potentially infectious. If ulcer prevention is your goal, it makes sense to replace the phospholipids that have been reduced by NSAIDs.",
      'Enter, lecithin: Lecithin is the common term for a phospholipid known as “phosphatidyl choline” (PC).  It is a naturally occurring substance; it is the most abundantly found phospholipid in animal and plant cell membranes, and is most commonly derived from soybeans.  Chemically, it primarily consists of essential fatty acids (both omega 3 and omega 6) along with a molecule of choline (an essential B vitamin-like nutrient). Lecithin has been well studied in its ability to treat ulcers. Researchers* at the University of Texas Health Science Center in Houston examined the administration of PC along with NSAIDs and found that not only does PC significantly reduce gastrointestinal injury, but in some cases, it even eliminated gastrointestinal ulcerations. Furthermore, it offers this protection without altering the efficacy of bute (or other NSAID).',
      "Lecithin is easy to feed: You can buy lecithin granules in any health food store, or in bulk through online providers such as BulkFoods.com. I recommend offering ½ to ¾ cup of lecithin with each dose of bute (for a 1000 lb horse).  It can be mixed with any feed and is quite palatable.  Another option is SBS Equine Products' lecithin-based supplement called “Starting Gate.” In addition to offering gastrointestinal protection, lecithin boosts the health of all cell membranes, including those of skin, hair, and hooves. And the body can also use the choline component to produce acetylcholine, a neurotransmitter necessary for proper neuromuscular function.",
      "Summary: When pain relief is necessary and you rely on an NSAID such as bute, protect your horse's digestive tract by replacing what bute diminishes—phospholipids found in the epithelial layer of the digestive tract. Phospholipids act as a barrier to acid damage. Lecithin (phospahatidyl choline) is a naturally-occurring phospholipid that can be easily supplemented to protect your horse against ulcers."
    ]
  },
  [ExerciseCode.HT20]: {
    id: ExerciseCode.HT20,
    category: 'health-tips',
    header: 'Benefits of Massage During Lay-Up',
    list: [
      '1. Massage enhances the immune system and aids recovery from soft tissue injuries by increasing blood circulation to injured areas.',
      '2. Massage dilates or opens up blood vessels, improving the circulation and relieving congestion.',
      '3. Massage acts as a “mechanical cleanser” pushing along the lymph and hastening the elimination of wastes & toxic debris. Massage helps to eliminate edema (or dropsy) of the extremities through lymphatic massage.',
      '4. Massage increases the blood supply and nutrition to the muscles without adding to their load of toxic acid, produced through voluntary muscle contraction (such as exercise). Massage thus helps to overcome harmful “fatigue” products resulting from strenuous exercise or injury.',
      '5. Massage improves muscle tone and helps prevent or delay muscular atrophy resulting from forced inactivity. Massage relaxes muscle spasms and relieves muscle tension.',
      '6. Massage can compensate, or at least in part, for lack of exercise or muscular contraction in animals who because of injury, illness, or age are forced to remain inactive. In these cases, massage helps return venous blood to the heart and so eases the strain on this vital organ.',
      '7. Massage improves the circulation and nutrition of joints and hastens the elimination of harmful particles in the synovial fluid. It helps to lessen inflammation and swelling in joints, thereby alleviating pain. ',
      '8. Massage disperses the dema following injury to ligaments and tendons, lessening pain, and facilitating movement.',
      '9. Massage is an invaluable aid to physical fitness. No other single health technique is more versatile.'
    ]
  },
  [ExerciseCode.HT21]: {
    id: ExerciseCode.HT21,
    category: 'health-tips',
    header: 'Low sugar/low starch treat',
    body: 'Tractor Supply sells a low sugar/low starch treat option. The treats are called APPLE BERRY COOKIE CUBES, manufactured by the STANDLEE Company. They are sold in a green & pink bag.'
  },
  [ExerciseCode.HT22]: {
    id: ExerciseCode.HT22,
    category: 'health-tips',
    header: 'Fecal egg count testing kit',
    body: 'www.parascreen.com is the site to order your own fecal egg count testing kit'
  },
  [ExerciseCode.HT23]: {
    id: ExerciseCode.HT23,
    category: 'health-tips',
    header: 'Ice Therapy',
    list: [
      '1. Apply to the injured area for no longer than ten minutes.',
      '2. You can repeat cold therapy three to four times a day.',
      '3. When using ice, keep it moving in a circular motion — never allow it to rest in one place as it could freeze the underlying tissue.',
      '4. Apply cold therapy to an injury for three to four days.',
      '5. Freeze water in a Styrofoam cup, and when you are ready to use it, peel away the bottom of the cup and apply the ice to the injury. As the ice melts, continue to peel away the cup.'
    ]
  },
  [ExerciseCode.HT24]: {
    id: ExerciseCode.HT24,
    category: 'health-tips',
    header: 'Winter Skin Health Tip',
    body: "Vigorously curry comb the horse's body 2-3 times weekly. After currying, spray the horse's body with a non silicone based hair product such as Cowboy Magic or Daily Coat Regimen. Finish with a soft brush. This will allow for easy dirt removal, it will also offer you the chance to feel any reduction in the fat layer covering the ribs (indicating weight loss) & it will afford you the opportunity of locating any new bumps, cuts, scrapes, or clumps of hair that could indicate a wound."
  },
  [ExerciseCode.HT25]: {
    id: ExerciseCode.HT25,
    category: 'health-tips',
    header: 'Epsom Salt Bath',
    body: 'Combine 1/2 cup Epsom Salt with 5 gallons of tepid water. Thoroughly rinse the horse, next apply the Epsom Salt/Water mixture to the body, avoiding the eye area & genital area. Let the mixture sit on the horse for 5-10 minutes. Rinse the horse thoroughly to remove all of the salt/water mixture. This is a refreshing option on a hot day, after a workout, or if the horse is particularly itchy due to bug bites etc.'
  },
  [ExerciseCode.HT26]: {
    id: ExerciseCode.HT26,
    category: 'health-tips',
    header: 'Cooling Down Your Horse',
    body: 'When hosing or sponging the horse, wet all 4 limbs first, before wetting the other areas of the body. The skin is thin on the legs & the blood vessels lye close to the surface, thus allowing for efficient cooling of the system'
  },

  // Mounted neck stretches
  [ExerciseCode.MN1]: {
    id: ExerciseCode.MN1,
    category: 'mounted-neck-stretches',
    header: 'Long & Low Flexion',
    body: 'Ask the horse for a long low frame, loosen the rein and ask for right and left flexions, holding each bend for 10 seconds, 3 times on each side. The horse needs to stay in a long low frame while bending to the right and left.  Practice 2-3 times weekly.'
  },
  [ExerciseCode.MN2]: {
    id: ExerciseCode.MN2,
    category: 'mounted-neck-stretches',
    header: 'Neck Bend',
    body: "After warm up, halt & turn horse's head & neck fully Right, as if the muzzle was going to reach back towards the point of hip. Hold this position for 10 seconds. Repeat 2 more times. Perform this stretch in the same manner, towards the Left. Repeat the entire sequence a second time, midway through the ride, and once again, just before cool down. Practice 2-3 times weekly."
  },
  [ExerciseCode.MN3]: {
    id: ExerciseCode.MN3,
    category: 'mounted-neck-stretches',
    header: 'Neck Flexions',
    body: 'Perform this exercise 3 times during your ride. Once after warm up, again mid ride & lastly just before cool down. While mounted, at the halt, facing the wall of the arena, slowly pull the right rein back towards your hip by bending your elbow back, asking the horse to turn its head & neck to the right. Once you feel the horse hesitate, stop. Do not ask the horse to bend further than it can. Hold this stretch for 7 seconds. Then, just as slowly as you asked, release the bend. Repeat this request a second time, however ask & release even slower, again holding the stretch for 7 seconds. Finally repeat for a third time, asking & releasing even slower than the second repetition, again holding the stretch for 7 seconds. Bottom Line: Ask & release slow, slower & slowest, holding the bend for 7 seconds each time. Remember, ASK & RELEASE in the slow, slower, slowest manner. Do not just let the rein go forward quickly when the 7 seconds are complete. Repeat the entire exercise to the left. Practice 2-3 times weekly.'
  },
  [ExerciseCode.MN4]: {
    id: ExerciseCode.MN4,
    category: 'mounted-neck-stretches',
    header: 'Nose-to-Tail Stretches',
    body: 'Turn the horse (while halted), into a complete nose-to- tail flexion to the right and then left. Repeat this flexion 3 times in each direction, holding it for 3-5 seconds each request.  Practice 2-3 times weekly.'
  },
  [ExerciseCode.MN5]: {
    id: ExerciseCode.MN5,
    category: 'mounted-neck-stretches',
    header: 'Counter-Bend Figure Eights',
    body: 'Practice riding large, sweeping figure-eights in all gaits while maintaining a counter-bend at all times. No matter what direction you are riding in, your horse will be bending to the outside. Perform this exercise in all gaits that you are comfortable in, after the horse has been warmed up properly. You may choose to revisit the exercise once again for several minutes just prior to cool down as well. Practice 2-3 times weekly.'
  },
  [ExerciseCode.MN6]: {
    id: ExerciseCode.MN6,
    category: 'mounted-neck-stretches',
    header: 'Corner Flexions',
    body: 'In all gaits, practice riding in true/inside bend around the first corner of the arena, then change to counterbend/outside bend for the second corner of the arena, reshape back to true bend for the third corner, & finish with counterbend in the fourth arena corner. You will be changing the bend in every corner. Ride down each long side, maintaining a straight horse (no bend in the body). Practice in all gaits, in both directions for several minutes, until the horse softens & relaxes. Practice 2-3 times weekly.'
  },
  [ExerciseCode.MN7]: {
    id: ExerciseCode.MN7,
    category: 'mounted-neck-stretches',
    header: 'Ride Traditional Serpentines',
    body: 'At the trot with strong half-halts before the change of bend and a deep change of bend in between the loops to emphasize the stretch. Try to put as many loops in as you can. Practice 2-3 times weekly.'
  },
  [ExerciseCode.MN8]: {
    id: ExerciseCode.MN8,
    category: 'mounted-neck-stretches',
    header: 'Turn on the Haunches',
    body: 'Incorporate more &quot;Turn on the Haunches&quot; into the weekly schooling sessions.'
  },
  [ExerciseCode.MN9]: {
    id: ExerciseCode.MN9,
    category: 'mounted-neck-stretches',
    header: 'Horizontal Conditioning',
    list: [
      '1. Start by trotting the horse in a horizontal frame, meaning that its poll and withers are at the SAME height and its neck is horizontal to the ground, like a table.',
      '2. When the horse begins to reach into the bit and your contact is steady, shorten the reins 1/2 an inch at a time.',
      "3. Collect the reins a total of approximately 2 inches or until the horse's poll is now the highest point on its body. Depending on the horse's height, its ears may now be relatively level with your chest.",
      '4. Ride in this frame for 15 seconds, in an active trot.',
      '5. Slowly lengthen the reins, by allowing them to slip through your fingers 1/2 inch at a time until the horse is in a frame in which its poll is LOWER than its withers.',
      '6. Ride in this frame for 15 seconds, in an active trot.',
      '7. Repeat the whole sequence several times in both directions.',
      '8. When you and the horse are executing this exercise well, perform it in the canter Practice 2-3 times weekly.'
    ]
  },

  // Mounted shoulder stretches
  [ExerciseCode.MH1]: {
    id: ExerciseCode.MH1,
    category: 'mounted-shoulder-stretches',
    header: 'Leg-Yield',
    body: 'Leg-yield several steps, then halt and back up several steps. Then halt and then go forward several steps. Repeat this sequence in both directions. Practice 2-3 times weekly.'
  },
  [ExerciseCode.MH2]: {
    id: ExerciseCode.MH2,
    category: 'mounted-shoulder-stretches',
    header: 'Leg-yield a Zig-Zag Pattern',
    body: 'Leg-yield several steps to the right, walk forward several straight steps, then leg-yield several steps to the left. Repeat in both directions.  Practice 2- 3 times weekly.'
  },
  [ExerciseCode.MH3]: {
    id: ExerciseCode.MH3,
    category: 'mounted-shoulder-stretches',
    header: 'Shoulder Exercise',
    body: 'Shoulder-fore and shoulder-in at walk and at trot.  This exercise should be done on both reins. More stretch is achieved at the walk, rather than at the working trot or collected trot. Start with shoulder-fore and progress to the shoulder-in. A shoulder-in on the circle will give a stronger stretch. Also ride shoulder-in at a sharper angle for a stronger stretch. Practice 2-3 times weekly.'
  },
  [ExerciseCode.MH4]: {
    id: ExerciseCode.MH4,
    category: 'mounted-shoulder-stretches',
    header: 'Shoulder-In to Shallow Serpentine',
    body: 'Practice 2-3 times weekly.',
    list: [
      '1. In an active trot, ride shoulder-in from the letters K-V (tracking right).',
      '2. Fade off of the rail, and ride towards X.',
      "3. At X, change the horse's bend to the left, and ride back to the rail at H.",
      '4. When you have returned to the rail at H, ride a 10-meter circle to the right.',
      '5. Proceed the rest of the way around the arena to repeat the exercise again at K.'
    ]
  },
  [ExerciseCode.MH5]: {
    id: ExerciseCode.MH5,
    category: 'mounted-shoulder-stretches',
    header: 'Leg-Yielding Arena Exercise',
    body: "This exercise combines the demands of extending/collecting strides and leg-yielding, so that two things are accomplished; front end/hind end suppling and shoulder strengthening. Be sure to ride good quality leg-yields to achieve a decent bend through the horse's spine and sufficient cross-over in the front and hind legs.",
    list: [
      '1. Trot down the long side of the arena.',
      '2. Leg-yield 3 steps to the inside, and then immediately extend the trot for several strides.',
      '3. Next, collect the trot for several strides.',
      '4. Leg-yield 3 steps to the outside, returning to the rail.',
      '5. Work this exercise on both reins, for a total of 16 minutes (8 minutes in each direction). Practice 2-3 times weekly.'
    ]
  },
  [ExerciseCode.MH6]: {
    id: ExerciseCode.MH6,
    category: 'mounted-shoulder-stretches',
    header: 'Speed Variations',
    list: [
      '1. Begin this exercise in the working trot. Once the horse becomes proficient in that gait, perform this exercise in the working canter.  This exercise must be ridden in either of those gaits to be helpful.',
      '2. Proceed in your working gait on a straight track.',
      "3. Checking to make sure the horse is in good posture (stretching its head & neck forward, and lengthening it downward), ask the horse to extend its gait. Be sure to allow the horse's neck to stretch forward when you transition to the extended gait. If this does not happen, the horse's body will remain &quot;blocked&quot; in extension - this will result in the horse moving its legs faster, without fully engaging the topline. The neck should extend more out from the shoulder (about the width of your hand) when the request for extension is made, and then come back to you when you transition down to the working gait.",
      '4. Remain in the extended gait for the same amount of time you rode in the working gait. If you make the transitions too close together, without allowing enough time for the horse to find a rhythm in each pace, the horse will compromise the posture of its topline. The horse must work this exercise stretching forward, lengthening its body for the exercise to be beneficial.',
      '5. Make a gradual downward transition to the working gait. Allow the horse several strides to balance itself, round through the back, and draw the hind limbs underneath its body, rather than making an abrupt transition resulting in the horse stiffening its back.',
      '6. Repeat this exercise in the trot & canter, in both directions. Ride it more than a few times each way, as it is only effective in conditioning when the horse must take more oxygen into its body.  The play between the 2 gait speeds increases oxygen and blood flow to the muscles, improving range of motion.'
    ]
  },
  [ExerciseCode.MH7]: {
    id: ExerciseCode.MH7,
    category: 'mounted-shoulder-stretches',
    header: 'Shoulder Exercise',
    body: 'Ride extended trot exercises. Alternate extended trot with half-halts around the entire arena. Shorten a little as you reach the corner, but ease the horse into extension again as you reach &quot;A&quot; or &quot;C&quot;. So long as you do not ride too deeply into the corners, the corners will help to balance the horse as it pushes for a longer extended step. Continue around the arena several times - the horse should increase its extension with each circuit. Practice 2-3 times weekly.'
  },

  // Hill exercises
  [ExerciseCode.HE1]: {
    id: ExerciseCode.HE1,
    category: 'hill-exercises',
    header: 'Hills & Cavalettis',
    body: 'Choose a mild hill...Walking & trotting uphill & downhill over cavaletti may be helpful at this time. You may begin with one Cavalettis & continue to add others to create any sort of pattern you wish. Practice for several minutes, in both directions, 2-3 times weekly'
  },
  [ExerciseCode.HE2]: {
    id: ExerciseCode.HE2,
    category: 'hill-exercises',
    header: 'Straight Hills',
    body: 'Walk up & down mild hills in a straight line, halting every 3 strides. Be sure your horse halts as straight as possible. Next, add a single back up step after the halt, so you will walk a straight line down a mild hill for 3 steps, halt straight & back up a single step before repeating the entire walk, halt, back sequence. Practice for several minutes both up & down the mild hill, 2-3 times weekly.'
  },
  [ExerciseCode.HE3]: {
    id: ExerciseCode.HE3,
    category: 'hill-exercises',
    header: 'Walking Up Hills',
    body: 'Quite simply, walk briskly up various hills. You may do this in hand, under saddle or both. Choose various degrees of hills, & spend several minutes walking up them. You may perform this as a warm up, cool down or both. You may choose to take one day a week & spend 15 minutes just walking up hills. Practice hill walking 2-3 times weekly.'
  },
  [ExerciseCode.HE4]: {
    id: ExerciseCode.HE4,
    category: 'hill-exercises',
    header: 'Zig-Zag Hills',
    body: 'Walk & trot up & down mild hills in a zig zag pattern. Practice for several minutes 2-3 times weekly.'
  },
  [ExerciseCode.HE5]: {
    id: ExerciseCode.HE5,
    category: 'hill-exercises',
    header: 'Rein-Back Exercises/Up a Hill',
    body: 'Start with a few steps only, then slowly build up the number of steps. For example, begin with 3 steps, then increase to 6 steps and finally to 10 steps. This should take place over time. Back up a slight incline (small hill) slowly, (with lots of encouragement for the horse) several steps. Be sure the horse is backing up straight. Once per ride is suitable as this exercise is physically difficult since the horse has to lift its hind legs one at a time without putting weight on its forehand. It has a wonderful stretching effect on the loin extensors. As you gradually increase the number of steps, you can gradually increase the incline to a more significant hill. Practice 2-3 times weekly.'
  },
  [ExerciseCode.HE6]: {
    id: ExerciseCode.HE6,
    category: 'hill-exercises',
    header: 'Forward/Brisk/&quot;Marching&quot; Walk on a Loose Rein',
    body: 'Walk straight lines on a level surface. Then add in hills. Walk up and down the hills in a straight line. Walk across each side of the hill from side to side, as if weaving from one side of the incline ascending, and weaving down it descending. Collect up the reins and ask horse to walk up and down the hill in a short stride, for 1-2 passes, and then lengthen the rein and ask horse to walk up and down the hill on a longer stride for 1-2 passes. Finally, add in walking on varied surfaces - sand, hard ground, asphalt...walk on each surface for about 3-4 minutes. Practice 2-3 times weekly.'
  },
  [ExerciseCode.HE7]: {
    id: ExerciseCode.HE7,
    category: 'hill-exercises',
    header: 'Exercise on a Sloping Plane',
    body: 'Work at walk and trot up and down hills, as well as side to side on hills. Practice 2-3 times weekly.'
  },
  [ExerciseCode.HE8]: {
    id: ExerciseCode.HE8,
    category: 'hill-exercises',
    header: 'Trot Straight Down a Hill Slowly',
    body: 'and then leg - yield across the other side, leg yield back over to the original side you cam from.  Practice 2-3 times weekly.'
  },

  // Back exercises
  [ExerciseCode.BE1]: {
    id: ExerciseCode.BE1,
    category: 'back-exercises',
    header: 'Canter Work',
    body: 'Canter is the absolute best motion for a tight back because pelvic action takes place that utilizes the lower back with the glute.  It is also the most efficient movement of the horse. Do canter-trot-canter transitions. When the horse can master this with balance and ease, do canter-walk-canter transitions. The latter exercise develops the most power in the bottom line muscles and stretches the top line. If the horse is allowed to dive down in this transition, there will be no stretch in the loin area. Transitions within the gait, collection to extension, also help to stretch and supple the loins. Canter and extended canter normally involve more lumbar (lower back) flexion thus more stretch than other gaits.  Practice collection & extension within the gait of canter. Practice 2-3 times weekly.'
  },
  [ExerciseCode.BE2]: {
    id: ExerciseCode.BE2,
    category: 'back-exercises',
    header: "'Free' Hand-Gallop Work",
    body: 'Hand-Gallop 1-2 times around the arena, on a loose rein (no frame/no shape), allowing the horse to place its head/neck/nose wherever horse would like, staying off his back (in a 2-point position), allowing the horse to dictate the pace. This is not canter work - this is gallop work.  Practice 2-3 times weekly.'
  },
  [ExerciseCode.BE3]: {
    id: ExerciseCode.BE3,
    category: 'back-exercises',
    header: 'Tiny Serpentines',
    body: 'After the horse has warmed up, ride a tiny serpentine up the center line. Ask for an exaggerated amount of inside bend in each direction.  The reason you want to ask for an extreme amount of bend is based on the principle that maximum contraction will lead to maximum relaxation. This exercise will teach the horse to keep its neck relaxed and ready for quick changes of bend. It will learn to react (yield) immediately to a light squeeze on the reins.  Practice 2-3 times weekly.'
  },
  [ExerciseCode.BE4]: {
    id: ExerciseCode.BE4,
    category: 'back-exercises',
    header: 'Spiral In & Out on a Circle',
    body: "Ride the horse on a large circle to the left, and then gradually reduce the size of the circle by pushing the hindquarters towards the center with your right leg behind the girth. At the same time, take both hands to the left; your right rein will come against the neck and your left hand will lead the horse inwards. Use your left hand/rein to ask for a bend to the inside. Maintain this bend while increasing and decreasing the size of the circle. To prevent the horse from merely falling into the circle, your left leg must stay at the girth and the horse must maintain a bend around this inside leg.  The horse should soften to the inside as you reach the smaller circle. After 2 revolutions on the small circle of about 10 meters, enlarge the circle again by using light touches of your left leg. The horse should stay in the same bend as you push it outwards. This exercise can be worked in walk and then in trot, and should be followed by some energetic forward work in rising trot. Repeat the entire sequence on right rein. It is crucial to maintain an even rhythm, and to monitor the horse's body so that it is moving its entire body in & out on the circle at the same time - shoulders should not move first, then hips or vice versa - the horse's body should move in as a whole & out as a whole.  Practice 2-3 times weekly."
  },
  [ExerciseCode.BE5]: {
    id: ExerciseCode.BE5,
    category: 'back-exercises',
    header: "'Free' Canter Work",
    body: 'Canter 1-2 times around the arena, on a loose rein (no frame/no shape), allowing the horse to place its head/neck/nose wherever it would like, staying off the horse’s back (in a 2-point position), allowing horse to dictate the pace. Repeat in the Other direction.  Practice 2-3 times weekly.'
  },
  [ExerciseCode.BE6]: {
    id: ExerciseCode.BE6,
    category: 'back-exercises',
    header: 'Figure-Eight Counter Canter W/Counter Bend',
    body: 'Ride a figure-eight pattern in which you canter on the correct lead on one end of the shape, and a counter-canter on the other end of the shape.  While you are riding through the counter-canter portion of the pattern, ask for and maintain a counter-bend, so the horse is bent away from the leading leg. Practice 2- 3 times weekly.'
  },
  [ExerciseCode.BE7]: {
    id: ExerciseCode.BE7,
    category: 'back-exercises',
    header: 'Lateral Canter Work',
    body: "While cantering, practice moving the horse off the rail, over to the quarter line for several strides & then return back to the rail for several strides, only to repeat the pattern. You will be riding for several strides on the rail & then several strides on the quarter line, as if you are 'bouncing' back & forth from rail to quarter line in the canter. While performing this, maintain an inside or true bend for several minutes, then change to an outside or counter-bend for several minutes & finally finish with a straight horse (no bend), to complete the exercise.  Practice 2-3 times weekly."
  },
  [ExerciseCode.BE8]: {
    id: ExerciseCode.BE8,
    category: 'back-exercises',
    header: 'Canter Before Trot',
    body: 'Canter is the absolute best motion for a tight back because pelvic action takes place that utilizes the lower back in concert with the gluteus muscle group. It also is the most efficient movement of the horse. After the horse has warmed up at the walk, transition into the canter, BEFORE doing any trot work. This develops the most power in the bottom line muscles & stretches the top line. Repeat walk-canter-walk transitions for several minutes in both directions before moving into trot work. Practice 2-3 times weekly.'
  },
  [ExerciseCode.BE9]: {
    id: ExerciseCode.BE9,
    category: 'back-exercises',
    header: 'School a Series of Successive Changes in Pace',
    body: 'Preferably walk-canter-walk - without losing equilibrium while changing from one to another. This provides support for the back. Work this exercise on both reins. Practice 2-3 times weekly.'
  },
  [ExerciseCode.BE10]: {
    id: ExerciseCode.BE10,
    category: 'back-exercises',
    header: 'Interval Schooling w/Canter',
    body: 'Practice 2-3 times weekly',
    list: [
      '1. Walk the horse briskly on a long rein for 10 minutes, with frequent changes of direction.',
      '2. Next, canter at a moderate pace, around the arena for 2 minutes.',
      "3. Transition down to a working trot for 2 minutes.  This is the horse's 'rest' period.",
      '4. Next, canter in the opposite direction for 2 minutes.',
      '5. Transition down to a working trot for 2 minutes.',
      '6. Repeat this canter-trot-canter sequence, with changes of rein, for a total of 12 minutes in each direction.',
      '7. Once you have completed this sequence in each direction, transition down to a relaxed walk, on a loose rein & cool out.'
    ]
  },
  [ExerciseCode.BE11]: {
    id: ExerciseCode.BE11,
    category: 'back-exercises',
    header: 'Interval Canter Work',
    body: 'Canter is the most natural movement of the horse - the pelvic action that occurs utilizes the lower back in concert with the upper glute which is helpful in releasing the lower back. Practice 2-3 times weekly.',
    list: [
      '1. Walk the horse briskly for 5 minutes.',
      '2. Ask the horse to trot for 2 minutes.',
      '3. From the trot, ask the horse to canter for 2 minutes. Allow the horse to dictate the pace.',
      '4. Continue this pattern...2 minutes of trot - 2 minutes of canter - 2 minutes of trot - 2 minutes of canter, for a total of 8 minutes. Once the 8 minutes have passed, reverse direction and repeat the same pattern.',
      '5. Once you have finished, ask the horse to walk casually for 5 minutes to relax, soften and cool down.'
    ]
  },
  [ExerciseCode.BE12]: {
    id: ExerciseCode.BE12,
    category: 'back-exercises',
    header: 'Figure 8 Patterns',
    body: 'Repeat these 3 varied figure-eight patterns substituting flying changes for simple changes. Think of using the counter canter to keep the flying changes straight. Often in the beginning stages, a horse will have a tendency to swing more towards one side than the other. If you ride this change into counter canter towards the wall, the wall helps the horse to make a straighter change. After riding sequential changes, finish the lesson for the day by riding counter canter around the arena, so the horse learns not to anticipate the change and becomes more obedient to the aids. Practice 2-3 times weekly.',
    list: [
      '1. Begin riding a figure-eight in canter with large loops, asking for the correct lead in each direction, changing leads with a simple change. Gradually decrease the size of the loops, and then slowly fade back out to large loops.',
      '2. Next, canter the figure-eight pattern in which one end of the loop is the correct lead, while the other end of the loop is in counter-canter, again, simple changes, again, gradually decreasing the size of the loops. Finish with fading out to larger loops.',
      '3. Canter the figure-eight pattern asking for counter-canter on each loop. Using simple changes here as well. Slowly decrease the size of each loop, ending with fading back to larger loops to finish.'
    ]
  },
  [ExerciseCode.BE13]: {
    id: ExerciseCode.BE14,
    category: 'back-exercises',
    header: 'Cantering, Bending & Moving Laterally',
    body: 'Once the horse is warmed up, canter several laps around the arena, maintaining a counter bend (bend to the outside), while moving the horse in towards the quarter line & then back out to the rail, next straighten the horse for several strides & then change to a true bend (bend to the inside), in the canter, while once again moving the horse over to the quarter line for several strides & then again back out to the rail. The idea is that you will be cantering, maintaining a bend AND moving several steps laterally all at the same time. Perform this for several laps in both directions. Practice 2-3 times weekly.'
  },
  [ExerciseCode.BE14]: {
    id: ExerciseCode.BE14,
    category: 'back-exercises',
    header: "'Pasture Posture' Exercise",
    body: "Practice walking & trotting in 'Pasture Posture.'  Horses are designed to graze approximately 18 hours per day, therefore one of the most comfortable & most natural postures for their body to maintain is the position they are in when grazing on grass... 'Pasture Posture.' Try to recreate this posture by slowly bringing their chin in towards their chest for several seconds & slowly letting the reins out to allow them to stretch down into 'Pasture Posture' whiel sending them forward with leg... the goal is to send them on from their hind end, while they are stretching their head & neck down freely, as if to graze... this may aid in lifting the abdominal muscles, while stretching the topline (hindquarters, back & neck). It may take time, so please be patient. Practice this in both directions at the walk. Once confirmed, practice in trot. This is a wonderful way to both warm up & cool down when riding. Practice 2-3 times weekly"
  },
  [ExerciseCode.BE15]: {
    id: ExerciseCode.BE15,
    category: 'back-exercises',
    header: 'Leg Yield to Canter Transitions',
    body: 'After warming up, ride several 20 meter circles in the walk & trot. Next, perform several leg yielding steps on the 20 meter circle (in both walk & trot), moving both into the circle center & away from the circle center. Next, repeat the leg yielding steps & immediately ask for a canter depart. Canter 1 revolution on the circle & make a downward transition to walk. Repeat so that you leg yield out on the circle & then canter, as well as leg yield in on the circle & then canter. Practice for several minutes until there is cadence in all gaits, the horse feels balanced, the transitions are fluid & you both are soft in your bodies. Execute this exercise in both directions, 2-3 times weekly'
  },
  [ExerciseCode.BE16]: {
    id: ExerciseCode.BE16,
    category: 'back-exercises',
    header: 'Fives and Fives',
    body: 'This flatwork exercise is designed to improve your balance as well as encourage calmness on the horse. On a circle track, begin cantering for five full strides. After five strides, shift your horse into a walk for an additional five strides. Return back to the canter, repeating this pattern for five full circuits on each one of your reins before completing the exercise. In addition to balance, this exercise will improve your horses ability to follow direction.'
  },
  [ExerciseCode.BE17]: {
    id: ExerciseCode.BE17,
    category: 'back-exercises',
    header: 'Lunging Exercise',
    body: 'Trot over poles at a slow tempo, maintaining the cadence, encouraging the horse to stretch down. This helps to loosen the spine. It is important to maintain the rhythm for balance and strength. The exercise works for improving range of motion with respect to the back. Practice 2-3 times weekly.'
  },

  // Rib cage exercises
  [ExerciseCode.RC1]: {
    id: ExerciseCode.RC1,
    category: 'rib-cage-exercises',
    header: 'Ride Square Serpentines',
    body: 'Ride Square Serpentines at the trot with strong half-halts before the change of bend and a deep change of bend in between the squares to emphasize the stretch. Try to put as many squares as you can in the serpentine.  Practice 2-3 times weekly.'
  },
  [ExerciseCode.RC2]: {
    id: ExerciseCode.RC2,
    category: 'rib-cage-exercises',
    header: 'Clover Leaf Cones',
    body: "Ride around 4 cones on a small circle, with long reins & lots of inside bend & inside leg. Be active with the outside rein & leg as well, so the horse does not over end in & fall out through its neck/shoulder & hind end. Keep the outside rein against its head & neck, & your outside riding leg back, behind the girth. Do not insist, but rather encourage. Relax, wait & repeat until the horse drops & it bends more freely & regularly. This stretches the outside of the body & aids the horse in letting go of lateral back tension & rib (intercostal) stiffness.  The cones will be set about 8-10 feet apart.  Ride the first cone on RIGHT rein, second cone on LEFT rein, third cone on RIGHT rein & final cone on LEFT rein. You will be creating a sort of 'Clover-Leaf' pattern. Once you & your horse are comfortable performing this exercise in the walk, ride it at the trot. Practice 2-3 times weekly. Please see accompanying image for cone placement. Please note: The picture depicts riding the first 2 cones on RIGHT rein, & the next 2 cones on LEFT rein.  This is another good option as well.",
    image: [RC2]
  },
  [ExerciseCode.RC3]: {
    id: ExerciseCode.RC3,
    category: 'rib-cage-exercises',
    header: 'Exercising on a Small Circle',
    body: '(about 19 ½ ft in diameter) In the arena, at the walk and trot. Do not execute this on hard ground.  Work this track in both directions for severalrevolutions, and then move on to forward work on straight lines. After several minutes, return to the circular track for several minutes. Then back to straight forward lines, so that you are spending several minutes on the small circle, and then several minutes on the straight lines...interjecting each pattern as you go. Practice 2-3 times weekly.'
  },

  // Straightness exercises
  [ExerciseCode.SE1]: {
    id: ExerciseCode.SE1,
    category: 'straightness-exercises',
    header: 'Ride A Rectangle in The Arena',
    body: 'After the horse has warmed up, begin riding in a low and semi-round frame on a fairly loose rein: Ask the horse to stretch down, then yield to the reins. Start at a walk, once the horse can master this, proceed to the trot. Start with only a minute or two, and slowly work up to approximately 5 minutes. Try to facilitate a stretch that eventually reaches within a few inches from the ground. It is important that the goal of this shape is low AND semi-round to stretch the neck and back properly and effectively. Cut-off the corners off the arena, by riding them in a straight line rather than following the actual curve of the arena track. You will be riding a large rectangular pattern, so the horse will ride the long sides in a straight line, as well as the short sides in a straight line, thus eliminating the bend/curve of the arena corners. Once the horse is comfortable and confirmed in maintaining this low, semi-round shape on a LOOSE rein, ask for right and left flexions. The goal is to have the horse stretch to the right and left while maintaining the low, semi-round shape, on a loose rein. If the horse raises its head and neck upward when asked to bend to the right or left, begin again - this is incorrect. Hold each flexion for 10-15 seconds. Practice 2-3 times weekly.'
  },
  [ExerciseCode.SE2]: {
    id: ExerciseCode.SE2,
    category: 'straightness-exercises',
    header: 'Ride Square Serpentines',
    body: 'Ride Square Serpentines at the trot with strong half-halts before the change of bend and a deep change of bend in between the squares to emphasize the stretch. Try to put as many squares as you can in the serpentine.  Practice 2-3 times weekly.'
  },
  [ExerciseCode.SE3]: {
    id: ExerciseCode.SE3,
    category: 'straightness-exercises',
    header: "Ride 'Square' Figure-Eights",
    body: 'Rather than traditional loops. Increase the number of squares, if work space allows, breaking away from riding the textbook 3 changes of rein, try riding 4- 6 changes of rein. Practice 2-3 times weekly.'
  },
  [ExerciseCode.SE4]: {
    id: ExerciseCode.SE4,
    category: 'straightness-exercises',
    header: 'Ride A Large Square in The Arena',
    body: 'Practice 2-3 times weekly.',
    list: [
      '1. At the walk, ride a large square shaped pattern in the arena. As you finish the first side of the square, halt and back up 4-5 steps. Halt, turn and ride the next side of the square. Repeat the same sequence, so that you are walking one side of the square (a straight line), halting at the end of each side of the square, and backing up 4-5 steps before halting, turning and proceeding to the next side of the square shaped pattern.  Ride this pattern for 5 minutes in each direction.',
      '2. Next, ride the same square pattern, however, eliminate the backing...instead, walk the first side of the square, trot the next side of the square, walk the third side of the square, and trot the final, fourth side of the square.Ride this pattern for 5 minutes in each direction.',
      '3. Lastly, once again ride the same square pattern in the following manner; walk the first side of the square, halt, back up 4-5 steps, halt, turn and trot the second side of the square, halt, turn and walk the third side of the square, halt and back up the entire length of the third side of the square (you are retracing your steps in reverse), halt, trot the third side of the square, halt, turn and walk the final and fourth side of the square.  Ride this pattern for 5 minutes in each direction.'
    ]
  },
  [ExerciseCode.SE5]: {
    id: ExerciseCode.SE5,
    category: 'straightness-exercises',
    header: 'Arena Diamond',
    body: 'Practice 2-3 times weekly.',
    list: [
      '1. Develop working trot, tracking right.',
      '2. At A, turn off the rail directly toward E, riding a mini-diagonal line (do NOT ride in the corner before A and K).',
      '3. Arrive at the rail at E and proceed only one stride.',
      '4. Then turn off the rail and ride toward C.',
      '5. Continue to ride a diamond pattern with the third and fourth points at B and A (see Figure 1). If your arena lacks dressage letters, set up cones at the marks specified in the pattern.'
    ],
    image: [SE5]
  },

  // Hind end exercises
  [ExerciseCode.HI1]: {
    id: ExerciseCode.HI1,
    category: 'hind-end-exercises',
    header: 'Transitions',
    body: 'Practice walk-halt-walk, trot-halt-trot and canter-halt-canter transitions to strengthen the abdominal muscles, stretch the loin muscles and encourage the horse to bring its hindquarters underneath itself.  Practice 2-3 times weekly.'
  },
  [ExerciseCode.HI2]: {
    id: ExerciseCode.HI2,
    category: 'hind-end-exercises',
    header: 'Turn on the Forehand & Leg-Yield',
    body: 'These lateral exercises should be ridden in the following order (1) turn on the forehand & (2) leg-yielding. The turn on the forehand is a mild stretching exercise for the hind limb. Increase the level of physical difficulty at the walk by then leg-yielding to stretch the hip flexors and hind leg adductors (the muscles that draw the hind legs in towards the body). Move on to leg-yielding in the trot. Practice 2-3 times weekly.'
  },
  [ExerciseCode.HI3]: {
    id: ExerciseCode.HI3,
    category: 'hind-end-exercises',
    header: 'Trot/Canter Dressage Sequence',
    body: 'Practice 2-3 times weekly.',
    list: [
      '1. Execute working or collected trot on a 10-meter circle twice.',
      '2. Ride halfway down the long side in haunches-in, then change to shoulder-in for remaining half of the long side.',
      '3. At the end, straighten the horse and pick up a working or collected canter. Canter twice around a 15-meter circle and go down the long side in extended canter.'
    ]
  },
  [ExerciseCode.HI4]: {
    id: ExerciseCode.HI4,
    category: 'hind-end-exercises',
    header: 'Rein-Back Transitions',
    body: 'Back up 6-8 steps, halt and then move forward into an extended canter around the arena. Practice 2-3 times weekly.'
  },
  [ExerciseCode.HI5]: {
    id: ExerciseCode.HI5,
    category: 'hind-end-exercises',
    header: 'Turn on the Forehand',
    body: "Incorporate more 'Turn on the Forehand' into the weekly schooling sessions"
  },
  [ExerciseCode.HI6]: {
    id: ExerciseCode.HI6,
    category: 'hind-end-exercises',
    header: 'Riding Pattern',
    list: [
      '1. Work on 2 tracks in all 3 gaits.',
      '2. Practice a series of successive changes in pace...walk-canter-walk, without losing equilibrium while changing from one to another.',
      '3. Rein back.',
      '4. Counter Canter.',
      '5. Ride a figure eight pattern in which the first loop is in the correct lead & the second loop is in counter canter.',
      '6. Practice this pattern 2 times weekly.Ride each piece of the pattern until the horse softens & relaxes while performing each task.Ride each task in both directions. '
    ]
  },
  [ExerciseCode.HI7]: {
    id: ExerciseCode.HI7,
    category: 'hind-end-exercises',
    header: 'A Riding Workout',
    list: [
      '1. Warm up at the walk for 5 minutes on each rein.',
      '2. Work in the trot for 5 minutes on each rein.',
      '3. Be sure to maintain regular cadence in all gaits.',
      '4. Execute several strike-offs at the canter, from the walk, in both directions.',
      '5. Conclude with 15 voltes at a canter on each rein.'
    ]
  },
  [ExerciseCode.HI8]: {
    id: ExerciseCode.HI8,
    category: 'hind-end-exercises',
    header: 'Canter-Trot Transitions To Engage The Hind End',
    body: "There are many methods to teaching engagement but the 'canter-trot' is relatively easy for both the horse and rider. It also accomplishes the main purpose of shifting the weight to the hind end and waking up the horse's rear engine muscles. Start from any gait (even a reverse). Canter (no more than three strides). Then Trot. Before you get insulted by the seemingly simple instructions above, please take note: it's not as easy as it sounds! Possible Errors (There might be several unwanted responses you will have to redirect before you get the desired result.)",
    list: [
      '1. The horse wants to canter off into the sunset. Many horses transition into the canter but then resist breaking back into the trot. There may be many reasons why but invariably, horses have an easier time staying in the canter (and eventually getting heavier and heavier to the forehand). This is because it takes a lot of hind end work to break the momentum of the canter! Remember that this exercise is not intended to be a canter exercise. It is a canter-TROT exercise, so the horse has to break back into the trot within one, two or three canter strides. ',
      '2. The horse trots faster. To engage the hind end, the horse must take a few canter strides. Just moving the legs faster into the trot is completely counterproductive to establishing hind end engagement. If the horse just trots along faster, half-halt into a slower trot rhythm, and ask for the canter again. Then trot.',
      '3. The horse shows discomfort. There might be ear pinning, tail swishing, teeth grinding, hopping... you name it. Basically, the horse is indicating either physical discomfort or mental stress. First, ensure that there is nothing wrong with the tack, and there is nothing otherwise physically bothering the horse. If the horse is demonstrating confusion or frustration, you are likely taking him out of his comfort zone (comfortable = riding on the forehand?) and asking him to do something that he honestly finds difficult In this case, be gentle, calm and patient but be firm! Many horses get used to working on a heavy forehand and initially resist bearing weight on the hind legs. If this happens to be the case, then teaching the horse hind end engagement is even more essential than you think! Keep trying for the canter and when you get it, trot. What happens after the canter? After the few canter strides, break back into the trot. This trot should be very different from the trots before the canter. It should feel more active, bouncier and even slower.  If the hind legs are truly reaching farther underneath the body, the stride might become longer and more ground-covering. At this point, you might want to enjoy the trot you have and move into further trot work from here. You might want to develop even more engagement and do a few more canter-trots in a row. Alternately, you might want to move into a completely new movement that benefits from the deeper engagement you just achieved. '
    ]
  },

  // Overall body conditioning exercises
  [ExerciseCode.OB1]: {
    id: ExerciseCode.OB1,
    category: 'overall-body-exercises',
    header: 'Shrinking Figure Eights',
    body: "Arrange 6 objects in the arena space as shown in the attached image. You may use whatever you have available that is safe i.e. cones, jump blocks, grooming brushes, saddle pads etc. The widest set will be near the rail, the next set will be near the quarter line & the last set will be near the centerline. After warming up, practice riding the track shown in the image, starting with the largest figure eight, reducing to the medium size figure eight & concluding with the small figure eight. This exercise may be ridden in the walk, trot & canter...based on your comfort level, skill & your horse's training, work in whichever gaits are most suitable for you. Practice this pattern for several minutes after warm up, again mid ride & just before cool down. Perform this exercise 2-3 times weekly.",
    image: [OB1]
  },
  [ExerciseCode.OB2]: {
    id: ExerciseCode.OB2,
    category: 'overall-body-exercises',
    header: '6 Count Walk/Trot Set',
    body: 'After the horse has warmed up practice a walk/trot sequence in which the horse walks for 6 steps, trots for 6 steps, walks for 6 steps, trots for 6 steps & so on. Practice for several minutes in each direction until the transitions become light, crisp & balanced. Repeat mid ride & again, just before cool down. Ride this exercise 2-3 times weekly.'
  },
  [ExerciseCode.OB3]: {
    id: ExerciseCode.OB3,
    category: 'overall-body-exercises',
    header: 'Neural Re-Education Terrain Exercise',
    body: 'Walk on a number of varied terrains, for 2 minute sessions, in sequence. If possible, perform this exercise for a total of 10 minutes, 2-3 times weekly. The 10 minute block may be incorporated after the horse has warmed up. Use whatever is safely available at your facility. For example, walk on asphalt for 2 minutes, then immediately move to grass for 2 minutes, then immediately move to sand for 2 minutes, then immediately move to packed dirt for 2 minutes & then immediately move to indoor arena footing for 2 minutes. Take a good look around the property & utilize the varied, safe surface that are available. When the horse travels across each footing, it cause the animal to adapt rapidly. This in turn improves the quickness of response & reaction of the neurotransmitter receptors. Proprioception training, such as this, assists in bringing about the recovery of coordination.'
  }
};
