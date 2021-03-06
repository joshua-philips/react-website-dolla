import car from '../../images/svg-2.svg';
import svg1 from '../../images/svg-1.svg';
import svg3 from '../../images/svg-3.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transactions With Zero Fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
  buttonLabel: 'Get Started',
  imgStart: false,
  img: car,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Login To Your Acount At Any Time',
  description:
    'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: svg1,
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join Our Team',
  headline: 'Creating An Account Is Extremely Easy',
  description:
    'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you are ready to go',
  buttonLabel: 'Start Now',
  imgStart: true,
  img: svg3,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true,
};
