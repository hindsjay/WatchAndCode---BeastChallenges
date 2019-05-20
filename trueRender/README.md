Using todoMVC jQuery (source: https://github.com/tastejs/todomvc) we are tasked to update the render methods to make them more explicit/accurate as they do more than just render data.

My Approach:
Created an object titled "view" where I moved the render methods to.  After doing this, then needed to update the code throughout the app wherever render() and renderFooter() were called to reflect the new location.

Created a method within the view object to save the data to local storage as it is changed/updated.  After creating this new method added code to execute the method where needed.