import './App.css';
import Carousel from './components/Carousel/Carousel';

const carouselContent = {
  heading: 'See the Big Picture, Act on the Small Details',
  cta: {
    url: '#',
    label: 'Contact us',
  },
  
  slides: [
    {
      id : 'slide1',
      title: 'Insight Title Goes Here',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa blandit nisl.',
      backgroundImage: './image/prairie.png',
      cta: {
        label: 'read now',
        url: '#',
      }
    },
    {
      id: 'slide2',
      title: 'Model Title Goes Here',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa blandit nisl.',
      backgroundImage: './image/lake.jpg',
      cta: {
        label: 'view now',
        url: '#',
      }
    },
    {
      id: 'slide3',
      title: 'Latest Webinar Sign Up',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa blandit nisl.',
      backgroundImage: './image/field.jpg',
      cta: {
        label: 'register now',
        url: '#',
      }
    }
  ]
}

function App() {
  return (
    <div>
      <Carousel {...carouselContent} />
    </div>
  );
}

export default App;
