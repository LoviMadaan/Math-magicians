import React from 'react';
import {
  Container, Prevoius, Screen, Current, Button,
} from '../styles/Main';

const Calculator = () => (
  <Container>
    <Screen>
      <Prevoius> 10+ </Prevoius>
      <Current>10 </Current>
    </Screen>
    <Button gridSpan={2} control>AC</Button>
    <Button>DEL</Button>
    <Button operations>÷</Button>
    <Button>7</Button>
    <Button>8</Button>
    <Button>9</Button>
    <Button operations>x</Button>
    <Button>4</Button>
    <Button>5</Button>
    <Button>6</Button>
    <Button operations>+</Button>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button operations>-</Button>
    <Button decimal>.</Button>
    <Button>0</Button>
    <Button gridSpan={2} equals>=</Button>

  </Container>
);

export default Calculator;
