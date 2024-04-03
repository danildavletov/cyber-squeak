import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

const PageSettings = () => {
  return (
    <>
      <h1>настройки</h1>
      <Breadcrumbs>
        <Link to="/">Основная</Link>
        <Link to="/settings">Настройки</Link>
        <Link to="/login">Вход</Link>м
      </Breadcrumbs>
    </>
  );
};

export default PageSettings;
