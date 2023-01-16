import React, { useEffect, useState } from "react";
import FormUser from "../../../../components/FormClients/FormUser";
import FormClient from "../../../../components/FormClients/FormClient";

const Createform = () => {
  const [formstep, setformstep] = useState(1);
  const [emailuser, setemailuser] = useState();

  if (formstep === 1)
    return (
      <FormUser
        setformstep={setformstep}
        formstep={formstep}
        setemailuser={setemailuser}
      />
    );
  if (formstep === 2) return <FormClient emailuser={emailuser} />;
};

export default Createform;

