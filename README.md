# GregMat GRE Vocab Group 1 Exam — Day 4

Offline EPort-style GRE vocabulary exam portal for **Day 4: Words 91–120**.

## Files included

- `index.html` — main exam portal page
- `style.css` — fixed calm, eye-soothing, mobile-friendly UI
- `script.js` — exam data, timer, navigation, scoring, and review logic
- `README.md` — setup and usage guide

## Word range

Day 4 covers Words 91–120:

Abstain, Approbation, Cherish, Corroborate, Disparate, Emulate, Enervate, Ephemeral, Fervid, Garrulous, Incendiary, Inimical, Intimate, Invigorate, Mitigate, Obsolete, Opaque, Paradigmatic, Pedantic, Placid, Polemical, Precipitate, Profundity, Prophetic, Prudent, Punctilious, Recondite, Scrupulous, Tranquil, Vacillate.

## Exam levels

| Level | Exam | Marks | Time |
|---|---|---:|---:|
| 1 | Basic Easy Recall Exam | 40 | 25 minutes |
| 2 | Medium Mixed Exam | 35 | 25 minutes |
| 3 | Hard GRE-Like Exam | 30 | 20 minutes |

## Main features

- Fully offline portal
- No internet, CDN, Google Fonts, external libraries, images, or APIs required
- Student name input
- Separate instruction screen before timer starts
- Global countdown timer
- Auto-submit when time ends
- Part/page system instead of one long page
- Answers saved while moving between parts
- Basic, Medium, and Hard exam levels
- Double-blank questions with separate blank-wise columns
- Triple-blank questions with separate blank-wise columns
- Sentence equivalence with exactly two selected answers
- Automatic scoring with partial marks for multi-blank and sentence equivalence questions
- Related vocabulary words hidden during exam and shown only after submission
- Clickable/expandable result review cards
- Review shows full question, all original options, selected answer, correct answer, wrong blanks, and marks
- Strong words and weak words after submission
- Back to Main Menu, Proceed to Next Level, and Exit flow
- Responsive design for desktop and mobile

## How to run locally

1. Extract the ZIP file.
2. Open the folder.
3. Double-click `index.html`.
4. Enter your name.
5. Choose an exam level.
6. Read the instruction screen.
7. Click **Start Exam**.

The portal works directly in your browser without installing anything.

## How to deploy on GitHub Pages

1. Create a new GitHub repository.
2. Upload these files to the root of the repository:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Click **Save**.
6. Wait for GitHub Pages to publish the site.
7. Open the published link and test the exam.

## Important notes

- Do not rename `style.css` or `script.js` unless you also update the links in `index.html`.
- Keep all four files in the same folder.
- The Hard GRE-Like Exam is set to **20 minutes**.
- The result review intentionally hides explanations and focuses on score, correctness, selected answers, correct answers, and weak words.


## Part navigation auto-scroll fix

This version includes a navigation improvement: when the student clicks **Next Part** or **Previous Part**, the page automatically scrolls to the first question of the newly opened part while preserving all saved answers and the running timer.
