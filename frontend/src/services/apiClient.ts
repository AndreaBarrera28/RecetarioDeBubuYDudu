import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import FetchedResponse from "../entities/FetchedResponse";

export const axiosInstance = axios.create({
    baseURL: "/api",
    withCredentials: true,
    withXSRFToken: true,
});

class APIClient<T> {
    endpoint: string;
    extraEndpoint: string;

    constructor(endpoint: string, extraEndpoint: string = "") {
        this.endpoint = endpoint;
        this.extraEndpoint = extraEndpoint;
    }
    fetch = () => {
        return axiosInstance.get(this.endpoint);
    };

    getAll = (config: AxiosRequestConfig) =>
        axiosInstance
            .get<FetchedResponse<T>>(this.endpoint, config)

            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                if (401 === error.response.status) {
                    // window.location.href = `/Account/Login?ReturnUrl=${encodeURIComponent('/contacts')}`
                    window.location.href = `/login`;
                }
            });

    post = (data: T) =>
        axiosInstance
            .post<T, AxiosResponse>(this.endpoint, data, {
                responseType: "json",
            })
            .then((res) => res.data)
            .catch((error) => {
                if (401 === error.response.status) {
                    // window.location.href = `/Account/Login?ReturnUrl=${encodeURIComponent('/contacts')}`
                    window.location.href = `/login`;
                }
            });

    put = (id: string, data: T) =>
        axiosInstance
            .put<T>(this.endpoint + id + this.extraEndpoint, data)
            .then((res) => res.data)
            .catch((error) => {
                if (401 === error.response.status) {
                    // window.location.href = `/Account/Login?ReturnUrl=${encodeURIComponent('/contacts')}`
                    window.location.href = `/login`;
                }
            });

    delete = (id: string) =>
        axiosInstance
            .delete(this.endpoint + id)
            .then((res) => res.data)
            .catch((error) => {
                if (401 === error.response.status) {
                    // window.location.href = `/Account/Login?ReturnUrl=${encodeURIComponent('/contacts')}`
                    window.location.href = `/login`;
                }
            });

    get = (id: string, extraEndpoint = "") =>
        axiosInstance
            .get<T>(this.endpoint + id + extraEndpoint)
            .then((res) => {
                console.log(res);
                return res.data;
            })
            .catch((error) => {
                if (401 === error.response.status) {
                    // window.location.href = `/Account/Login?ReturnUrl=${encodeURIComponent('/contacts')}`
                    window.location.href = `/login`;
                }
            });

    patch = (id: string, data: T) =>
        axiosInstance
            .patch<T>(this.endpoint + id + this.extraEndpoint, data)
            .then((res) => res.data)
            .catch((error) => {
                if (401 === error.response.status) {
                    // window.location.href = `/Account/Login?ReturnUrl=${encodeURIComponent('/contacts')}`
                    window.location.href = `/login`;
                }
            });

    getName = (name: string, extraEndpoint = "") =>
        axiosInstance
            .get<FetchedResponse<T>>(this.endpoint + name + extraEndpoint)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                if (401 === error.response.status) {
                    // window.location.href = `/Account/Login?ReturnUrl=${encodeURIComponent('/contacts')}`
                    window.location.href = `/login`;
                }
            });
}

export default APIClient;
