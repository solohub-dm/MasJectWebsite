import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>MasJect Team</h1>
    </header>
  );
};

const styles = {
  header: {
    padding: "1em",
    color: "#71A04C",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default Header;
