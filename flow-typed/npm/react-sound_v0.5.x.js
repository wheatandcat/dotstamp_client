// flow-typed signature: 6fd4bb65b1b3dde386c91fed2fb2f2c4
// flow-typed version: c15c626a38/react-sound_v0.5.x/flow_>=v0.37.x

declare module 'react-sound' {
  declare export type PlayStatus = 'PLAYING' | 'STOPPED' | 'PAUSED';

  declare export type OnLoadingProperties = {
    bytesLoaded: number;
    bytesTotal: number;
    duration: number;
  }

  declare export type OnPlayingProperties = {
    position: number;
    duration: number;
  }

  declare export default class Sound extends React$Component<any, any, any> {
    static status: {
      PLAYING: 'PLAYING',
      STOPPED: 'STOPPED',
      PAUSED: 'PAUSED'
    };

    static props: {
      url: string;
      playStatus: PlayStatus;
      playFromPosition?: number;
      position?: number;
      volume?: number;
      onLoading?: (properties: OnLoadingProperties) => void;
      onPlaying?: (properties: OnPlayingProperties) => void;
      onFinishedPlaying?: () => void;
    }
  }
}
