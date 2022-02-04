import axios, { AxiosPromise } from 'axios';

export default class Services {

    public static getJobs():AxiosPromise {
        return axios.get('/jobs/listings');
    }

    public static createJob(payload: any):AxiosPromise {
        return axios.post('/jobs/create', payload);
    }

    public static getAJobListing(id: any):AxiosPromise {
        return axios.get(`/jobs/listing/${id}`)
    }

    public static updateJobListing(id: any, payload: any):AxiosPromise {
        return axios.put(`/jobs/update/${id}`, payload)
    }

    public static deleteJobListing(id: any):AxiosPromise {
        return axios.delete(`/jobs/delete/${id}`)
    }
}
