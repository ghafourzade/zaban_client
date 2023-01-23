import { Backdrop, Card, Fade, Modal, SxProps, Theme } from "@mui/material";

export interface AppModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

const AppModal = (props: AppModalProps) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <Card
          sx={{
            position: "absolute",
            inset: 0,
            margin: "auto",
            height: "80%",
            width: "30%",
            p: 4,
            overflowY: "auto",
            ...props.sx,
          }}
        >
          {props.children}
        </Card>
      </Fade>
    </Modal>
  );
};

export default AppModal;
