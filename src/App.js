import React from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="title">Wet's and Joy</div>
        <nav>
          <a href="#">Home</a>
        </nav>
      </header>

      {/* Welcome Section */}
      <section className="welcome">
        <h1>Welcome to Wet's and Joy</h1>
        <p>Experience the thrill and excitement at Wet's and Joy!</p>
      </section>

      {/* Main Content */}
      <section className="content">
        <div className="left-panel">
          <div className="image water"></div>
        </div>
        <div className="right-panel">
          <div className="image amusement"></div>
        </div>
      </section>
    </div>
  );
}