import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    axios.delete("http://localhost:3000/sessions.json").then((response) => {
      console.log(response);
      window.location.href = "/";
    });
  };

  return (
    <a href="#" onClick={handleClick}>
      Logout
    </a>
  );
}
