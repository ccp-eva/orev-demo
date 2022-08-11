import { posPermutations } from './posPermutations.js';
import { newTrials } from './newTrials.js';
import { shuffleArray } from './shuffleArray.js';

export const randomizeNewTrials = () => {
  // (1) each of the four positions gets quarter pictures for target words;
  // (2) target pictures cannot be located in the same position in more than three consecutive picture boards;
  // (3) across seven subsequent items, target pictures appear in each position at least once.
  // three packages, all shuffled once
  const posA = shuffleArray([1, 2, 3, 4]);
  const posB = shuffleArray([1, 2, 3, 4]);
  const posC = shuffleArray([1, 2, 3, 4]);

  // combine first two packages, shuffle again
  const posAB = shuffleArray(posA.concat(posB));

  // combine with third package
  const posABC = posAB.concat(posC);

  // and again...
  // two packages, shuffled once
  const posE = shuffleArray([1, 2, 3, 4]);
  const posD = shuffleArray([1, 2, 3, 4]);

  // combine first two packages, shuffle again
  const posED = shuffleArray(posE.concat(posD));

  // combine with first complete package
  const targetPositions = posABC.concat(posED);

  const permutations = posPermutations();

  shuffleArray(newTrials).forEach((trial, i) => {
    trial.order = i + 1;
    trial.trial = trial.order + 32;
    trial.targetPos = targetPositions[i];
    trial.perm = permutations[trial.targetPos - 1].pop();
  });

  return newTrials;
};

// here is the created randomized order:
// [
//     {
//         "item": 2,
//         "targetWord": "badger",
//         "order": 1,
//         "trial": 33,
//         "targetPos": 3,
//         "perm": [
//             "dist1",
//             "dist2",
//             "target",
//             "dist3"
//         ]
//     },
//     {
//         "item": 4,
//         "targetWord": "ruin",
//         "order": 2,
//         "trial": 34,
//         "targetPos": 2,
//         "perm": [
//             "dist1",
//             "target",
//             "dist2",
//             "dist3"
//         ]
//     },
//     {
//         "item": 16,
//         "targetWord": "lobster",
//         "order": 3,
//         "trial": 35,
//         "targetPos": 3,
//         "perm": [
//             "dist3",
//             "dist1",
//             "target",
//             "dist2"
//         ]
//     },
//     {
//         "item": 20,
//         "targetWord": "orchid",
//         "order": 4,
//         "trial": 36,
//         "targetPos": 2,
//         "perm": [
//             "dist2",
//             "target",
//             "dist3",
//             "dist1"
//         ]
//     },
//     {
//         "item": 17,
//         "targetWord": "cello",
//         "order": 5,
//         "trial": 37,
//         "targetPos": 4,
//         "perm": [
//             "dist2",
//             "dist1",
//             "dist3",
//             "target"
//         ]
//     },
//     {
//         "item": 8,
//         "targetWord": "palm tree",
//         "order": 6,
//         "trial": 38,
//         "targetPos": 4,
//         "perm": [
//             "dist3",
//             "dist1",
//             "dist2",
//             "target"
//         ]
//     },
//     {
//         "item": 7,
//         "targetWord": "ocean",
//         "order": 7,
//         "trial": 39,
//         "targetPos": 1,
//         "perm": [
//             "target",
//             "dist3",
//             "dist2",
//             "dist1"
//         ]
//     },
//     {
//         "item": 9,
//         "targetWord": "fan",
//         "order": 8,
//         "trial": 40,
//         "targetPos": 1,
//         "perm": [
//             "target",
//             "dist1",
//             "dist2",
//             "dist3"
//         ]
//     },
//     {
//         "item": 11,
//         "targetWord": "flounder",
//         "order": 9,
//         "trial": 41,
//         "targetPos": 1,
//         "perm": [
//             "target",
//             "dist1",
//             "dist3",
//             "dist2"
//         ]
//     },
//     {
//         "item": 5,
//         "targetWord": "elk",
//         "order": 10,
//         "trial": 42,
//         "targetPos": 4,
//         "perm": [
//             "dist3",
//             "dist2",
//             "dist1",
//             "target"
//         ]
//     },
//     {
//         "item": 18,
//         "targetWord": "kayak",
//         "order": 11,
//         "trial": 43,
//         "targetPos": 2,
//         "perm": [
//             "dist3",
//             "target",
//             "dist2",
//             "dist1"
//         ]
//     },
//     {
//         "item": 14,
//         "targetWord": "jaguar",
//         "order": 12,
//         "trial": 44,
//         "targetPos": 3,
//         "perm": [
//             "dist1",
//             "dist3",
//             "target",
//             "dist2"
//         ]
//     },
//     {
//         "item": 13,
//         "targetWord": "choir",
//         "order": 13,
//         "trial": 45,
//         "targetPos": 1,
//         "perm": [
//             "target",
//             "dist2",
//             "dist1",
//             "dist3"
//         ]
//     },
//     {
//         "item": 19,
//         "targetWord": "satellite",
//         "order": 14,
//         "trial": 46,
//         "targetPos": 2,
//         "perm": [
//             "dist1",
//             "target",
//             "dist3",
//             "dist2"
//         ]
//     },
//     {
//         "item": 10,
//         "targetWord": "labyrinth",
//         "order": 15,
//         "trial": 47,
//         "targetPos": 1,
//         "perm": [
//             "target",
//             "dist2",
//             "dist3",
//             "dist1"
//         ]
//     },
//     {
//         "item": 6,
//         "targetWord": "gazelle",
//         "order": 16,
//         "trial": 48,
//         "targetPos": 4,
//         "perm": [
//             "dist1",
//             "dist3",
//             "dist2",
//             "target"
//         ]
//     },
//     {
//         "item": 3,
//         "targetWord": "arugula",
//         "order": 17,
//         "trial": 49,
//         "targetPos": 3,
//         "perm": [
//             "dist2",
//             "dist1",
//             "target",
//             "dist3"
//         ]
//     },
//     {
//         "item": 12,
//         "targetWord": "chanterelle",
//         "order": 18,
//         "trial": 50,
//         "targetPos": 2,
//         "perm": [
//             "dist2",
//             "target",
//             "dist1",
//             "dist3"
//         ]
//     },
//     {
//         "item": 15,
//         "targetWord": "carnation",
//         "order": 19,
//         "trial": 51,
//         "targetPos": 3,
//         "perm": [
//             "dist2",
//             "dist3",
//             "target",
//             "dist1"
//         ]
//     },
//     {
//         "item": 1,
//         "targetWord": "zucchini",
//         "order": 20,
//         "trial": 52,
//         "targetPos": 4,
//         "perm": [
//             "dist1",
//             "dist2",
//             "dist3",
//             "target"
//         ]
//     }
// ]
