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
    color: "#f0f8ff",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default Header;
