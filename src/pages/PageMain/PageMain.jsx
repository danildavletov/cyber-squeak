import CyberSqueak from "../../components/CyberSqueak/CyberSqueak";
import { Breadcrumbs } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

const PageMain = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(localStorage.getItem('name'))

  useEffect(() => {
    if (!localStorage.getItem('auth')) {
      navigate('/login')
    }
  }, [])


  return (
    <>
      {/*<h1>Привет, {name}</h1>*/}
      <CyberSqueak />
      <Breadcrumbs>
        <Link to="/">Основная</Link>
        <Link to="/settings">Настройки</Link>
      </Breadcrumbs>
    </>
  );
};

export default PageMain;
