import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function Delete({ handleDelete, count }) {
  let keyid = null;

  return (
    <div className="delete-form">
      <h4 style={{ color: "GrayText" }}>
        Here you can Delete the user details
      </h4>
      <TextField
        className="text-field"
        id="outlined-basic"
        label="Key"
        variant="outlined"
        onChange={(event) => {
          keyid = event.currentTarget.value;
        }}
      />
      <Button
        className="del-btn"
        variant="contained"
        onClick={() => {
          handleDelete(keyid);
        }}
      >
        Delete
      </Button>
    </div>
  );
}
