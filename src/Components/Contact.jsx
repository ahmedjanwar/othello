import React from 'react'
import ReactDOM from "react-dom";


export default function Contact() {
  return (
    <div id='contact'>
        
        <form action="mailto:info@othellovaasa.com" method="post" enctype="text/plain">
        <h1>Contact Us</h1>
            <input type="text" name="name" placeholder="Full Name" />
            <input type="email" name="mail" placeholder="Email Address" />
            <textarea name="comment" placeholder='Write here....'></textarea>
            <input type="submit" value="Send" />
            
        </form>
        
        <iframe width="300" height="327" id="gmap_canvas" 
        src="https://maps.google.com/maps?q=Palosaarentie%2018,%20Vaasa&t=&z=13&ie=UTF8&iwloc=&output=embed" 
        frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        
    </div>
  )
}
