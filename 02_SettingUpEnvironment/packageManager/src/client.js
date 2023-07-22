import * as tf from '@tensorflow/tfjs'

/*

import '@tensorflow/tfjs-backend-wasm'
// Don't forget to add wasm static files

*/

console.log(tf.version);
console.log(tf.version.tfjs);

/* TF Backend */
console.log(tf.getBackend());

tf.setBackend('cpu');

tf.ready().then(() => {
    console.log(tf.getBackend())
})