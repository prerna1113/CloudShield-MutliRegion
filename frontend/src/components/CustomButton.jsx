import { Button } from "@mui/material";

function CustomButton({
  text,
  onClick,
  type = "button",
}) {
  return (
    <Button
      fullWidth
      type={type}
      variant="contained"
      onClick={onClick}
      sx={{
        mt: 2,
        py: 1.5,
        borderRadius: "12px",
        fontSize: "16px",
        textTransform: "none",
      }}
    >
      {text}
    </Button>
  );
}

export default CustomButton;