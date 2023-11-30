import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import AccordionItem from '../components/AccordionItem';

const faq = [
  {
    title: 'Kto i kiedy może oddać krew?',
    description:
      ' Osoby, które mają od 18 do 65 lat i cieszą się dobrym zdrowiem, a także:  \n - które ważą co najmniej 50 kilogramów, \n - u których w ciągu ostatnich 6 miesięcy nie wykonano akupunktury, tatuażu, przekłucia uszu lub innych części ciała,\n - które w ciągu ostatnich 6 miesięcy nie miały wykonanych żadnych zabiegów operacyjnych, endoskopowych i innych diagnostycznych badań (np. gastroskopii, panendoskopii, artroskopii, laparoskopii),\n - które w ciągu ostatnich 6 miesięcy nie były leczone krwią i preparatami krwiopochodnymi.\n\n   W dniu oddania krwi należy być wyspanym i wypoczętym oraz zdrowym, czyli:\n - nie mieć objawów przeziębienia,\n - nie brać aktualnie żadnych leków (nie dotyczy to większości suplementów diety czyli np. popularnych preparatów witaminowych czy środków antykoncepcyjnych, należy jednak poinformować o tym lekarza kwalifikującego).\n\n    Przed przyjściem do centrum krwiodawstwa trzeba zjeść lekki posiłek, w ciągu 24 godzin przed pobraniem wypić ok. 2 l płynów i wziąć ze sobą dokument tożsamości ze zdjęciem, najlepiej dowód osobisty. Przed oddaniem krwi należy także ograniczyć palenie papierosów i nie pić alkoholu, również w dniu poprzedzającym oddanie krwi.',
  },
  {
    title: 'Jak przygotować się do oddania krwi?',
    description:
      '- w ciągu doby poprzedzającej oddanie krwi wypij ok. 2 l płynów (woda mineralna, soki)\n - wyśpij się\n- zjedz lekki posiłek (np. pieczywo, chuda wędlina, ser biały, dżem). Nie jedz: tłuszczy pochodzenia zwierzęcego: mleka, masła, kiełbasy, pasztetu, śmietany, rosołu, tłustego mięsa oraz jajek, orzeszków ziemnych i ciast kremowych,\n- ogranicz palenie papierosów.\n \n Nie zgłaszaj się do oddania krwi, jeśli:\n- jesteś przeziębiony (katar)\n- przyjmujesz leki\n- po spożyciu alkoholu.\n \nOddawanie krwi jest całkowicie bezpieczne. Wszystkie czynności związane z kwalifikowaniem do oddania krwi i z oddaniem krwi wykonywane są przy zastosowaniu sprzętu jednorazowego użytku',
  },
  {
    title: 'Jak wygląda procedura oddania krwi?',
    description: '1.\n2.\n3.\n',
  },
  {
    title: 'Jak zachowywać się po oddaniu krwi?',
    description: '1.\n2.\n3.\n',
  },
  {
    title: 'Uprawnienia krwiodawców',
    description: 'Lelum polelum ipsum',
  },
];

const VadenecumPage = () => {
  const [info, setInfo] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    getVadenecumInfo();
  }, []);

  const getVadenecumInfo = async () => {
    setIsLoading(true);

    try {
      // const response = await axios(`http://10.0.2.2:8082/api/news/all`, {
      //   timeout: 5000,
      //   method: 'GET',
      // });
      setTimeout(function () {
        console.log('timeout');
        setIsLoading(false);
      }, 0);

      //setInfo(response.data);
      //console.log('response: ' + response);
      //setIsLoading(false);
    } catch (error) {
      console.log('fetch error - ' + error);
      setIsLoading(false);
    }
  };

  return (
    <ScrollView>
      <View style={{margin: 5}}>
        <View style={{marginVertical: 10}}>
          <Text style={styles.infoText}>
            Niezbędne informacje dla początkujących osób zaczynających oddawanie
            krwi, ale także niezbędne informacje i przypomnienia dla już
            honorowych dawców krwi.
          </Text>
          <Text style={styles.infoText}>
            Upewnij się że jesteś przygotowany i nie masz przeciwwskazań aby
            oddać krew.
          </Text>
        </View>
        {isLoading ? (
          <View style={{margin: 20}}>
            <ActivityIndicator size="large" color="#c43b3d" />
          </View>
        ) : (
          <View style={{marginBottom: 10, height: '100%'}}>
            <ScrollView nestedScrollEnabled={true}>
              {faq.map((item, key) => {
                return (
                  <View key={key}>
                    <AccordionItem
                      title={item.title}
                      bodyText={item.description}
                    />
                  </View>
                );
              })}
            </ScrollView>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#c43b3d',
  },
  description: {
    fontSize: 14,
    color: '#000',
  },
  dateText: {
    fontSize: 14,
    color: '#808080',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
  },
  infoText: {
    margin: 5,
    color: '#000',
    textAlign: 'center',
    fontSize: 15,
  },
});

export default VadenecumPage;
