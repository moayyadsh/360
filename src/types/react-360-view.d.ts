declare module 'react-360-view' {
  import { Component, RefObject } from 'react';

  interface React360ViewerProps {
    image: string;
    count?: number;
    width?: number;
    height?: number;
    autoRotate?: boolean;
    rotationSpeed?: number;
    className?: string;
  }

  interface React360ViewerRef {
    reset: () => void;
    zoomIn: () => void;
    zoomOut: () => void;
  }

  class React360Viewer extends Component<React360ViewerProps> {
    reset(): void;
    zoomIn(): void;
    zoomOut(): void;
  }

  export default React360Viewer;
} 