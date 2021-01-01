import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureStyle';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>La pizza du jour</h1>
      <p>pâte à pizza fraîche fait maison</p>
      <FeatureButton>Commandez</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;