import React from 'react';
import renderer from 'react-test-renderer';
import QuestionMark from '.';
import CustomTooltip from '../CustomTooltip';

const element = <QuestionMark />;

const elementWithText = (
  <QuestionMark>
    <span>Saiba mais</span>
  </QuestionMark>
);

const elementWithCustomTooltip = (
  <QuestionMark>
    <span>Saiba mais</span>
    <CustomTooltip>
      <p>This is a custom tooltip</p>
    </CustomTooltip>
  </QuestionMark>
);

describe('Tooltip', () => {
  it('should render a tooltip', () => {
    const tree = renderer.create(element).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Shloud render with accessibility text', () => {
    const tree = renderer.create(elementWithText).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Shloud render with Custom tooltip element inside', () => {
    const tree = renderer.create(elementWithCustomTooltip).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
