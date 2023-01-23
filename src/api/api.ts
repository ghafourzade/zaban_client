import axios from "axios";
import { VocabRow } from "../store/vocabSlice";

const apiUrl = "http://localhost:5000";

export const createVocab = async (vocab: VocabRow): Promise<VocabRow> => {
  return await (
    await axios.post(apiUrl + "/vocab", vocab)
  ).data;
};

export const readVocabs = async (): Promise<VocabRow[]> => {
  return await (
    await axios.get(apiUrl + "/vocab")
  ).data;
};
