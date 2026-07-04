import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";

function DeleteDialog({
  open,
  handleClose,
  handleDelete,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>Delete Incident</DialogTitle>

      <DialogContent>
        <Typography>
          Are you sure you want to delete this incident?
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>
          Cancel
        </Button>

        <Button
          color="error"
          variant="contained"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog;