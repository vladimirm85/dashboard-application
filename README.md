# React dashboard application (Flexreality test task)


## Task description

#### The main idea is to develop dashboard application. What data is represented in that dashboard is up to you :) Further explanation will be bounded to the specific domain area:
#### There are tons of video courses available. Each course has several modules. Each module has specific status. (in progress, submitted, ready to release etc). You need to represent modules in dashboard grouping by status.
#### Let’s say, you have a course which has 6 modules (1 - in progress, 3 - submitted, 2 - ready for release). That means you need to represent 3 appropriate columns. In eac h column you should place a card with course name and subcards with module names as shown in screenshot

![1 img](https://drive.google.com/uc?export=view&id=1AufbdWxTipQEJTPxshWRGa2B_x_iRNMP)

#### You need to remember that there are plenty of another courses which modules have the same statuses. So you need to represent them as well, having a scroll bar for each column. (you don’t need to show scrollbar in case all items fit the screen)
#### Once you click the card - sidebar rolls from the right side of the screen. Like in screenshot.

![2 img](https://drive.google.com/uc?export=view&id=1T6qYHnxviJXYZNIHOrV_3tv4vE_dG8Qi)

#### In case you click on module - sidebar rolls with selected module highlighted. Vise versa is also desired (you click on module in sidebar and the appropriate subcard is highlighted)

![3 img](https://drive.google.com/uc?export=view&id=1n8g8yufdGUaeFRSYP2Zw_Z3-woFktKCN)

#### In sidebar you should represent all modules which belong to the selected course specifying the module status.
#### Because you can have a lot of statuses, sidebar should move the horizontal scrollbar and don’t overlap the last column.

![4 img](https://drive.google.com/uc?export=view&id=1sCuNFHXhJudc78Bes0VXp-9KrVtDPQdk)

#### You should also implement the ability to fuzzy search through the available content (search by module names and course names case-insensitive)
#### Initially you don’t need to store any data on server. Just populate JSON objects. Once all requirements are fulfilled you should add the representation delay (simulate loading) and represent a content skeleton

![5 img](https://drive.google.com/uc?export=view&id=1G0yBcbtFD4L2Gvsrvic8vbrKAWW_DOyC)

#### Also you need to remember that representing too much items at the same time decreases the performance. Therefore you need to add a virtual scroll.
### In general it should look like this

![6 img](https://drive.google.com/uc?export=view&id=1kWxnFZGzBcP6psC4ieB3i6x7R8gtNnP_)

# This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
