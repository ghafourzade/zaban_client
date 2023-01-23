import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";
import { VocabRow } from "../../store/vocabSlice";

interface VocabItemProps {
  vocab: VocabRow;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const VocabItem = (props: VocabItemProps) => {
  return (
    <Card onClick={props.onClick}>
      <CardActionArea>
        <CardContent>
          <Box sx={{ display: "flex", position: "relative", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h2" fontSize={18} fontWeight={600} color={deepPurple[500]} textAlign="center" sx={{ marginBottom: "8px" }}>
              {props.vocab.vocab}
            </Typography>
            <Typography fontSize={14} color={grey[600]}>
              {props.vocab.wordUsage}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VocabItem;
