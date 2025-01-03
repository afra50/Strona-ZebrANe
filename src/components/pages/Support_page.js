import react from "react";
import "../../styles/pages/Support_page.scss";
import Banner from "../Banner";
import Support_sections from "../Support_sections";

function Support_page() {
  return (
    <main className="support_page">
      <div className="support_banner">
        <Banner title="Wsparcie" subtitle="Jak możesz pomóc? " />
      </div>
      <Support_sections />
    </main>
  );
}

export default Support_page;
