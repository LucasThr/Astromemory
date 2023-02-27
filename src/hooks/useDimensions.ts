import {Dimensions} from 'react-native';

export const useDimensions = () => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const height = (heightValue: number) => {
    return Math.round(windowHeight * (heightValue / 100));
  };

  const width = (widthValue: number) => {
    return Math.round(windowWidth * (widthValue / 100));
  };

  return {height, width};
};
