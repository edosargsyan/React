import React from "react";

function Main(){
    return(
     <main>
        <div>
            <img src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg"/>
        </div>
       <Comments/>
     </main>
    );
}

function Comments(){
    return(
    <div className="posts">
           <input type='text'/>
    </div>
    )
}
export default Main