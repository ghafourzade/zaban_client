import { Box, BoxProps } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";

interface TickEightAdditionProps {
  tickEight: (boolean | null)[];
}
type TickEightProps = TickEightAdditionProps & BoxProps;

const TickEight = ({ children, tickEight, ...props }: TickEightProps) => {
  return (
    <Box {...props}>
      {tickEight.map((tick, index) => {
        if (tick === true) {
          return <CheckIcon sx={{ fontSize: 16, color: green[500] }} key={index} />;
        } else if (tick === false) {
          return <CloseIcon sx={{ fontSize: 16, color: red[500] }} key={index} />;
        } else {
          return <RemoveIcon sx={{ fontSize: 16, color: grey[500] }} key={index} />;
        }
      })}
    </Box>
  );
};

export default TickEight;
