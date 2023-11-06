import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d4a857f366b64968816ac883926eb3ad",
  },
});
