import { PanoViewer } from "@egjs/react-view360";
import { slideshowImages } from "../data/data";
import "./Slideshow.scss";
import { useState, useEffect, useRef } from "react";

const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const viewerRef = useRef(null);
  const panoContainerRef = useRef<HTMLDivElement>(null);
  const yawRef = useRef(0); // store current yaw
  const [istouched, setistouched] = useState(false)

  // Auto-rotate slideshow every 6 seconds
  useEffect(() => {
    if(istouched){
        return
    }
    const timer = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
    }
  
  , [istouched]);

  // Loading spinner simulation
  useEffect(() => {
    setIsLoading(true);
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, [currentImage]);

  // Auto-rotate the view to the left (change yaw)
  useEffect(() => {
    if(istouched){ 
        return
    }
        
    const interval = setInterval(() => {
      if (viewerRef.current) {
        yawRef.current -= 0.1; // decrease to rotate left
        //@ts-ignore
        viewerRef.current.lookAt({ yaw: yawRef.current });
      }
    }, 60); // smoother rotation

    return () => clearInterval(interval);
  
  }, [currentImage,istouched]);

  // Handle fullscreen toggle
  const handleFullscreen = () => {
    if (!isFullscreen) {
      if (panoContainerRef.current) {
        panoContainerRef.current.requestFullscreen().then(() => {
          setIsFullscreen(true);
        }).catch((err) => {
          console.error('Error attempting to enable fullscreen:', err);
        });
      }
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        }).catch((err) => {
          console.error('Error attempting to exit fullscreen:', err);
        });
      }
    }
  };

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // F key for fullscreen toggle
      if (event.key.toLowerCase() === 'f') {
        event.preventDefault();
        handleFullscreen();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  console.log(istouched,"istouched");
  
    

  return (
    <div className="slideshow360">
        {!istouched && <div className="slideshow-blackscreen" onClick={() => setistouched(true)}   />}
      <div className="pano-container" ref={panoContainerRef}>
        {isLoading && (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        )}
        
        {/* Fullscreen Button */}
        <div className="fullscreen-control">
          <button 
            className="fullscreen-btn"
            onClick={handleFullscreen}
            title={isFullscreen ? "Exit Fullscreen (F)" : "Enter Fullscreen (F)"}
          >
            {isFullscreen ? "⛶" : "⛶"}
          </button>
          <span className="keyboard-hint">F</span>
        </div>

        <PanoViewer
          ref={viewerRef}
          image={slideshowImages[currentImage].src}
          onReady={() => {
            yawRef.current = 0;
            //@ts-ignore
            viewerRef.current.lookAt({ yaw: 0 });
          }}
        />
        
        {/* Slideshow Controls Overlay */}
        <div className="slideshow-controls-overlay">
          {/* Previous Arrow */}
          <button 
            className="nav-arrow prev-arrow"
            onClick={() => setCurrentImage(prev => 
              prev === 0 ? slideshowImages.length - 1 : prev - 1
            )}
            title="Previous Image"
          >
            ‹
          </button>

          {slideshowImages.map((image, index) => (
            <div 
              key={index} 
              className={`slide-thumbnail ${index === currentImage ? 'active' : ''}`}
            >
              <img
                width={100}
                height={100}
                src={image.src}
                alt={image.title}
                onClick={() => setCurrentImage(index)}
              />
              
            </div>
          ))}

          {/* Next Arrow */}
          <button 
            className="nav-arrow next-arrow"
            onClick={() => setCurrentImage(prev => 
              prev === slideshowImages.length - 1 ? 0 : prev + 1
            )}
            title="Next Image"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;






