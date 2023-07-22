import * as tf from '@tensorflow/tfjs'

export const train = () => {
    tf.tidy(() => {
        run();
    })
};

const csvSource = 'train.csv'
const readRawData = () => {
    const readData = tf.data.csv(csvSource, {
        columnConfigs: {
            toxic: {
                isLabel: true
            }
        }
    });


    return readData;
}

const run = async () => {
    const rawDataResult = readRawData();

    await rawDataResult.forEachAsync((r) => {
        console.log(r);
    })
}