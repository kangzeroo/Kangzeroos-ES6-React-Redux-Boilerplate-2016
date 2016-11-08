// This page is for listing all the Redux actions used in our app
// Instead of typing a string each time we use an action, we import the variable (eg TOGGLE_SIDEMENU).
// This reduces errors and allows for better readability

// Toggling the sidemenu requires this TOGGLE_SIDEMENU action.
// In `sideMenuActions.js` we use `toggleSideMenu()` to send an action to the Redux reducers. Notice that `toggleSideMenu()` imports TOGGLE_SIDEMENU
// In `../reducers/contentReducer.js` we have a switch statement looking for TOGGLE_SIDEMENU, and will use it to determine how to change Redux state
// In `../components/SideMenu/SideMenu.js` (ie <SideMenu>) we have a component that relies on the `visible` attribute in Redux state.
          // `visible` has been changed by `../reducers/contentReducer.js`
          // `visible` will determine how the <SideMenu> component behaves, and any change in `visible` will trigger a re-render of <SideMenu>
export const TOGGLE_SIDEMENU = "TOGGLE_SIDEMENU"

export const ADD_CONTENT = "ADD_CONTENT"
