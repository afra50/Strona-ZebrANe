import React, { useEffect, useRef, useState } from "react";
import "../styles/Support_sections.scss";
import Banner from "./Banner";
import Button from "./Button";

function Support_sections() {
  const [isVisible, setIsVisible] = useState({
    donation: false,
    tax: false,
    gift: false,
    store: false,
    transport: false,
    share: false,
    volunteer: false,
  });

  const sectionRefs = {
    donation: useRef(null),
    tax: useRef(null),
    gift: useRef(null),
    store: useRef(null),
    transport: useRef(null),
    share: useRef(null),
    volunteer: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionKey = Object.keys(sectionRefs).find(
            (key) => sectionRefs[key].current === entry.target
          );

          if (entry.isIntersecting && sectionKey) {
            setIsVisible((prev) => ({ ...prev, [sectionKey]: true }));
          }
        });
      },
      { threshold: 0.5 } // Sekcja musi być w 50% widoczna
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <>
      <section
        className={`donation ${isVisible.donation ? "visible" : ""}`}
        ref={sectionRefs.donation}
      >
        <div className="support_container">
          <main className="left_column">
            <h3>Przekaż darowiznę</h3>
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
          </main>
          <aside className="right_column">
            <i className="fa-solid fa-hand-holding-dollar"></i>
          </aside>
        </div>
      </section>
      <section
        className={`tax ${isVisible.tax ? "visible" : ""}`}
        ref={sectionRefs.tax}
      >
        <div className="support_container">
          <main className="left_column">
            <i className="fa-solid fa-percent"></i>
          </main>
          <aside className="right_column">
            <h3>Przekaż 1,5% podatku</h3>
            <p>
              Podczas rozliczania PIT możesz wesprzeć naszą działalność,
              przekazując 1,5% swojego podatku. Wystarczy w formularzu wpisać:
              <em>KRS: 0000 215 720 </em> oraz jako cel szczegółowy podać:
              <span> Fundacja Zebrane.</span>
            </p>
            <p>
              Przekazanie 1,5% podatku nic Cię nie kosztuje – to część kwoty,
              którą i tak oddajesz państwu. Decydując, że trafi ona do nas,
              wesprzesz nasze działania.
            </p>
          </aside>
        </div>
      </section>
      <section
        className={`gift ${isVisible.gift ? "visible" : ""}`}
        ref={sectionRefs.gift}
      >
        <div className="support_container">
          <main className="left_column">
            <h3>Podaruj prezent</h3>
            <p>
              Masz niepotrzebne akcesoria, siano lub karmę po swoim gryzoniu? A
              może chcesz kupić coś od siebie, by wspomóc naszych małych
              podopiecznych? Każdy dar jest dla nas niezwykle cenny i pozwala
              poprawić komfort życia gryzoni znajdujących się pod naszą opieką.
            </p>
            <p>
              Zanim przekażesz paczkę, prosimy o kontakt – doradzimy, co jest
              obecnie najbardziej potrzebne i umówimy się na odbiór lub wysyłkę.
            </p>
            <Button text="Skontaktuj się" link="/kontakt" />
          </main>
          <aside className="right_column">
            <i className="fa-solid fa-box-open"></i>
          </aside>
        </div>
      </section>
      <section
        className={`store ${isVisible.store ? "visible" : ""}`}
        ref={sectionRefs.store}
      >
        <div className="support_container">
          <main className="left_column">
            <i className="fa-solid fa-store"></i>
          </main>
          <aside className="right_column">
            <h3>Weź udział w naszym bazarku</h3>
            <p>
              Zapraszamy do udziału w naszym bazarku charytatywnym, który
              organizujemy co jakiś czas na Facebooku. To doskonała okazja, aby
              wylicytować ciekawe przedmioty, a jednocześnie wesprzeć nasze
              działania na rzecz zwierząt. Jeśli masz zbędne rzeczy, których już
              nie potrzebujesz, możesz przekazać je na nasze licytacje.
            </p>
            <p>
              Zachęcamy także do zapraszania znajomych do naszej grupy
              bazarkowej. Im więcej osób, tym większa pomoc dla naszych
              podopiecznych.
            </p>
            <Button
              text="Dołącz do grupy"
              link="https://www.facebook.com/groups/2722953827728706"
            />
          </aside>
        </div>
      </section>
      <section
        className={`transport ${isVisible.transport ? "visible" : ""}`}
        ref={sectionRefs.transport}
      >
        <div className="support_container">
          <main className="left_column">
            <h3>Pomóż w transporcie</h3>
            <p>
              Często poszukujemy transportu przez kilka dni, a czasem nawet
              tygodni, aby przewieźć zwierzęta do ich nowych domów. Zdarzało
              się, że musieliśmy zorganizować nawet transport międzynarodowy.
            </p>
            <p>
              Byłoby wspaniale, gdyby ktoś zaoferował pomoc w formie
              charytatywnego transportu – na całą trasę lub jej część.
              Niezależnie od tego, czy podróżujesz samochodem czy pociągiem,
              możesz pomóc, przewożąc zwierzęta przy okazji swojej podróży.
            </p>
            <Button text="Skontaktuj się" link="/kontakt" />
          </main>
          <aside className="right_column">
            <i class="fa-solid fa-car-side"></i>
          </aside>
        </div>
      </section>
      <section
        className={`share ${isVisible.share ? "visible" : ""}`}
        ref={sectionRefs.share}
      >
        <div className="support_container">
          <main className="left_column">
            <i class="fa-solid fa-share-nodes"></i>
          </main>
          <aside className="right_column">
            <h3>Udostępnij nas</h3>
            <p>
              Udostępniaj nasze posty, zapraszaj znajomych do grupy bazarkowej i
              polubienia naszej strony oraz promuj adopcje. Dzięki temu
              zwiększamy szanse na znalezienie nowych, kochających domów dla
              naszych podopiecznych.
            </p>
            <p>
              Każde udostępnienie to krok bliżej do lepszego życia dla zwierząt
              w potrzebie. Twoje zaangażowanie pomaga nam także dotrzeć do osób,
              które mogą wesprzeć nasze działania.
            </p>
            <Button
              text="Odwiedź nasz profil"
              link="https://www.facebook.com/FundacjaZebrane"
            />
          </aside>
        </div>
      </section>
      <section
        className={`volunteer ${isVisible.volunteer ? "visible" : ""}`}
        ref={sectionRefs.volunteer}
      >
        <div className="support_container">
          <main className="left_column">
            <h3>Zostań wolontariuszem</h3>
            <p>
              Jeśli masz chęci i możliwości, zapraszamy do współpracy jako
              wolontariusz. Możesz wesprzeć nas w działaniach internetowych, lub
              zostać domem tymczasowym dla naszych podopiecznych.
            </p>
            <p>
              Jako dom tymczasowy musisz zapewnić zwierzętom czas, miejsce oraz
              opiekę weterynaryjną do czasu, gdy wyzdrowieją i znajdą swój stały
              dom. Skontaktuj się z nami i dowiedz się, jak możesz pomóc.
            </p>
            <Button text="Skontaktuj się" link="/kontakt" />
          </main>
          <aside className="right_column">
            <i class="fa-solid fa-heart"></i>
          </aside>
        </div>
      </section>
      <section className="adopt">
        <Banner
          title="Adoptuj"
          subtitle="Nasi podopieczni - gryzonie i inne małe zwierzęta czekają na odpowiedzialnego właściciela. Decydując się na adopcję, wspierasz ideę świadomej opieki nad zwierzętami i dajesz im drugą szansę. Każde zwierzę, które oddajemy do adopcji, jest przebadane i gotowe na nowy dom."
        >
          <Button text="Adoptuj" link="/adoptuje" />
        </Banner>
      </section>
    </>
  );
}

export default Support_sections;
