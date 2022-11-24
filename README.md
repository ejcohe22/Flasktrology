# Astrology.js
An astrology horoscope webapp built with nodejs

-------
# Development:
  clone the repository to some local directory.
  make edits
  To run the app on alocal machine in Astrology.js directory  
    `npm install`  
    `npm run app`  
  Then launch a browser to localhoat:5000
  
  to lint locally
  `npx eslint *.js`
  a linter also runs as github pipeline, but this is on github actions and may take time as it uses their resources

------
## Public Web Deployment:
An eslint pipeline should run on all branches to autocheck style when considering merge requests
Merges to main require approval from a code owner!
Once development is merged into main it is autodeployed to Heroku [here](https://astrology-node-js.herokuapp.com/)
