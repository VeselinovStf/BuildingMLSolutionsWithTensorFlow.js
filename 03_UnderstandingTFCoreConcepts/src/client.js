import * as tf from '@tensorflow/tfjs'

// Memory Management
console.log('Memory Management');
tf.tidy(() => {

    // Tensors
    console.log('TESNORS');
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

    // Operations
    console.log('Operations');

    const income_one = tf.tensor1d([200, 300, 400]);
    const income_two = tf.tensor1d([800, 700, 600]);

    const total_income = tf.add(income_one, income_two);
    total_income.print();

    
    console.log(tf.memory().numTensors);

})

console.log('How many tensors left after memory cleand?')
console.log(tf.memory().numTensors);

