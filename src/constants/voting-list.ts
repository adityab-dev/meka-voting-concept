import { candidate } from "../Types/voting-candidate";

import bjp from "../Assets/bjp.png";
import congress from "../Assets/congress.png";
import AAP from "../Assets/AAP.png";
import BabuBhaiya from "../Assets/BabuBhaiya.jpg";

export const Baburao: candidate = {
  name: "Baburao ganpatrao Apte",
  affiliation: "Independent",
  age: 58,
  education: "BA (English Hons.)",
  logo: BabuBhaiya,
};

const NarendraModi: candidate = {
  name: "Narendra Modi",
  affiliation: "BJP",
  age: 72,
  education: "BA (Pol. Science)",
  logo: bjp,
};

const RahulGandhi: candidate = {
  name: "Rahul Gandhi",
  affiliation: "Congress",
  age: 52,
  education: "MA Philosophy",
  logo: congress,
};

const ArvindKejriwal: candidate = {
  name: "Arvind Kejriwal",
  affiliation: "AAP",
  age: 54,
  education: "B.Tech M.E.",
  logo: AAP,
};

export const votingList = [Baburao, NarendraModi, RahulGandhi, ArvindKejriwal];
