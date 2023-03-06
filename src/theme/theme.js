import {StyleSheet} from 'react-native';

const theme = {
  colors: {
    primary: '#007AFF',
    secondary: '#6D757D',
    background: '#F8F9FA',
    text: '#212529',
    success: '#28A745',
    error: '#DC3545',
  },
  fontSizes: {
    small: 14,
    medium: 16,
    large: 18,
  },
  fontWeights: {
    regular: '400',
    medium: '500',
    bold: '700',
  },
};

const commonStyles = StyleSheet.create({
  label: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: '#000',
    paddingHorizontal: 18,
    paddingVertical: 14,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: '#ECECEC',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#5398FF',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 24,
    marginTop: 68,
    width: '100%',
  },
});

export {theme, commonStyles};
