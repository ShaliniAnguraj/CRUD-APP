import { useState } from "react";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function EditDetails({ handleEdit, userList }) {
  const { id } = useParams();
  let [name, setName] = useState(userList[id].Name);
  let [gender, setGender] = useState(userList[id].Gender);
  let [emailid, setEmailid] = useState(userList[id].EmailId);
  let [phoneno, setPhoneno] = useState(userList[id].PhoneNo);

  return (
    <div className="edit-form">
      <TextField
        className="text-field"
        value={name}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(event) => {
          setName(event.currentTarget.value);
        }}
      />

      <TextField
        className="text-field"
        value={gender}
        id="outlined-basic"
        label="Gender"
        variant="outlined"
        onChange={(event) => {
          setGender(event.currentTarget.value);
        }}
      />

      <TextField
        className="text-field"
        value={emailid}
        id="outlined-basic"
        label="Email-Id"
        variant="outlined"
        onChange={(event) => {
          setEmailid(event.currentTarget.value);
        }}
      />

      <TextField
        className="text-field"
        value={phoneno}
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        onChange={(event) => {
          setPhoneno(event.currentTarget.value);
        }}
      />
      <Button
        className="edit-btn"
        variant="contained"
        onClick={() => {
          handleEdit(id, name, gender, emailid, phoneno);
        }}
      >
        Confirm Edit
      </Button>
    </div>
  );
}
