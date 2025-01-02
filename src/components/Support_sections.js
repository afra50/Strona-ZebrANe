import React, { useEffect, useRef, useState } from "react";
import "../styles/Support_sections.scss";

function Support_sections() {
  const [isVisible, setIsVisible] = useState(false); // Śledzenie widoczności sekcji
  const sectionRef = useRef(null); // Referencja do sekcji

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Ustaw na true, gdy sekcja jest widoczna
          }
        });
      },
      { threshold: 0.5 } // Sekcja musi być w 50% widoczna
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Obserwuj sekcję
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Przestań obserwować przy odmontowaniu
      }
    };
  }, []);

  return (
    <section
      className={`donation ${isVisible ? "visible" : ""}`} // Dodaj klasę "visible", gdy sekcja jest widoczna
      ref={sectionRef} // Powiąż z referencją
    >
      <div className="support_container">
        <main className="left_column">
          <div className="blue_line">
            <span></span>
          </div>
          <h3>Przekaż darowiznę</h3>
          <p>
            Twoje wsparcie ma ogromne znaczenie! Każda darowizna przyczynia się
            do poprawy losu zwierząt, które znalazły się w trudnej sytuacji.
            Dzięki Twojej pomocy możemy zapewnić schronienie, pożywienie oraz
            opiekę weterynaryjną tym, które tego najbardziej potrzebują.
          </p>
          <p>
            Jeśli chcesz nas wesprzeć, możesz przekazać darowiznę, wykonując
            przelew na nasze konto bankowe:{" "}
            <em>83 1870 1045 2078 1070 3820 0001 </em>W tytule przelewu wpisz:
            "Darowizna na rzecz Fundacji ZebrANe".
          </p>
        </main>
        <aside className="right_column">
          <i className="fa-solid fa-hand-holding-dollar"></i>
        </aside>
      </div>
    </section>
  );
}

export default Support_sections;
