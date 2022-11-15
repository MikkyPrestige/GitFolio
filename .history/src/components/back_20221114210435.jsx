// BACK HOME COMPONENT -  Usenavigate to route back to home page

import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  return (
    <div className="back">
      <button onClick={() => navigate("/")} style={{ fontSize: "1.2rem", color: "#00bb14", textDecoration: "none", marginBottom: "2rem", border: "none", borderRadius: "1rem", cursor: "pointer"}}>
        Back &#8592;
      </button>
    </div>
  );
};

export default Back;