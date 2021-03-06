import { A } from '@ember/array';
import DS from 'ember-data';

const { Transform } = DS;

export default class ArrayTransform extends Transform {
    deserialize(value: any) {
        return A(Array.isArray(value) ? value : []);
    }

    serialize(value: any) {
        return A(Array.isArray(value) ? value : []);
    }
}

declare module 'ember-data' {
    interface TransformRegistry {
        array: ArrayTransform;
    }
}
