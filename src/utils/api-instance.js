import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const backendBaseURL = process.env.VUE_APP_YOUTUBE_API_BASE_URL;

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
  