import { shuffleArray } from './shuffleArray.js';
export const posPermutations = () => {
  let t1 = [
    ['target', 'dist1', 'dist2', 'dist3'],
    ['target', 'dist1', 'dist3', 'dist2'],
    ['target', 'dist2', 'dist1', 'dist3'],
    ['target', 'dist2', 'dist3', 'dist1'],
    ['target', 'dist3', 'dist1', 'dist2'],
    ['target', 'dist3', 'dist2', 'dist1'],
  ];
  shuffleArray(t1);
  t1.pop();

  let t2 = [
    ['dist1', 'target', 'dist2', 'dist3'],
    ['dist1', 'target', 'dist3', 'dist2'],
    ['dist2', 'target', 'dist1', 'dist3'],
    ['dist2', 'target', 'dist3', 'dist1'],
    ['dist3', 'target', 'dist1', 'dist2'],
    ['dist3', 'target', 'dist2', 'dist1'],
  ];
  shuffleArray(t2);
  t2.pop();

  let t3 = [
    ['dist1', 'dist2', 'target', 'dist3'],
    ['dist1', 'dist3', 'target', 'dist2'],
    ['dist2', 'dist1', 'target', 'dist3'],
    ['dist2', 'dist3', 'target', 'dist1'],
    ['dist3', 'dist1', 'target', 'dist2'],
    ['dist3', 'dist2', 'target', 'dist1'],
  ];
  shuffleArray(t3);
  t3.pop();

  let t4 = [
    ['dist1', 'dist2', 'dist3', 'target'],
    ['dist1', 'dist3', 'dist2', 'target'],
    ['dist2', 'dist1', 'dist3', 'target'],
    ['dist2', 'dist3', 'dist1', 'target'],
    ['dist3', 'dist1', 'dist2', 'target'],
    ['dist3', 'dist2', 'dist1', 'target'],
  ];
  shuffleArray(t4);
  t4.pop();

  return [t1, t2, t3, t4];
};
