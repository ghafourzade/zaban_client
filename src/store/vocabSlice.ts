import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { createVocab, readVocabs } from "../api/api";

export type WordUsage = "noun" | "verb" | "adj" | "adv" | null;
export interface VocabRow {
  _id?: string;
  vocab: string;
  wordUsage: WordUsage;
  meaning: string;
  sentence: string;
  createdDate?: string;
}

interface VocabSliceState {
  vocabs: VocabRow[];
  addVocabFormOpen: boolean;
  selectedVocab: VocabRow | null;
}

const initialState: VocabSliceState = {
  vocabs: [],
  addVocabFormOpen: false,
  selectedVocab: null,
};

const vocabSlice = createSlice({
  name: "vocab",
  initialState,
  reducers: {
    setVocabs(state, action) {
      const { vocabs }: { vocabs: VocabRow[] } = action.payload;
      state.vocabs = vocabs;
    },
    addVocabFormOpenHandler(state) {
      state.addVocabFormOpen = true;
    },
    addVocabFormCloseHandler(state) {
      state.addVocabFormOpen = false;
    },
    setSelectedVocab(state, action) {
      const { selectedVocab }: { selectedVocab: VocabRow } = action.payload;
      state.selectedVocab = selectedVocab;
    },
    emptySelectedVocab(state) {
      state.selectedVocab = null;
    },
  },
});

export const createVocabHandler = (vocab: VocabRow) => {
  return async (dispatch: Dispatch) => {
    await createVocab(vocab);
    const vocabs = await readVocabs();
    dispatch(vocabActions.setVocabs({ vocabs }));
  };
};

export const readVocabsHandler = () => {
  return async (dispatch: Dispatch) => {
    const vocabs = await readVocabs();
    dispatch(vocabActions.setVocabs({ vocabs }));
  };
};

export const vocabActions = vocabSlice.actions;

export default vocabSlice.reducer;
