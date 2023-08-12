/* eslint-disable react/prop-types */
import {
  Link,
  useNavigate
} from "react-router-dom";
import { Switch } from "@mui/material";
import { useEffect, useState } from "react";

export default function NavBar() {
  const navigate = useNavigate()
  const [nav, setNav] = useState(true)

  function handleSwitch() {
    setNav(!nav)
  }

  useEffect(() => {
    if (nav === true) {
      navigate("/")
    } else {
      navigate("/alien")
    }
  }, [nav]);

  return (
    <div>
      <ul>
        <li>
          <Switch
            checked={nav}
            onChange={handleSwitch}
          />
        </li>
      </ul>
    </div>
  )
}
