# Vacation Catch

A responsive, buildless English speaking catch game based on the user-provided vacation lesson. Five stops cover destinations, activities, transport, accommodation, and suggestions. Original interface and game code; lesson vocabulary and patterns adapted from the supplied classroom image.

## Play
Open `index.html`, or serve this folder with any static HTTP server. Move with arrow keys, A/D, touch dragging, or the on-screen arrows. Tapping a card also catches it. Each round ends after all correct labels have fallen, caught or missed (4, 5, 7, 4, and 3). Correct catches score 10; incorrect catches subtract 5 (minimum zero). Each correct label appears once per round. Distractors can return after other choices appear. Practice is untimed; Challenge has a 30-second target per stop and continues into overtime until all correct labels have fallen. Pause with the button or Escape. Switching away pauses play.

Rounds advance automatically after all correct labels have fallen. Use the worksheet for speaking practice. The final stop asks for nature/outdoors suggestions: go to the beach, go backpacking, or go camping. Other suggestions may be valid in other contexts. Speaking is checked by a teacher/partner, not by the software.

## Materials and editing
- `materials.html`: printable lesson word bank, partner worksheet, teaching sequence, assessment checklist.
- `lesson.js`: editable questions, vocabulary, models, and reason bank.
- `game.js`: game behavior.
- `style.css`: responsive design and print styles.
- Original lesson image: stored separately in the private `vacation-catch-materials` repository.

No dependencies, external assets, accounts, analytics, or student data uploads. Travel-note download stays in the browser. No persistent high scores.

## GitHub Pages
Publish the repository's `main` branch, `/ (root)`, under Settings → Pages → Deploy from a branch. No build step is required. `.nojekyll` disables Jekyll processing.

## Verification
JavaScript syntax checks and interactive browser checks are recorded in `VERIFICATION.md`.

