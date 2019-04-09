This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


Bikers - React Application

Component Structure:
		
	App.js -> Header.js
		  BikeCard.js -> CardBody.js -> BikeImage.js
				 ButtonB.js     BrandHead.js
						BrandHead.js
						BikeColors.js


App Component contains local json data which is being populated to all other components.


Header.js -> This is the header component.

BikeCard.js -> This component contains the CardBody and a Button component.

BikeImage.js -> This component lies in cardbody and contains an image.

BrandHead.js -> This component contains the Brand and Bike name.

BikeColors.js -> This component contains the available colors in the bootstrap badges.
