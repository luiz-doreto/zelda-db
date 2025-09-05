import '@testing-library/jest-native/extend-expect';
import { mockNavigate } from './mocks';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
      goBack: jest.fn(),
      push: jest.fn(),
      replace: jest.fn(),
    }),
  };
});
