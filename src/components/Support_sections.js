import react from "react";
import "../styles/Support_sections.scss";

function Support_sections() {
  return (
    <section className="donation">
      <div className="support_container">
        <main className="left_column">
          <div className="blue_line">
            <span></span>
          </div>
          <h3>Przekaż darowiznę</h3>
          <p>
            <p>
              Twoje wsparcie ma ogromne znaczenie! Każda darowizna przyczynia
              się do poprawy losu zwierząt, które znalazły się w trudnej
              sytuacji. Dzięki Twojej pomocy możemy zapewnić schronienie,
              pożywienie oraz opiekę weterynaryjną tym, które tego najbardziej
              potrzebują.
            </p>
            <p>
              Jeśli chcesz nas wesprzeć, możesz przekazać darowiznę, wykonując
              przelew na nasze konto bankowe:{" "}
              <em>83 1870 1045 2078 1070 3820 0001 </em>W tytule przelewu wpisz:
              "Darowizna na rzecz Fundacji ZebrANe".
            </p>
          </p>
        </main>
        <aside className="right_column">
          <i class="fa-solid fa-hand-holding-dollar"></i>
        </aside>
      </div>
    </section>
  );
}

export default Support_sections;
