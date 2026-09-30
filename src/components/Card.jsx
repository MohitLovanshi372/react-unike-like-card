import React, { useState } from 'react';

/**
 * Card Component
 * 
 * CONCEPT 1: PROPS (Properties)
 * - Props are inputs passed from a parent component (App.jsx) to this child component.
 * - Here, we receive `title` (and optional `category` / `description`) via props.
 * - Props are read-only; a component cannot modify its own props directly.
 * 
 * CONCEPT 2: useState HOOK
 * - `useState(false)` initializes a piece of state local to THIS specific Card instance.
 * - `isLiked`: The current state value (boolean: true if liked, false if not liked).
 * - `setIsLiked`: The updater function used to change `isLiked` and trigger a re-render.
 * - INDEPENDENT STATE: Every time <Card /> is rendered in App.jsx, React allocates
 *   a distinct, isolated state slot for it. Clicking like on this card will NEVER
 *   affect any other card on the page 
 */
function Card({ title, category, description }) {
  // 1. Declare state variable `isLiked` with initial value `false` (not liked)
  const [isLiked, setIsLiked] = useState(false);

  // 2. Declare state variable `likeCount` to track how many times this card was toggled to "Liked"
  const [likeCount, setLikeCount] = useState(0);

  // 3. Event handler function to toggle the like/unlike state and update counter
  const handleToggleLike = () => {
    if (!isLiked) {
      // When transitioning to 'Liked', increment the total like counter
      setLikeCount((prevCount) => prevCount + 1);
      setIsLiked(true);
    } else {
      // Toggling back to 'Not liked'
      setIsLiked(false);
    }
  };

  // 4. Event handler function to reset the card's state to initial values
  const handleReset = () => {
    // Sets like status to 'Not liked'
    setIsLiked(false);
    // Resets the toggle counter to 0
    setLikeCount(0);
  };

  return (
    <div className={`card ${isLiked ? 'card-liked' : ''}`}>
      {/* Category / Topic tag passed via props */}
      {category && <span className="card-tag">{category}</span>}

      {/* Card title passed from App.jsx via props */}
      <h3 className="card-title">{title}</h3>

      {/* Optional description passed via props */}
      {description && <p className="card-description">{description}</p>}

      {/* Status section: explicitly displays "Liked" or "Not liked" */}
      <div className="card-status-container">
        <span className="status-label">Status:</span>
        <span className={`status-badge ${isLiked ? 'status-liked' : 'status-not-liked'}`}>
          <span className="status-indicator"></span>
          {isLiked ? 'Liked' : 'Not liked'}
        </span>
      </div>

      {/* Counter section: tracks total times toggled to 'Liked' */}
      <div className="card-counter-container">
        <span className="counter-label">Times Liked:</span>
        <span className="counter-badge">
          <span>💖</span> {likeCount} {likeCount === 1 ? 'time' : 'times'}
        </span>
      </div>

      {/* Action buttons: Like/Unlike toggle and Reset */}
      <div className="card-actions">
        <button
          type="button"
          className={`card-button ${isLiked ? 'btn-unlike' : 'btn-like'}`}
          onClick={handleToggleLike}
          aria-pressed={isLiked}
        >
          <span className="heart-icon">{isLiked ? '❤️' : '🤍'}</span>
          <span>{isLiked ? 'Unlike' : 'Like'}</span>
        </button>

        {/* Reset button: sets status to Not liked and counter to 0 */}
        <button
          type="button"
          className="card-button btn-reset"
          onClick={handleReset}
          disabled={!isLiked && likeCount === 0}
          title={!isLiked && likeCount === 0 ? 'Card is already at initial state' : 'Reset to Not liked and 0 likes'}
        >
          <span className="reset-icon">↺</span>
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}

export default Card;
