import Foursquare from "@foursquare/foursquare-places";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const foursquare = new Foursquare(CLIENT_ID, CLIENT_SECRET);