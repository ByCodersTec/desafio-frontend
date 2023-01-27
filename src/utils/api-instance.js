import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const backendBaseURL = 'https://www.googleapis.com/youtube/v3/';

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const apiInstance = applyCaseMiddleware(
    axios.create({
      headers: headers,
      baseURL: backendBaseURL,
    })
  );
  