import axios from "axios";

//my API constants
const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const AIRTABLE_API_ID = process.env.REACT_APP_AIRTABLE_API_ID;
const view = "Onboarding Checklist";

let url = `https://api.airtable.com/v0/${AIRTABLE_API_ID}/${view}?api_key=${AIRTABLE_API_KEY}`;
console.log(url);

export const getData = () => {
  return axios
    .get(url)
    .then(data => data)
    .catch(error => error);
};
