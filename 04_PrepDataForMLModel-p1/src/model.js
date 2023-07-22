import * as tf from '@tensorflow/tfjs'
import * as tfvis from '@tensorflow/tfjs-vis'

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

const plotOutputLabelOutput = (labels) => {
    const labelsCount = labels.reduce((acc, label) => {
        acc[label] = acc[label] === undefined ? 1 : acc[label] += 1;
        return acc;
    }, {});

    const data = [];

    Object.keys(labelsCount).forEach((key) => {
        data.push({
            index: key,
            value: labelsCount[key]
        })
    });

    tfvis.render.barchart({
        tab: 'Explor',
        name: 'Toxic Labels'
    }, data,{});
}

const run = async () => {
    const rawDataResult = readRawData();
    const labels = [];

    await rawDataResult.forEachAsync((r) => {
        labels.push(r['ys']['toxic']);
    })

    plotOutputLabelOutput(labels);
}