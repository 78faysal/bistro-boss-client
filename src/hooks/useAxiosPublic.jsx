import axios from 'axios';


const axiosPublic = axios.create({
    baseURL: 'https://bistro-server-123-ten.vercel.app',
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;