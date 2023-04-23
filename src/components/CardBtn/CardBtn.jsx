import React from "react";
import { CardButton} from "./CardBtn.styled";

export const CardBtn = ({
  isFollow = false,
  text = "Confirm",
  onClick = null,
}) => {
  return (
    <CardButton
      style={{ backgroundColor: isFollow ? "#5CD3A8" : "#ebd8ff" }}
      onClick={onClick}
    >
      {text}
    </CardButton>
  );
};
