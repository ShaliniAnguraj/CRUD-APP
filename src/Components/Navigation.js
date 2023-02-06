import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export function Navigation() {
  const nav = useNavigate();
  return (
    <div className="navigation-menu">
      <AppBar position="fixed" className="app-bar">
        <Toolbar>
          <Button
            onClick={() => {
              nav("/");
            }}
            sx={{ my: 2, color: "black", display: "block" }}
            className="app-bar-btn"
          >
            DashBoard
          </Button>
          <Button
            onClick={() => {
              nav("/users");
            }}
            sx={{ my: 2, color: "black", display: "block" }}
            className="app-bar-btn"
          >
            Users
          </Button>
          <Button
            onClick={() => {
              nav("/add-user");
            }}
            sx={{ my: 2, color: "black", display: "block" }}
            className="app-bar-btn"
          >
            Add User
          </Button>
          <Button
            onClick={() => {
              nav("/delete-user");
            }}
            sx={{ my: 2, color: "black", display: "block" }}
            className="app-bar-btn"
          >
            Delete User
          </Button>
          <Button
            onClick={() => {
              nav("/edit-user");
            }}
            sx={{ my: 2, color: "black", display: "block" }}
            className="app-bar-btn"
          >
            Edit User
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
