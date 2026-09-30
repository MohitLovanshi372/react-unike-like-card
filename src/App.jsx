import React, { useState } from 'react';
import Card from './components/Card.jsx';
import './App.css';


function App() {
  // Initial list of card titles and descriptions to pass as props
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'React Components & JSX',
      category: 'React Core',
      description: 'The building blocks of React applications combining markup with logic.',
    },
    {
      id: 2,
      title: 'Passing Data via Props',
      category: 'Data Flow',
      description: 'Learn how parent components pass values down to child components.',
    },
    {
      id: 3,
      title: 'State with useState()',
      category: 'React Hooks',
      description: 'Manage component-level memory and react to user clicks and interactions.',
    },
    {
      id: 4,
      title: 'Vite Development Tool',
      category: 'Tooling',
      description: 'Next generation frontend tooling for fast development and build speeds.',
    },
    {
      id: 5,
      title: 'Clean CSS & Responsive UI',
      category: 'Styling',
      description: 'Craft flexible, mobile-friendly card layouts that look great everywhere.',
    },
    {
      id: 6,
      title: 'Component Reusability',
      category: 'Architecture',
      description: 'Write code once in Card.jsx and render it everywhere with unique props.',
    },
  ]);

  // Input state for adding a new card title interactively
  const [newTitle, setNewTitle] = useState('');

  // Handler to add a new card to the list
  const handleAddCard = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newCardItem = {
      id: Date.now(),
      title: newTitle.trim(),
      category: 'Custom Card',
      description: 'Created dynamically to demonstrate prop passing in real time.',
    };

    // Update parent state with the new card
    setCards((prevCards) => [...prevCards, newCardItem]);
    setNewTitle('');
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <span className="badge-mini-project">React Mini Project</span>
        <h1 className="app-title">React Like / Unlike Cards</h1>
        <p className="app-subtitle">
          Demonstrating <strong>Props</strong> &amp; independent <strong>useState()</strong> in
          reusable React components.
        </p>
      </header>

      {/* Beginner Explanation Banner */}
      <section className="concept-banner">
        <div className="concept-item">
          <div className="concept-title">
            <span>📦</span> 1. Props in Action
          </div>
          <p className="concept-desc">
            <code>title</code> is passed from <code>App.jsx</code> to each <code>&lt;Card /&gt;</code>.
            Each card displays its unique title.
          </p>
        </div>

        <div className="concept-item">
          <div className="concept-title">
            <span>⚡</span> 2. Local useState()
          </div>
          <p className="concept-desc">
            Inside <code>Card.jsx</code>, <code>useState(false)</code> manages whether it is
            &quot;Liked&quot; or &quot;Not liked&quot;.
          </p>
        </div>

        <div className="concept-item">
          <div className="concept-title">
            <span>🛡️</span> 3. Independent State
          </div>
          <p className="concept-desc">
            Clicking Like on any card toggles only that card. Sibling cards remain unaffected.
          </p>
        </div>
      </section>

      {/* Interactive Form to add a card with a custom title */}
      <section className="add-card-section">
        <form className="add-card-form" onSubmit={handleAddCard}>
          <input
            type="text"
            className="add-card-input"
            placeholder="Type a new card title (e.g., 'JavaScript Promises')..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button type="submit" className="add-card-button">
            + Add Card Prop
          </button>
        </form>
      </section>

      {/* Grid of reusable Card components */}
      <main className="cards-grid">
        {cards.map((card) => (
          /**
           * Passing props:
           * - `title` is passed down to Card.jsx
           * - `category` and `description` are also passed down as props
           * - Each Card component instance maintains its OWN isolated state
           */
          <Card
            key={card.id}
            title={card.title}
            category={card.category}
            description={card.description}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
