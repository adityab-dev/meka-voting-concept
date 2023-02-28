import { Election } from "../Types/Types";

const manipur: Election = {
  election: "Manipur State Elections",
  date: "08-04-2022",
};

const chattisgarh: Election = {
  election: "Chattisgarh State Elections",
  date: "12-04-2022",
};

const bangaluru: Election = {
  election: "Bangaluru State Elections",
  date: "14-04-2022",
};

const gurugram: Election = {
  election: "Gurugram Municipal Corporation",
  date: "16-04-2023",
};

export const elections: Array<Election> = [manipur, chattisgarh, bangaluru, gurugram];
