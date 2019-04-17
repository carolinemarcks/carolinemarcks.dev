import React from 'react';

export interface TrackElem {
  url: string;
  images: string[];
  name: string;
  artist: string;
}

class Track extends React.Component<{ track: TrackElem }, { images: string[] }> {
  public constructor(props: { track: TrackElem }) {
    super(props);
    this.state = {
      images: props.track.images,
    };
  }

  public render(): JSX.Element {
    const { track } = this.props;
    const { images } = this.state;
    const [image, ...rest] = images;
    const onError = (): void => {
      if (rest.length) this.setState({ images: rest });
    };
    return (
      <article className="col-3 col-6-xsmall work-item">
        <a className="image fit thumb" style={{ cursor: 'pointer', outline: '0px' }} href={track.url}>
          <img src={image} alt={track.artist} onError={onError} />
        </a>
        <h3>{track.name}</h3>
        <p>{track.artist}</p>
      </article>
    );
  }
}

export default Track;
