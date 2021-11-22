import { StyleSheet } from 'react-native'
import { Appearance } from '@utils'

export default StyleSheet.create({
  notif: {
    marginRight: 12
  },
  badge: {
    position: 'absolute',
    top: -6,
    left: 12,
    backgroundColor: Appearance.Colors.Badge,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    minWidth: 20
  },
  boxAsuransiImg: {
    height: 220,
    width: 425,
    paddingLeft: 10,
    paddingTop: 20,
    backgroundColor: '#ECEFF1',
    paddingBottom: 20
  },
  asuransiImgSize: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  boxStoryAgent: {
    height: 180,
    width: 97,
    paddingLeft: 10,
    marginTop: -45,
    // backgroundColor:'red',
    backgroundColor: '#2765d8',
    paddingBottom: 40,
    paddingTop: 40
  },
  imageStoryAgent: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  boxDotWrap: {
    width: '80%',
    height: 30,
    backgroundColor: '#ECEFF1',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  boxDotIcon: {
    height: '80%',
    width: '80%',
    // backgroundColor: 'pink',
    marginLeft: 10,
    paddingTop: 5
  },
  sizeDotIcon: {
    height: 10,
    width: '25%',
    // backgroundColor:'red',
    resizeMode: 'contain'
  },
  boxTextWrap: {
    width: '50%',
    height: 30,
    backgroundColor: '#ECEFF1',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  boxTextIcon: {
    height: '80%',
    width: '65%',
    backgroundColor: 'transparent',
    marginLeft: 10
  },
  sizeText: {
    height: 10,
    width: '50%',
    color: '#185ADB',
    backgroundColor: 'red',
    resizeMode: 'contain',
    fontWeight: 'bold'
  },
  boxSalam: {
    width: '100%',
    height: 75,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: -10,
    paddingLeft: 5
  },
  haloWrap: {
    width: '20%',
    height: '65%'
  },
  fontHalo: {
    fontSize: 28,
    width: '90%',
    height: '90%',
    paddingLeft: 20,
    paddingTop: 10,
    color: '#185ADB'
  },
  nameWrap: {
    width: '60%',
    marginLeft: -20,
    height: '65%'
  },
  fontName: {
    fontSize: 28,
    color: '#0032A8',
    width: '80%',
    height: '95%',
    paddingTop: 10,
    paddingLeft: 5,
    fontWeight: 'bold'
  },
  wrapBoxMenuAsuransi: {
    height: 400,
    width: '100%',
    backgroundColor: 'lightblue',
    resizeMode: 'cover'
  },
  bgPolisku: {
    height: 500,
    width: 500,
    backgroundColor: 'purple',
    resizeMode: 'contain',
    marginTop: -10,
    marginBottom: -150
  },
  bgBiru: {
    height: 900,
    width: 500,
    // backgroundColor: 'purple',
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: -150,
    tintColor: '#185ADB'
  },

  imgCategoryAsuransiJiwa: {
    height: 100,
    width: 160,
    marginTop: 5,
    marginLeft: 80,
    alignSelf: 'center',
    resizeMode: 'stretch'
  },
  boxAsuransiJiwa: {
    height: 115,
    width: '100%',
    flexDirection: 'row'
  },
  imgCategoryAsuransiMobil: {
    height: 100,
    width: 160,
    marginTop: 5,
    marginLeft: 25,
    alignSelf: 'center',
    resizeMode: 'stretch'
  },
  boxAsuransiMobil: {
    height: 190,
    width: '100%',
    flexDirection: 'row'
    // backgroundColor: 'magenta'
  },
  boxHeaderNews: {
    height: 80,
    width: '95%',
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingTop: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  tabPopuler: {
    height: '70%',
    paddingLeft: 300,
    paddingTop: 10,
    alignSelf: 'center',
    borderRadius: 20,
    width: '98%',
    backgroundColor: '#d1def8'
  },
  tabTerbaru: {
    backgroundColor: '#185ADB',
    borderRadius: 20,
    marginLeft: -295,
    width: 225,
    marginTop: -37,
    paddingTop: 5,
    paddingBottom: 5
  },
  nasabahCardBox: {
    backgroundColor: 'white',
    height: 70,
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingTop: 20
  },
  imgProfileNasabah: {
    height: 60,
    width: 60,
    alignSelf: 'center'
  },
  profilePhotoNasabahBox: {
    width: 100,
    paddingLeft: 25,
    height: '30%',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  fontNasabahProfile: {
    fontSize: 19,
    backgroundColor: 'white',
    width: 125,
    fontWeight: 'bold',
    marginTop: -15,
    marginLeft: -10
  },
  lastlogin: {
    fontSize: 14,
    backgroundColor: 'white',
    paddingTop: 2,
    width: 160,
    paddingLeft: 3,
    marginLeft: -10,
    color: '#bfbfbf'
  },
  boxStatusNasabah: {
    width: '95%',
    alignSelf: 'center',
    height: 65,
    backgroundColor: 'white',
    paddingTop: 10,
    marginTop: -10
  },
  postStatusNasabah: {
    fontSize: 18,
    backgroundColor: 'white',
    width: '80%',
    color: '#333f5b',
    height: 50,
    alignSelf: 'center',
    marginLeft: -40
  },
  boxHashTag: {
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    height: 20,
    paddingTop: 10
  },
  fontHashTag: {
    fontSize: 13,
    color: '#2D9BFA',
    // backgroundColor:'pink',
    width: 40,
    marginTop: -10,
    marginLeft: -20
  },
  fontHashTag2: {
    fontSize: 13,
    color: '#2D9BFA',
    // backgroundColor:'pink',
    width: 42,
    marginTop: -18,
    marginLeft: 20
  },
  boxFontHashTag: {
    // backgroundColor:'red',
    width: '80%',
    alignSelf: 'center',
    height: 30,
    paddingTop: 10,
    marginTop: -10
  },
  boxIcons: {
    backgroundColor: 'red',
    width: '95%',
    alignSelf: 'center',
    height: '100%',
    paddingTop: 10
  },
  
  boxLike: {
    backgroundColor: 'white',
    width: '40%',
    alignSelf: 'flex-start',
    height: '70%',
    paddingTop: 10,
    marginLeft: 30,
    flexDirection: 'row',
   
  },
  imgLike: {
    height: 18,
    width: 18,
    backgroundColor: 'white'
  },
  imgShare: {
    height: 18,
    width: 18,
    backgroundColor: 'white',
    marginLeft: 10
  },
  imgSeen: {
    height: 18,
    width: 18,
    backgroundColor: 'white',
    marginLeft: 10
  },
  fontLike: {
    fontSize: 17,
    backgroundColor: 'white',
    width: 30,
    paddingLeft: 5,
    color: '#185ADB'
  },
  fontShare: {
    fontSize: 17,
    backgroundColor: 'white',
    width: 40,
    paddingLeft: 5,
    color: 'black'
  },
  fontSeen: {
    fontSize: 17,
    backgroundColor: 'white',
    width: 40,
    paddingLeft: 5,
    color: 'black'
  },
  subBox2: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: '40%',
    marginTop: -40,
    height: '55%'
  },
  fontNumber: {
    fontSize: 17,
    backgroundColor: 'white',
    width: 30,
    paddingLeft: 5,
    color: '#185ADB'
  },
  fontComment: {
    fontSize: 17,
    backgroundColor: 'white',
    width: 110,
    paddingLeft: 5,
    color: '#185ADB'
  }
})
