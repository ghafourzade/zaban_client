import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { vocabActions } from "../../store/vocabSlice";

import { Typography } from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";
import AppModal from "../UI/AppModal";

const VocabCard = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedVocab = useSelector((state: RootState) => state.vocab.selectedVocab);
  const open = Boolean(selectedVocab);
  const closeVocabCardHandler = useCallback(() => {
    dispatch(vocabActions.emptySelectedVocab());
  }, []);
  return (
    <AppModal open={open} onClose={closeVocabCardHandler} sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h2" fontSize={18} fontWeight={600} color={deepPurple[500]} textAlign="center" sx={{ marginBottom: "8px" }}>
        {selectedVocab?.vocab}
      </Typography>
      <Typography fontSize={14} color={grey[600]}>
        {selectedVocab?.wordUsage}
      </Typography>
    </AppModal>
  );
};

export default VocabCard;
