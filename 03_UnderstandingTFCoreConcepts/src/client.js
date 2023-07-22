import * as tf from '@tensorflow/tfjs'

const age = tf.tensor1d([20, 34], 'int32');
age.print();
tf.print(age);

console.log(age.shape);
console.log(age.dtype);

const ageAndWeight = tf.tensor2d([[23, 43], [50, 68]]);
ageAndWeight.print(ageAndWeight);

console.log(ageAndWeight.shape);
console.log(ageAndWeight.dtype);

const scalar = tf.scalar(22);
scalar.print(scalar);

console.log(scalar.shape);
console.log(scalar.dtype);
