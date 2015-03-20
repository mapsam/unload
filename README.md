# Unload.js

**Don't leave the page before saving!** This script allows the user to specify a target element that takes user input (i.e. `<textarea>`) for the browser to save information from and prevent a user from navigating away from the page without saving.

This relies on the [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) Web API as well as the user specifying the input field and save button IDs.

## Setup

**HTML**

You'll need an ID for the `input` or `textarea` you're wanting to use.

```HTML
<textarea id="mytext"></textarea>
<button id="save" type="button">Save</button>
```

**Javascript**

Load `unload.js` at the `<head>` of your page:

```HTML
<script src="unload.js"></script>
```

Start a new `unload` instance in your script and pass the IDs of both content area and the save button:

```javascript
var textarea = new unload({
        content: 'mytext',
        save: 'save'
    })
```

Now you'll be thrown navigation errors if you try to leave the page before pressing save. If you have saved and return to the page later - your local storage object will fill the input area accordingly.