import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/ArtistProfile.css';

const VideoCard = ({ videoUrl, title, description }) => {
  return (
    <div className="video-card">
      <div className="video-card__frame">
        <iframe 
          src={videoUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
      <h3 className="video-card__title">{title}</h3>
      <p className="video-card__description">{description}</p>
    </div>
  );
};

const videosData = [
  {
    id: 1,
    videoUrl: "https://rutube.ru/play/embed/e21f61015122bf737f290172fe0bae60",
    title: 'Вторая весна (OST «Ландыши. Такая нежная любовь»)',
    description: 'Женя Трофимов, NANSI & SIDOROV'
  },
  {
    id: 2,
    videoUrl: "https://rutube.ru/play/embed/f462cca2895e91214e1a153c8efe0cc1/",
    title: 'О море',
    description: 'NANSI & SIDOROV'
  },
  {
    id: 3,
    videoUrl: "https://rutube.ru/play/embed/2ab0e4cca9faed1d5ee1714f1268ee4f",
    title: 'Как быть',
    description: 'NANSI & SIDOROV'
  }
];

const ArtistProfile = () => {
  const { artistId } = useParams();
  const [activeTab, setActiveTab] = React.useState('clips');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'clips':
        return (
          <div className="artist-content">
            <h2 className="content-title">Клипы</h2>
            <div className="videos-grid">
              {videosData.map(video => (
                <VideoCard
                  key={video.id}
                  videoUrl={video.videoUrl}
                  title={video.title}
                  description={video.description}
                />
              ))}
            </div>
          </div>
        );
        case 'info': 
        return (
          <div className="artist-content">
            <h2 className="content-title">Информация</h2>
            <div className="info-grid">
              <div className="info-item">
                <h3 className="info-title">Биография</h3>
                <p className="info-description">
                  NANSI & SIDOROV — это дуэт, состоящий из двух музыкантов: Нани Сидоровой и Сергея Иванова.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="page">
      <Layout>
        <div className="artist-profile">
          <div className="artist-header">
            <div className="artist-info">
              <div className="artist-image">
                <img src="https://avatars.yandex.net/get-music-content/12799091/fddecdf8.p.9171016/400x400" alt={artistId} />
              </div>
              <div className="artist-details">
                <span className="artist-type">ИСПОЛНИТЕЛЬ</span>
                <h1 className="artist-name">NANSI & SIDOROV</h1>
                <span className="artist-listeners">5 368 847 слушателей за месяц</span>
                <div className="artist-actions">
                  <button className="btn-primary">
                    <span className="play-icon">▶</span>
                    Слушать
                  </button>
                  <button className="btn-like">
                    <span className="heart-icon">♡</span>
                    <span>28 037</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <nav className="artist-nav">
            <ul className="artist-nav-list">
  
              <li 
                className={`artist-nav-item ${activeTab === 'clips' ? 'artist-nav-item--active' : ''}`}
                onClick={() => handleTabClick('clips')}
              >
                ГЛАВНОЕ
              </li>
              <li 
                className={`artist-nav-item ${activeTab === 'info' ? 'artist-nav-item--active' : ''}`}
                onClick={() => handleTabClick('info')}
              >
                ИНФО
              </li>
            </ul>
          </nav>

          {renderContent()}
        </div>
      </Layout>
    </div>
  );
};

export default ArtistProfile; 