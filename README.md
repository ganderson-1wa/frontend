#frontend-assignment

Clone this repo: https://github.com/ganderson-1wa/frontend.git

run **npm install** in **app** directory installing all dependencies listed in package.json.

Build by running **npm run build** in the **app** directory (or to build in watch mode run **npx webpack -w**).

Build in production mode with **npm run build -- --mode=production** or in watch mode with **npx webpack -p -w**.

**MacOS**: Serve the application from **docs** in terminal by running **python -m SimpleHTTPServer 8000**.

**Linux**: Serve the application from **docs** in terminal by running **python3 -m http.server 8000**.

**Assignment Instructions**

1. Fetch data from local file in ..docs/sample/data.json or remote file https://ganderson-1wa.github.io/frontend/sample/data.json

2. Use axios or async await to fetch data.

3. Map array in palette > colors object.  Display 4 buttons, one for each color. Use the 'name' for button label and style each button with corresponding 'hex' value.

4. Create a click handler to pass props from this component (ComponentA) to a second component (ComponentB). Both the color name and hex value should be passed to ComponentB and subsequenty style a box using the hex value and display the color name.

5. The styled box should change color based on the each time the corresponding button in ComponentA is clicked.

6. Both Components should align horizontally and vertically in the center of viewport using Flexbox.

7. Once finished, create a github repo with a readme of instructions on how to run your application.

**This assignment should take less than an hour to complete.**

Here is what you are trying to achieve : https://ganderson-1wa.github.io/frontend/answer.html
