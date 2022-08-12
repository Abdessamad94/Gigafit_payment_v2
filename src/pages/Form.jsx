import React ,{useEffect ,useState} from "react";
import Progress from "../components/Progress";
import Yourclub from "./Yourclub";

export default function () {

  return (
    <div className='body'>
      <Progress />
      <div className="form-staps">
        <Yourclub />
      </div>
    </div>
  );
}
