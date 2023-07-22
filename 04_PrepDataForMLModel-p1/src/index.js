import * as tf from '@tensorflow/tfjs'

// Async reminder
// console.log('1');
// console.log('2');
// const init = async () => {
//     await tf.ready();
//     console.log(tf.getBackend());
// }
// init();
// console.log('4');

import * as model from './model';

const init = async () => {
    await tf.ready();
    model.train();
}

init();

