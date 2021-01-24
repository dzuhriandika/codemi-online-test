import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    width: 100 + '%',
  },
  header: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  smallAppLogo: {
    width: 40,
    height: 40,
  },
  titleHead: {
    color: 'black',
    fontSize: 30,
  },
  placeholder: {
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
  },
  input: {
    width: '90%',
    marginLeft: 12,
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
  },
  inputWrapper: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 22,
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
  },
  thumnail: {
    width: 100 + '%',
    height: 120,
    borderRadius: 8,
  },
  iconContainer: {
    backgroundColor: 'white',
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 160,
    justifyContent: 'center',
  },
  titleIcon: {
    marginTop: 10,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#29291E',
  },
  card: {
    marginTop: 10,
    marginRight: 46,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  iconBox: {
    width: 53,
    height: 53,
    borderRadius: 50,
    backgroundColor: 'transparent',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 15,
    width: 15,
  },
  cardMateri: {
    borderRadius: 10,
    marginBottom: 20,
    width: 288,
    backgroundColor: 'white',
    marginLeft: 8,
  },
  cardCabangToko: {
    borderRadius: 10,
    marginBottom: 20,
    width: 120,
    height: 113,
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 8,
  },
  itemCabangToko: {
    height: 85,
  },
  valueCabangToko: {
    backgroundColor: '#00A3E0',
    height: 30,
    width: 100 + '%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  thumnailMateri: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: 100 + '%',
    height: 97,
  },
  thumnailWrapper: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  titleMateri: {
    color: '#29291E',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
  titleThumnail: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    color: '#696868',
  },
  mb: {
    marginBottom: 50,
  },
});
