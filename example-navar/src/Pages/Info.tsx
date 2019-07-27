import * as React from 'react';

import { Cell } from '../components/Cell';
import { Navar, navarManager } from '../lib';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Info: React.FC<IProps> = () => {
  return (
    <Navar path="Info">
      <Cell>info</Cell>
      <Cell>info</Cell>
      <Cell>info</Cell>
      <Cell>info</Cell>
      <Cell>info</Cell>
      <Cell>info</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
      <Cell onClick={navarManager.pop}>Pop</Cell>
    </Navar>
  );
};
