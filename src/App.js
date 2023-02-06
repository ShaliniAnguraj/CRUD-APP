import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Add } from "./Components/Add";
import { Delete } from "./Components/Delete";
import { Edit } from "./Components/Edit";
import { EditDetails } from "./Components/EditDetails";
import { Home } from "./Components/Home";
import { Navigation } from "./Components/Navigation";
import { User } from "./Components/Home";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import CreateTwoToneIcon from "@mui/icons-material/CreateTwoTone";
import ChromeReaderModeTwoToneIcon from "@mui/icons-material/ChromeReaderModeTwoTone";

const initialUserList = [
  {
    Id: "1",
    Name: "Shalini",
    Gender: "Female",
    EmailId: "ars@gmail.com",
    PhoneNo: "9384950394",
  },
  {
    Id: "2",
    Name: "Vishnu",
    Gender: "Female",
    EmailId: "vish@gmail.com",
    PhoneNo: "8573550334",
  },
  {
    Id: "3",
    Name: "Ibrahim",
    Gender: "Male",
    EmailId: "ibu@gmail.com",
    PhoneNo: "7895534233",
  },
  {
    Id: "4",
    Name: "Harini",
    Gender: "Female",
    EmailId: "hari@gmail.com",
    PhoneNo: "6378324943",
  },
  {
    Id: "5",
    Name: "Suresh",
    Gender: "Male",
    EmailId: "ask@gmail.com",
    PhoneNo: "8034461207",
  },
  {
    Id: "6",
    Name: "Gowtham",
    Gender: "Male",
    EmailId: "gowth@gmail.com",
    PhoneNo: "9384729713",
  },
  {
    Id: "7",
    Name: "Dhanish",
    Gender: "Male",
    EmailId: "dhani@gmail.com",
    PhoneNo: "6391204639",
  },
  {
    Id: "8",
    Name: "Sathya",
    Gender: "Female",
    EmailId: "sathya@gmail.com",
    PhoneNo: "8028767431",
  },
  {
    Id: "9",
    Name: "shobika",
    Gender: "Female",
    EmailId: "shobi@gmail.com",
    PhoneNo: "9429140266",
  },
];

function App() {
  const navigate = useNavigate();
  const [userList, setUserList] = useState(initialUserList);

  function handleAdd(Id, Name, Gender, EmailId, PhoneNo) {
    let newUser = {
      Id: Id,
      Name: Name,
      Gender: Gender,
      EmailId: EmailId,
      PhoneNo: PhoneNo,
    };
    setUserList([...userList, newUser]);
    navigate("./users");
  }

  function handleDelete(Id) {
    userList.splice(Id, 1);
    setUserList(userList);
    navigate("/users");
  }

  function handleEdit(Id, Name, Gender, EmailId, PhoneNo) {
    let editedUser = {
      Id: Id,
      Name: Name,
      Gender: Gender,
      EmailId: EmailId,
      PhoneNo: PhoneNo,
    };
    userList.splice(Id, 1, editedUser);
    setUserList(userList);
    navigate("/users");
  }

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Home userList={userList} />} />
        <Route path="/add-user" element={<Add handleAdd={handleAdd} />} />
        <Route
          path="/delete-user"
          element={<Delete handleDelete={handleDelete} />}
        />
        <Route path="/edit-user" element={<Edit count={userList.length} />} />
        <Route
          path="/edit/:id"
          element={<EditDetails handleEdit={handleEdit} userList={userList} />}
        />
        <Route path="/users/user/:id" element={<User userList={userList} />} />
      </Routes>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashbord">
      <h1
        style={{
          color: "red",
          paddingTop: "5rem",
          fontStyle: "italic",
          textAlign: "center",
          backgroundColor: "#8EC5FC",
        }}
      >
        Welcome to CRUD APP 📝
      </h1>
      <h6
        style={{
          color: "black",
          fontSize: "30px",
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        This App allows us to -
        <p>
          Create
          <CreateTwoToneIcon style={{ paddingLeft: "1rem" }} />
        </p>
        <p>
          Read
          <ChromeReaderModeTwoToneIcon style={{ paddingLeft: "1rem" }} />
        </p>
        <p>
          Update
          <UpdateIcon style={{ paddingLeft: "1rem" }} />
        </p>
        <p>
          Delete
          <DeleteIcon style={{ paddingLeft: "1rem" }} />
        </p>
        <p> From the userList as we need.</p>
      </h6>
    </div>
  );
}

export default App;
