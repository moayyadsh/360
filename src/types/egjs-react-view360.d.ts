declare module '@egjs/react-view360' {
  import { Component } from 'react';

  export interface PanoViewerProps {
    image: string;
    width?: number | string;
    height?: number | string;
    projection?: '360' | '180' | 'fisheye';
    autoRotate?: boolean;
    autoRotateSpeed?: number;
    enableWheel?: boolean;
    enablePinch?: boolean;
    enableDoubleClick?: boolean;
    enableKeyboard?: boolean;
    enableMouse?: boolean;
    enableTouch?: boolean;
    defaultZoom?: number;
    minZoom?: number;
    maxZoom?: number;
    defaultPitch?: number;
    defaultYaw?: number;
    minPitch?: number;
    maxPitch?: number;
    minYaw?: number;
    maxYaw?: number;
    mouseWheelZoom?: boolean;
    mouseWheelZoomSpeed?: number;
    mouseDragZoom?: boolean;
    mouseDragZoomSpeed?: number;
    mouseDragRotate?: boolean;
    mouseDragRotateSpeed?: number;
    onLoad?: () => void;
    onError?: () => void;
    [key: string]: any;
  }

  export class PanoViewer extends Component<PanoViewerProps> {
    reset(): void;
    zoom(level: number): void;
    rotate(x: number, y: number): void;
    setPitch(pitch: number): void;
    setYaw(yaw: number): void;
    getPitch(): number;
    getYaw(): number;
    getZoom(): number;
  }
} 