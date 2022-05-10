import { render, screen } from '@testing-library/react';
import App from './App';
import GitHubCards from './components/GitHubCard';
import renderer from 'react-test-renderer';

test('renders a snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});