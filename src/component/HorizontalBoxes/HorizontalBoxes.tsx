import React from 'react';
import {MainBox, MainContainer, NumberText} from './styled';
import colors from '../../styles/colors';
import {
  STRING_1,
  STRING_2,
  STRING_3,
  STRING_4,
  STRING_5,
} from '../../constants/strings';

interface SingleElementProps {
  color: string;
  number: string;
}

const SingleElement: React.FC<SingleElementProps> = ({color, number}) => {
  return (
    <MainBox color={color}>
      <NumberText>{number}</NumberText>
    </MainBox>
  );
};

const HorizontalBoxes = () => {
  return (
    <MainContainer>
      <SingleElement color={colors.firstBox} number={STRING_1} />
      <SingleElement color={colors.secondBox} number={STRING_2} />
      <SingleElement color={colors.thirdBox} number={STRING_3} />
      <SingleElement color={colors.fourthBox} number={STRING_4} />
      <SingleElement color={colors.fifthBox} number={STRING_5} />
    </MainContainer>
  );
};

export default HorizontalBoxes;
