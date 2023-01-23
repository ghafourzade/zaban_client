import { Box, Card, CardActionArea, CardContent } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";

interface AddVocabItemProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const AddVocabItem = (props: AddVocabItemProps) => {
  return (
    <Card onClick={props.onClick} sx={{ height: "100%" }}>
      <CardActionArea sx={{ height: "100%" }}>
        <CardContent sx={{ height: "100%" }}>
          <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <AddIcon sx={{ fontSize: 40, color: deepPurple[500] }} />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AddVocabItem;
