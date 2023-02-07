import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

export function Home({ userList }) {
  return (
    <div className="user-list">
      {userList.map((user, id) => (
        <Users user={user} keyid={id} />
      ))}
    </div>
  );
}
function Users({ user, keyid }) {
  const nav = useNavigate();

  return (
    <div className="user-container">
      <h3 className="user-name">Name: {user.Name}</h3>
      <p className="user-id">ID: {keyid}</p>
      <p className="user-gender">Gender: {user.Gender}</p>
      <p className="user-email">Email-Id: {user.EmailId}</p>
      <p className="user-phone">Phone Number: {user.PhoneNo}</p>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={() => {
          nav("/users/user/" + keyid);
        }}
      >
        View Profile
      </Button>
    </div>
  );
}

export function User({ userList }) {
  const { id } = useParams();
  const nav = useNavigate();
  return (
    <div className="user-profile">
      <h1 style={{ textAlign: "center", paddingTop: "5rem" }}>USER-{id}</h1>
      <div className="user" style={{ textAlign: "center" }}>
        <h3 className="user-name">Name : {userList[id].Name}</h3>
        <p className="user-gender">Gender : {userList[id].Gender}</p>
        <p className="user-email">Email-Id : {userList[id].EmailId}</p>
        <p className="user-phone">Phone Number : {userList[id].PhoneNo}</p>

        <Button
          variant="contained"
          size="small"
          color="warning"
          onClick={() => {
            nav(-1);
          }}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}
