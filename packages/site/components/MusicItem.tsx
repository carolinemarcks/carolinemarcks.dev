import React from 'react';

export interface MusicItemProps {
  url: string;
  images: string[];
  title: string;
  subtitle: string;
}

class MusicItem extends React.Component<MusicItemProps, { images: string[] }> {
  public constructor(props: MusicItemProps) {
    super(props);
    this.state = {
      images: props.images,
    };
  }

  public render(): JSX.Element {
    const { title, subtitle, url } = this.props;
    const { images } = this.state;
    const [image, ...rest] = images;
    const onError = (): void => {
      if (rest.length) this.setState({ images: rest });
    };
    return (
      <article className="col-3 col-6-xsmall work-item">
        <a className="image fit thumb" style={{ cursor: 'pointer', outline: '0px' }} href={url}>
          <img src={image} alt={subtitle} onError={onError} />
        </a>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </article>
    );
  }
}

export default MusicItem;
