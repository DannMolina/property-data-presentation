import {api} from './api';

// * contants
import {ENDPOINT} from '../constant/variable';

/**
 * Retrieve and return all the properties listed in the propertyData collection in Mongo.
 * @returns The payload that is returned, only includes the propertyId and propertyName.
 */
export const getProperties = async () => {
    try {
        const {data} = await api.get(ENDPOINT.PROPERTIES);
        return data;
    } catch (err) {
        console.log(err);
    }
};

/**
 * Retrieve and return the rentalIncome data for the corresponding property.
 * @param {propertyId} propertyId
 * @returns
 */
export const getProperty = async (id) => {
    try {
        const {data} = await api.get(`${ENDPOINT.PROPERTY}${id}`);
        return data;
    } catch (err) {
        console.log(err);
    }
};
