# cloudinary-demo

## Introduction
This is a VUE application that consumes the [Cloudinary API](https://cloudinary.com). It shows how to incorporate the image upload widget onto your application.

![screenshot](https://raw.githubusercontent.com/achongsBiz/readme-files/master/cloudinary-demo/flow.png)

## Registration
1. Sign up for a Cloudinary account. 

2. You will be assigned a "cloud name". This information is featured prominently in various places, but it's always on the top right corner when you log in. On the screenshot it's the value "dwinynet5."

3. You need to create an unsigned upload preset. This information is under the Settings > Upload. Scroll to the Uploads Preset section and chose "Add upload preset". In the next page, **make sure the Signing Mode is "Unsigned"**. Save your new preset. You should now see an upload preset name. On the screenshot below it's "sxboyxik".

![screenshot](https://raw.githubusercontent.com/achongsBiz/readme-files/master/cloudinary-demo/setup.png)

## Project Setup
1. Include the Cloudinary JS file within the index.html file

```
<script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>  
```

On VUE projects index.html is found under public/index.html. In React, the index.html file is located in the root of the project.

2. In this demo project the component CloudinaryComp demonstrates the basics of displaying and using the widget. You will need to provide the values from steps 2 and 3:

```
      {
        // Insert your cloud name and presets here, 
        // see the documentation
        cloudName: 'dwinynet5', 
        uploadPreset: 'sxboyxik'
      }, 
```


3. Notice that there is an anonymous function inside of the call to cloudinary. The code inside of this function runs when the upload is complete. Upon asuccessful upload, Cloudinary will give you back a **result** object. More specifically the url of the image you just uploaded will be:

```
result.info.url
```

![screenshot](https://raw.githubusercontent.com/achongsBiz/readme-files/master/cloudinary-demo/console.png)

3. You can now perhaps take this url, place it on an object and send it to your back-end for future retrieval.

## Running this Demo

This project contains a simple implementation of the above steps.

1. From within the project:
```
npm install
npm run serve (or dev)
```

2. On your app, click on the upload button and select an image

3. View the console to see the URL discussed on step 3 of the previous section.

4. Uploaded images can be viewed at any time by logging into Cloudinary and going into "Media Library".

![screenshot](https://raw.githubusercontent.com/achongsBiz/readme-files/master/cloudinary-demo/dashboard.png)