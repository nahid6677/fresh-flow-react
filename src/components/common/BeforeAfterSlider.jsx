import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  firstImage, // Support for your object format
  secondImage, // Support for your object format
  beforeLabel = "Before",
  afterLabel = "After",
  initialPosition = 50,
  className = "",
  height = "400px",
  showLabels = false,
  showHandle = true,
  handleColor = "#ffffff",
  labelStyle = {},
}) => {
  // Handle both formats: direct URL or object with imageUrl
  const beforeImageUrl = firstImage?.imageUrl || beforeImage;
  const afterImageUrl = secondImage?.imageUrl || afterImage;
  const [sliderPosition, setSliderPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const beforeImageRef = useRef(null);
  const afterImageRef = useRef(null);

  // Handle mouse/touch events
  const handleStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMove = useCallback(
    (clientX) => {
      if (!isDragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const position = ((clientX - rect.left) / rect.width) * 100;
      const clampedPosition = Math.max(0, Math.min(100, position));
      setSliderPosition(clampedPosition);
    },
    [isDragging]
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Mouse events
  const handleMouseDown = useCallback(
    (e) => {
      e.preventDefault();
      handleStart(e.clientX);
    },
    [handleStart]
  );

  const handleMouseMove = useCallback(
    (e) => {
      handleMove(e.clientX);
    },
    [handleMove]
  );

  const handleMouseUp = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  // Touch events
  const handleTouchStart = useCallback(
    (e) => {
      e.preventDefault();
      handleStart(e.touches[0].clientX);
    },
    [handleStart]
  );

  const handleTouchMove = useCallback(
    (e) => {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  const handleTouchEnd = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  // Keyboard events
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 2));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 2));
    }
  };

  // Add global event listeners when dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
      document.body.style.userSelect = "none";
      document.body.style.cursor = "ew-resize";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    };
  }, [
    isDragging,
    handleMouseMove,
    handleMouseUp,
    handleTouchMove,
    handleTouchEnd,
  ]);

  // Check if both images are loaded
  useEffect(() => {
    const checkImagesLoaded = () => {
      const beforeLoaded = beforeImageRef.current?.complete;
      const afterLoaded = afterImageRef.current?.complete;
      if (beforeLoaded && afterLoaded) {
        setIsLoaded(true);
      }
    };

    const beforeImg = beforeImageRef.current;
    const afterImg = afterImageRef.current;

    if (beforeImg && afterImg) {
      if (beforeImg.complete && afterImg.complete) {
        setIsLoaded(true);
      } else {
        beforeImg.addEventListener("load", checkImagesLoaded);
        afterImg.addEventListener("load", checkImagesLoaded);

        return () => {
          beforeImg.removeEventListener("load", checkImagesLoaded);
          afterImg.removeEventListener("load", checkImagesLoaded);
        };
      }
    }
  }, [beforeImageUrl, afterImageUrl]);

  return (
    <div
      ref={containerRef}
      className={`before-after-slider ${className}`}
      style={{
        position: "relative",
        height,
        overflow: "hidden",
        cursor: isDragging ? "ew-resize" : "pointer",
        userSelect: "none",
        border: "2px solid #e5e7eb",
        borderRadius: "8px",
      }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Before Image */}
      <div
        className="before-image-container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <img
          ref={beforeImageRef}
          src={beforeImageUrl}
          alt="Before"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            pointerEvents: "none",
          }}
        />
        {showLabels && (
          <div
            className="before-label"
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              background: "rgba(0, 0, 0, 0.7)",
              color: "white",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "bold",
              ...labelStyle,
            }}
          >
            {beforeLabel}
          </div>
        )}
      </div>

      {/* After Image */}
      <div
        className="after-image-container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
        }}
      >
        <img
          ref={afterImageRef}
          src={afterImageUrl}
          alt="After"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            pointerEvents: "none",
          }}
        />
        {showLabels && (
          <div
            className="after-label"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(0, 0, 0, 0.7)",
              color: "white",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "bold",
              ...labelStyle,
            }}
          >
            {afterLabel}
          </div>
        )}
      </div>

      {/* Slider Line */}
      <div
        className="slider-line"
        style={{
          position: "absolute",
          top: 0,
          left: `${sliderPosition}%`,
          width: "2px",
          height: "100%",
          background: handleColor,
          transform: "translateX(-50%)",
          pointerEvents: "none",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Slider Handle */}
      {showHandle && (
        <div
          className="slider-handle"
          style={{
            position: "absolute",
            top: "50%",
            left: `${sliderPosition}%`,
            width: "40px",
            height: "40px",
            background: handleColor,
            border: "3px solid #333",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            cursor: "ew-resize",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: isDragging ? "none" : "transform 0.1s ease",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div style={{ display: "flex", gap: "2px" }}>
            <ChevronLeft size={12} color="#333" />
            <ChevronRight size={12} color="#333" />
          </div>
        </div>
      )}

      {/* Loading overlay */}
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(255, 255, 255, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            color: "#666",
          }}
        >
          Loading images...
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;
