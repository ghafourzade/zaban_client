import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { createVocabHandler, vocabActions, VocabRow, WordUsage } from "../../store/vocabSlice";

import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AppModal from "../UI/AppModal";

const AddVocabForm = () => {
  const addVocabFormOpen = useSelector((state: RootState) => state.vocab.addVocabFormOpen);
  const dispatch: AppDispatch = useDispatch();
  const [formDate, setFormDate] = useState<VocabRow>({
    vocab: "",
    wordUsage: null,
    meaning: "",
    sentence: "",
  });
  const vocabChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFormDate(prevFormDate => {
      return { ...prevFormDate, vocab: event.target.value };
    });
  }, []);
  const wordUsageChangeHandler = useCallback((event: SelectChangeEvent) => {
    setFormDate(prevFormDate => {
      return { ...prevFormDate, wordUsage: (event.target.value as WordUsage) || null };
    });
  }, []);
  const meaningChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFormDate(prevFormDate => {
      return { ...prevFormDate, meaning: event.target.value };
    });
  }, []);
  const sentenceChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFormDate(prevFormDate => {
      return { ...prevFormDate, sentence: event.target.value };
    });
  }, []);
  const submitHandler = useCallback(() => {
    dispatch(createVocabHandler(formDate));
    modalCloseHandler();
  }, [formDate]);

  const modalCloseHandler = useCallback(() => {
    dispatch(vocabActions.addVocabFormCloseHandler());
    setFormDate({
      vocab: "",
      wordUsage: null,
      meaning: "",
      sentence: "",
    });
  }, []);

  return (
    <AppModal
      open={addVocabFormOpen}
      onClose={modalCloseHandler}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <TextField id="vocab" label="Vocabulary" variant="outlined" value={formDate.vocab} onChange={vocabChangeHandler} />
      <FormControl>
        <InputLabel id="wordusage-label">Word Usage</InputLabel>
        <Select labelId="wordusage-label" id="wordusage" label="Word Usage" value={formDate.wordUsage ?? ""} onChange={wordUsageChangeHandler}>
          <MenuItem value="">Select word usage</MenuItem>
          <MenuItem value="noun">noun</MenuItem>
          <MenuItem value="verb">verb</MenuItem>
          <MenuItem value="adj">adj</MenuItem>
          <MenuItem value="adv">adv</MenuItem>
        </Select>
      </FormControl>
      <TextField id="outlined-basic" label="Meaning" variant="outlined" multiline value={formDate.meaning ?? ""} onChange={meaningChangeHandler} />
      <TextField id="outlined-basic" label="Sentence" variant="outlined" multiline value={formDate.sentence ?? ""} onChange={sentenceChangeHandler} />
      <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "auto" }}>
        <Button variant="contained" startIcon={<SaveIcon />} onClick={submitHandler}>
          Save
        </Button>
      </Box>
    </AppModal>
  );
};

export default AddVocabForm;
