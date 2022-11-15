// BACK HOME COMPONENT -  Usenavigate to route back to home page

import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  return (
    <div className="back">
      <button className="back--btn" onClick={() => navigate("/")}>
        Back &#8592;
      </button>
    </div>
  );
};

export default Back;