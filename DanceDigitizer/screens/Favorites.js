import {StyleSheet, View} from 'react-native';
import {PageHeader} from './components/PageHeader';
import {InputText} from './components/InputText';
import {ContentEntry} from './components/ContentEntry';
import {BottomButtons} from './components/BottomButtons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useAuth } from './AuthContext';

export function Favorites(){
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.root, { paddingTop: insets.top }]}>
          <InputText prompt="Search" onSave={(inputValue) => {
            // Add logic to save inputValue to the database
            console.log(`Saved ${inputValue} to the database`);
            }}/>
          <ContentEntry title="Dance Video" desc="Dance Video Description" creator = "Person's name" thumbnailImg = "asdf" videoLink = "asdf"/>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      root: {
        width: 375,
        height: 812,
        flexShrink: 0,
        flex: 1, 
      },
    });
export default Favorites;