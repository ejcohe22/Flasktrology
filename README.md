# Astrology.js :alien:  
  
[![Build](https://github.com/ejcohe22/Astrology.js/actions/workflows/eslint.yml/badge.svg?branch=main)](https://github.com/ejcohe22/Astrology.js/actions/workflows/eslint.yml)    
  
:aries: :taurus: :gemini: :cancer: :leo: :virgo: :libra: :scorpius: :sagittarius: :capricorn: :aquarius: :pisces:  
  
An astrology horoscope webapp built with nodejs

-------
### Development:
  1. clone the repository to some local directory.  
  2. make edits  
  
  #### To run the app on a local machine in Astrology.js directory  
    `npm install`  
    `npm run app`  
  Then launch a browser to localhoat:5000  
    
  #### $to$ $lint$ $locally$  
  `npx eslint *.js`  
  a linter also runs as github pipeline, but this is on github actions and may take time as it uses their resources

------
### Public Web Deployment:
An eslint pipeline should run on all branches to autocheck style when considering merge requests
Merges to main require approval from a code owner!
Once development is merged into main it is autodeployed to Heroku [here](https://astrology-node-js.herokuapp.com/)
