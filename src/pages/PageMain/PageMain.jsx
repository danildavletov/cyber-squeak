import CyberSqueak from "../../components/CyberSqueak/CyberSqueak";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import AppContext from '../../context/AppContext';
import { useContext } from 'react';

const PageMain = () => {
  const ctx = useContext(AppContext);

  return (
    <>
      <CyberSqueak />
      <Breadcrumbs>
        <Link to="/">Основная</Link>
        <Link to="/settings">Настройки</Link>
        {ctx.isLoggedIn ? <Link to="/login">Выход</Link> : <Link to="/login">Вход</Link>}
      </Breadcrumbs>
    </>
  );
};

export default PageMain;
