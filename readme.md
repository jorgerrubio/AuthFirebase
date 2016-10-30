#Auth Firebase 3, Login and register Firebase, Login with Google and Facebook in Ionic 2

	npm install -g typings
	npm install --save firebase
	typings install file:node_modules/firebase/firebase.d.ts --save --global && typings install
	
###editar archivo
`node_modules/@ionic/app-scripts/config/rollup.config.js`

###añadir esta linea dentro de 
  var rollupConfig = {
     useStrict: false,
     // etc...
     
###editar archivo
`tsconfig.json`
  
 ``` 
 "exclude": [
    "node_modules",
    "typings"
 ],
 ```
