import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";
import TickEight from "./TickEight";

const TickEightItem = () => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Box sx={{ height: "100%", display: "flex", alignItems: "center", gap: "8px" }}>
            <Typography variant="h2" fontSize={18} fontWeight={600} color={deepPurple[500]}>
              asdsdg
            </Typography>
            <Typography fontSize={14} color={grey[600]}>
              adv
            </Typography>
            <TickEight sx={{ marginLeft: "auto" }} tickEight={[true, false, true, true, false, true, null, null]} />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TickEightItem;
