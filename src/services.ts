import axios, { AxiosPromise } from 'axios';

export default class Services {

    public static getJobs():AxiosPromise {
        return axios.get('jobs/listings');
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public static createJob(payload: any):AxiosPromise {
        return axios.post('jobs/create', payload);
    }
}
