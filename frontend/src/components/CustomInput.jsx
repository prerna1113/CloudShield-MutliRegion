import { TextField } from "@mui/material";

function CustomInput({
  label,
  type = "text",
  value,
  onChange,
  children,
  select = false,
}) {
  return (
    <TextField
      fullWidth
      margin="normal"
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      select={select}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
        },
      }}
    >
      {children}
    </TextField>
  );
}

export default CustomInput;