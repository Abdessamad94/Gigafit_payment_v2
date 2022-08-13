import React, { useEffect, useState } from "react";
import Progress from "../components/Progress";
import Yourclub from "./Yourclub";

export default function () {
  /*check if user come from landing page or from Gigafit.fr*/
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const landingpage = urlParams.get("landingpage");
  const [stap, setStap] = useState(0);

  const steps = [
    "VOTRE CLUB",
    "VOTRE FORMULE",
    "VOS ACCESSOIRE",
    "COORDONNEES",
    "CONTRAT",
    "PAIEMENT",
    "CONFIRMATION",
  ]

  /* Navigtion function */
  const navigtion = (step) => {
    switch (step) {
      case 0:
        return <Yourclub  />;
      default:
        return <div>Not Found</div>;
    }
  };

  /* click handler */
  // const handleClick = (direction) => {
  //   let newStep = currentStep;
  //   direction === "next" ? newStep++ : newStep--;
  //   // check if step are within bounds
  //   newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  // };

  return (
    <div className="body">
      <Progress staps={steps} />
      <div className="form-staps">{navigtion(stap)}</div>
    </div>
  );
}
