import {
  ServicesH2,
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesIcon,
  ServicesWrapper,
  ServicesP,
} from './ServicesElements';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-1.svg';
import Icon3 from '../../images/svg-3.svg';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}></ServicesIcon>
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}></ServicesIcon>
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            You can access our platform anywhere in the world{' '}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}></ServicesIcon>
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back.{' '}
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;