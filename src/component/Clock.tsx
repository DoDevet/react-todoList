import { useEffect, useState } from "react";
import styled from "styled-components";

const TimeText = styled.span`
  font-weight: 600;
  font-size: 70px;
`;

function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ marginBottom: "50px" }}>
      <TimeText>{`${String(date.getHours()).padStart(2, "0")} : ${String(
        date.getMinutes()
      ).padStart(2, "0")} : ${String(date.getSeconds()).padStart(
        2,
        "0"
      )}`}</TimeText>
    </div>
  );
}

export default Clock;
