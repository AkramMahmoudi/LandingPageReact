import React from 'react'

function VideoComp() {
  return (
    <>
   {/*-----Video Start-----*/}
   <section className="video-section prelative text-center white">
   <div className="section-padding video-overlay">
     <div className="container">
       <h3>Watch Now</h3>
       <i className="fa fa-play" id="video-icon" aria-hidden="true" />
       <div className="video-popup">
         <div className="video-src">
           <div className="iframe-src">
             <iframe
               src="https://www.youtube.com/embed/Ku52zNnft8k?rel=0&showinfo=0"
               allowFullScreen=""
               title="YouTube Video"
             />
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
 {/*-----Video End-----*/}
 </>
  )
}

export default VideoComp