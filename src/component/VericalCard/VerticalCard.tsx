import React from 'react';
import {MainContainer} from './styled';
import SVGIcon from '../../assets/svg/index';
import {TouchableOpacity} from 'react-native';
import {DIGIT_1DOT5, DIGIT_45} from '../../constants/numbers';

const VerticalCard = () => {
  return (
    <MainContainer>
      <TouchableOpacity>
        <SVGIcon.ellipse
          width={DIGIT_45}
          height={DIGIT_45}
          strokeWidth={DIGIT_1DOT5}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <SVGIcon.heart
          width={DIGIT_45}
          height={DIGIT_45}
          strokeWidth={DIGIT_1DOT5}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <SVGIcon.comment
          width={DIGIT_45}
          height={DIGIT_45}
          strokeWidth={DIGIT_1DOT5}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <SVGIcon.sidebarLabelicon
          width={DIGIT_45}
          height={DIGIT_45}
          strokeWidth={1.5}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <SVGIcon.share
          width={DIGIT_45}
          height={DIGIT_45}
          strokeWidth={DIGIT_1DOT5}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <SVGIcon.flip
          width={DIGIT_45}
          height={DIGIT_45}
          strokeWidth={DIGIT_1DOT5}
        />
      </TouchableOpacity>
    </MainContainer>
  );
};

export default VerticalCard;
