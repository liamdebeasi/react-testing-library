import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const [present, dismiss] = useIonModal(({ name }) => <div>Hello {name}.</div>, {
    name: 'Dave',
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <button data-testid="open-modal-button" onClick={() => present({ htmlAttributes: {
          'data-testid': 'modal-element'
        }})}>Open Modal</button>
      </IonContent>
    </IonPage>
  );
};

export default Home;
