// VideoGalleryPopup.jsx
import{ useEffect } from "react";

const VideoGalleryPopup = ({
    url = "",
    isOpen = false,
    onClose = () => { },
}) => {
    // Function to extract YouTube video ID from various URL formats
    const extractYouTubeVideoId = (inputUrl) => {
        if (!inputUrl) return null;

        const patterns = [
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\n?#]+)/,
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^&\n?#]+)/,
            /(?:https?:\/\/)?youtu\.be\/([^&\n?#]+)/,
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([^&\n?#]+)/,
        ];

        for (let pattern of patterns) {
            const match = inputUrl.match(pattern);
            if (match) {
                return match[1];
            }
        }
        return null;
    };

    // Function to create proper YouTube embed URL
    const getEmbedUrl = (inputUrl) => {
        if (!inputUrl) {
            // Default video if no URL provided
            return "https://www.youtube-nocookie.com/embed/MLpWrANjFbI?autoplay=1&rel=0&modestbranding=1&showinfo=0";
        }

        const videoId = extractYouTubeVideoId(inputUrl);
        if (videoId) {
            // Use youtube-nocookie.com for better compatibility and privacy
            return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3`;
        }

        // If it's already an embed URL or not a YouTube URL, return as is
        return inputUrl;
    };

    // Close popup on escape key
    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === "Escape" && onClose) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscKey);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.removeEventListener("keydown", handleEscKey);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    const handleOverlayClick = () => {
        if (onClose) onClose();
    };

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    if (!isOpen) return null;

    // Get the proper embed URL
    const embedUrl = getEmbedUrl(url);

    return (
        <div className="video-popup-overlay active" onClick={handleOverlayClick}>
            <div className="video-popup-content" onClick={handleContentClick}>
                <button className="video-popup-close" onClick={onClose}>
                    ×
                </button>
                <iframe
                    className="video-iframe"
                    width="800"
                    height="450"
                    src={embedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        aspectRatio: "16/9",
                    }}
                />
            </div>
        </div>
    );
};

export default VideoGalleryPopup;
