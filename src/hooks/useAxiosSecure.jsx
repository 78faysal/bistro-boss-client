import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://bistro-server-123-ten.vercel.app",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  //request interceptors to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
    //   console.log("request stoped by interceptors");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );

  //   intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
    //   console.log("error in the interceptors", status);
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
