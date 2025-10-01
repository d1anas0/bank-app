## Purpose of this repo

This repo is actually a subfolder of a larger repo - https://github.com/d1anas0/Udemy-Javascript.

I extracted it using `git filter-repo`, carrying over existing git history for this folder, so I could treat this as a standalone project moving forward, whilst still progressing through the Udemy course material.

## Architectural Considerations

As I progressed through the coursework, I saw an opportunity to expand on this project. I am most intent on developing my skills in writing tests and TypeScript, and so I decided to refactor my code from the assignment so that I could integrate these more easily in the near future.

Below are the tree diagrams highlighting the architectural differences I decided to apply to the project, in anticipation of the code upgrades.

### Structure of my 'Student_version' of the 'Bankist app'

```
Student_version/
├── .prettierrc
├── Bankist-flowchart.png
├── icon.png
├── index.html
├── logo.png
├── script.js
├── style.css
├── .vscode/
│ └── launch.json
├── modules/
│ ├── closeAccount.js
│ ├── createUsernames.js
│ ├── displayTransactions.js
│ ├── transferFunds.js
│ └── updateUI.js
├── utils/
│ ├── calculations.js
│ ├── data.js
│ └── elements.js
└── z. other/
├── challenges.js
└── practice.js
```

### Structure of the original, course provided 'Instructor_version' of the 'Bankist app'

```
Instructor_version/
├── .prettierrc
├── Bankist-flowchart.png
├── icon.png
├── index.html
├── logo.png
├── script.js
└── style.css
```

## Try it out!

This repo contains both the original course provided version of the app, and my soon-to-be upgraded version of the app. Therefore, both versions are accessible via GitHub Pages:

1. https://d1anas0.github.io/bank-app/Student_version/
2. https://d1anas0.github.io/bank-app/Instructor_version/

As this repo is intended to capture how I add value, from a code quality perspective, to a provided 'starter' codebase, it is not intended that there will be major differences in the UI or even the apps functionality.

You can also see both versions of the app by cloning the repo, with greater insight into the actual code differences being employed:

1. `git clone https://github.com/d1anas0/bank-app.git`
2. Open the codebase
3. Find `index.html` of either the `Instructor_version` or `Student_version`
4. Right-click and `Open with Live Server`
5. Open your browser developer tools (F12), you should see an array of the existing accounts currently being used in the project. Log in to the app using any of the pin/username combinations

```

```

```

```
