


// import React, { useRef, useState, useEffect } from "react";

// const VideoSlider = () => {
//   const videoRef = useRef(null);

//   const [isMuted, setIsMuted] = useState(true);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.muted = isMuted;
//       videoRef.current.play().catch(() => {});
//     }
//   }, [isMuted]);

//   const toggleSound = () => {
//     if (videoRef.current) {
//       const newMutedState = !isMuted;
//       videoRef.current.muted = newMutedState;
//       setIsMuted(newMutedState);

//       videoRef.current.play().catch(() => {});
//     }
//   };

//   return (
//     <div
//       className="video-slider"
//       style={{
//         position: "relative",
//         width: "100%",
//       }}
//     >
//       <video
//         ref={videoRef}
//         autoPlay
//         muted={isMuted}
//         loop
//         playsInline
//         style={{
//           width: "100%",
//           display: "block",
//         }}
//       >
//         <source src="/images/slider/slider.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Small Sound Toggle Button */}
//  <button
//   onClick={toggleSound}
//   aria-label={isMuted ? "Unmute video" : "Mute video"}
//   style={{
//     position: "absolute",
//     top: "12px",
//     left: "12px",
//     background: "none",
//     border: "none",
//     color: "#fff",
//     fontSize: "14px",
//     cursor: "pointer",
//     padding: "2px",
//     margin: 0,
//     outline: "none",
//     boxShadow: "none",
//     zIndex: 1000,
//     WebkitTapHighlightColor: "transparent",
//   }}
// >
//   {isMuted ? "🔈" : "🔊"}
// </button>
//     </div>
//   );
// };

// export default VideoSlider;



import React, { useRef, useState, useEffect } from "react";
import "./VideoSlider.css";

const VideoSlider = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch(() => {});
    }
  }, [isMuted]);

  const toggleSound = () => {
    const muted = !isMuted;
    setIsMuted(muted);

    if (videoRef.current) {
      videoRef.current.muted = muted;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="video-slider">

      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="slider-video"
      >
        <source src="/images/slider/slider.mp4" type="video/mp4" />
      </video>

      <button
        className="sound-btn"
        onClick={toggleSound}
      >
        {isMuted ? (
          <i className="fas fa-volume-mute"></i>
        ) : (
          <i className="fas fa-volume-up"></i>
        )}
      </button>

    </section>
  );
};

export default VideoSlider;