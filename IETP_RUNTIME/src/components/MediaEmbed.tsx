import React, { useState, useRef, useEffect, CSSProperties } from 'react';

export interface MediaEmbedProps {
  /** Source URL for the media file */
  src: string;
  /** Media type: 'video' or 'audio' */
  type: 'video' | 'audio';
  /** Optional title/caption for the media */
  title?: string;
  /** Autoplay behavior: 'on' | 'off' | 'muted' (deterministic) */
  autoplay?: 'on' | 'off' | 'muted';
  /** Show controls (default: true) */
  controls?: boolean;
  /** Loop the media (default: false) */
  loop?: boolean;
  /** Width of the player (default: '100%') */
  width?: string | number;
  /** Height of the player (auto for audio, required for video) */
  height?: string | number;
  /** Responsive scaling (default: true) */
  responsive?: boolean;
  /** Poster image for video (thumbnail before play) */
  poster?: string;
  /** CSS class name for styling */
  className?: string;
  /** Callback when media is ready to play */
  onReady?: () => void;
  /** Callback when media starts playing */
  onPlay?: () => void;
  /** Callback when media is paused */
  onPause?: () => void;
  /** Callback on error */
  onError?: (error: string) => void;
}

/**
 * MediaEmbed Component
 * 
 * Embeds audio or video content with user controls, autoplay options,
 * and responsive scaling for IETP (Interactive Electronic Technical Publication).
 * 
 * @example
 * ```tsx
 * <MediaEmbed
 *   src="/media/safety-briefing.mp4"
 *   type="video"
 *   title="Pre-Flight Safety Briefing"
 *   autoplay="muted"
 *   controls={true}
 *   responsive={true}
 * />
 * ```
 */
export const MediaEmbed: React.FC<MediaEmbedProps> = ({
  src,
  type,
  title,
  autoplay = 'off',
  controls = true,
  loop = false,
  width = '100%',
  height,
  responsive = true,
  poster,
  className = '',
  onReady,
  onPlay,
  onPause,
  onError,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement>(null);

  // Deterministic autoplay setup
  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return;

    const handleCanPlay = () => {
      if (autoplay === 'on') {
        media.play().catch(err => {
          console.warn('Autoplay prevented:', err);
          setError('Autoplay was prevented by browser. Click to play.');
          onError?.('Autoplay prevented');
        });
      } else if (autoplay === 'muted') {
        media.muted = true;
        media.play().catch(err => {
          console.warn('Autoplay (muted) prevented:', err);
          setError('Autoplay was prevented by browser. Click to play.');
          onError?.('Autoplay prevented');
        });
      }
      onReady?.();
    };

    media.addEventListener('canplay', handleCanPlay);
    return () => media.removeEventListener('canplay', handleCanPlay);
  }, [autoplay, onReady, onError]);

  // Event handlers
  const handlePlay = () => {
    setIsPlaying(true);
    setError(null);
    onPlay?.();
  };

  const handlePause = () => {
    setIsPlaying(false);
    onPause?.();
  };

  const handleError = () => {
    const errorMsg = `Failed to load media: ${src}`;
    setError(errorMsg);
    onError?.(errorMsg);
  };

  // Responsive container style
  const containerStyle: CSSProperties = responsive
    ? {
        position: 'relative',
        width: '100%',
        maxWidth: typeof width === 'number' ? `${width}px` : width,
      }
    : {
        width: typeof width === 'number' ? `${width}px` : width,
      };

  // Media element style
  const mediaStyle: CSSProperties = responsive
    ? {
        width: '100%',
        height: height ? (typeof height === 'number' ? `${height}px` : height) : 'auto',
        display: 'block',
      }
    : {
        width: typeof width === 'number' ? `${width}px` : width,
        height: height ? (typeof height === 'number' ? `${height}px` : height) : 'auto',
      };

  const containerClassName = `ietp-media-embed ${className} ${type}-embed ${
    responsive ? 'responsive' : ''
  }`;

  return (
    <div className={containerClassName} style={containerStyle}>
      {title && (
        <div className="ietp-media-title" style={{ marginBottom: '8px', fontWeight: 'bold' }}>
          {title}
        </div>
      )}
      
      {error && (
        <div
          className="ietp-media-error"
          style={{
            padding: '8px',
            marginBottom: '8px',
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '4px',
            color: '#856404',
          }}
        >
          ⚠️ {error}
        </div>
      )}

      {type === 'video' ? (
        <video
          ref={mediaRef as React.RefObject<HTMLVideoElement>}
          src={src}
          controls={controls}
          loop={loop}
          poster={poster}
          style={mediaStyle}
          onPlay={handlePlay}
          onPause={handlePause}
          onError={handleError}
          playsInline
        >
          Your browser does not support the video element.
        </video>
      ) : (
        <audio
          ref={mediaRef as React.RefObject<HTMLAudioElement>}
          src={src}
          controls={controls}
          loop={loop}
          style={mediaStyle}
          onPlay={handlePlay}
          onPause={handlePause}
          onError={handleError}
        >
          Your browser does not support the audio element.
        </audio>
      )}

      {isPlaying && (
        <div
          className="ietp-media-status"
          style={{
            marginTop: '4px',
            fontSize: '12px',
            color: '#28a745',
          }}
        >
          ▶ Playing
        </div>
      )}
    </div>
  );
};

export default MediaEmbed;
