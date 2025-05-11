import React, { useEffect, useRef, useState } from 'react';

function CloudinaryComp() {

    const [myWidget, setMyWidget] = useState();

    useEffect(
        () => {
          initWidget();
        }, []
    )

    function initWidget(){
      const widget = window.cloudinary.createUploadWidget(
      {
        // Insert your cloud name and presets here, 
        // see the documentation
        cloudName: 'enter-your-own', 
        uploadPreset: 'enter-your-own'
      }, 
      (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info); 
          console.log("Image URL: " + result.info.url);
        }
      }
    );

      setMyWidget(widget);
    }

    function upload() {
        myWidget.open();
    }

    return(

        <>
            <div>
                <h2>How to use the Cloudinary Upload widget</h2>
                <button onClick={ () => upload() }>Upload</button><br/>
                <p>Look at the console for the message "Image URL". Ideally, this image location will be sent to your back end server.</p>
            </div>      
        </>
    );

}

export default CloudinaryComp