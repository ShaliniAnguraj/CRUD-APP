import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function Add({ handleAdd }) {
  let Id = null;
  let Name = null;
  let Gender = null;
  let EmailId = null;
  let PhoneNo = null;

  return (
    <div className="add">
      <form className="add-form">
        <h4 style={{ color: "GrayText" }}>
          Here you can Add the user details as you requied ➕
        </h4>
        <TextField
          className="text-field"
          id="outlined-basic"
          label="ID"
          variant="outlined"
          onChange={(event) => {
            Id = event.currentTarget.value;
          }}
        />
        <TextField
          className="text-field"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(event) => {
            Name = event.currentTarget.value;
          }}
        />
        <TextField
          className="text-field"
          id="outlined-basic"
          label="Gender"
          variant="outlined"
          onChange={(event) => {
            Gender = event.currentTarget.value;
          }}
        />
        <TextField
          className="text-field"
          id="outlined-basic"
          label="Email-Id"
          variant="outlined"
          onChange={(event) => {
            EmailId = event.currentTarget.value;
          }}
        />
        <TextField
          className="text-field"
          id="outlined-basic"
          label="Phone- Number"
          variant="outlined"
          onChange={(event) => {
            PhoneNo = event.currentTarget.value;
          }}
        />
        <Button
          className="add-btn"
          variant="contained"
          onClick={() => {
            handleAdd(Id, Name, Gender, EmailId, PhoneNo);
          }}
        >
          Add User
        </Button>
      </form>
    </div>
  );
}
