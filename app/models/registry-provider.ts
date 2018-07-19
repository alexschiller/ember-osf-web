import { hasMany } from '@ember-decorators/data';
import DS from 'ember-data';
import Provider from './provider';
import Registration from './registration';

export default class RegistryProvider extends Provider {
    @hasMany('registration', { inverse: 'provider' }) registrations!: DS.PromiseManyArray<Registration>;
}

declare module 'ember-data' {
    interface ModelRegistry {
        'registry-provider': RegistryProvider;
    }
}
