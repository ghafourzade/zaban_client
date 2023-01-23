import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readVocabsHandler, vocabActions } from "../../store/vocabSlice";
import { AppDispatch, RootState } from "../../store";

import { Container, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import AddVocabItem from "./AddVocabItem";
import VocabItem from "./VocabItem";
import AddVocabForm from "./AddVocabForm";
import TickEightItem from "../TickEight/TickEightItem";
import VocabCard from "./VocabCard";

const VocabReview = () => {
  const vocabs = useSelector((state: RootState) => state.vocab.vocabs);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(readVocabsHandler());
  }, [dispatch]);

  const addVocabFormOpenHandler = useCallback(() => {
    dispatch(vocabActions.addVocabFormOpenHandler());
  }, []);
  const addVocabFormCloseHandler = useCallback(() => {
    dispatch(vocabActions.addVocabFormCloseHandler());
  }, []);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Container maxWidth="xl" sx={{ paddingTop: 4 }}>
      <Typography variant="h2" fontSize={24} fontWeight={600} color={grey[900]} sx={{ marginBottom: "16px" }}>
        Need review
      </Typography>
      <Grid container spacing={2} sx={{ marginBottom: "32px" }}>
        <Grid item xs={12}>
          <TickEightItem />
        </Grid>
        <Grid item xs={12}>
          <TickEightItem />
        </Grid>
        <Grid item xs={12}>
          <TickEightItem />
        </Grid>
      </Grid>
      <Typography variant="h2" fontSize={24} fontWeight={600} color={grey[900]} sx={{ marginBottom: "16px" }}>
        Words
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={3} xs={6}>
          <AddVocabItem onClick={addVocabFormOpenHandler} />
        </Grid>
        {vocabs.map(vocab => {
          const vocabClickHandler = () => {
            dispatch(vocabActions.setSelectedVocab({ selectedVocab: vocab }));
          };
          return (
            <Grid item md={3} xs={6} key={vocab._id}>
              <VocabItem vocab={vocab} onClick={vocabClickHandler} />
            </Grid>
          );
        })}
      </Grid>
      <AddVocabForm />
      <VocabCard />
    </Container>
  );
};

export default VocabReview;
