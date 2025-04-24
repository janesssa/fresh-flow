import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className="home-page">
      <header>
        <h1>MealPrep App</h1>
        <p>Plan je maaltijden voor de week</p>
      </header>

      <section className="this-week">
        <h2>Deze week</h2>
        <div className="selected-recipes">
          {/* Hier komen later de geselecteerde recepten */}
          <p>Je hebt nog geen recepten geselecteerd voor deze week</p>
        </div>
        <button className="primary-button">Recepten bekijken</button>
      </section>

      <section className="actions">
        <button className="secondary-button">Boodschappenlijst</button>
        <button className="primary-button">Stappenplan genereren</button>
      </section>
    </div>
  );
};

export default HomePage;