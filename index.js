import React, { Component } from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Material from 'react-native-vector-icons/MaterialIcons'

import { Container, Text, Header } from '@components'
import { Appearance, ConnectApplication } from '@utils'

import styles from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { ImageBackground } from 'react-native'

const bannerImageFlatList = [
  {
    id: 1,
    Image: require('../../assets/images/banner_flatlist/imgBanner3.png')
  },
  {
    id: 2,
    Image: require('../../assets/images/banner_flatlist/imgBanner2.png')
  },
  {
    id: 3,
    Image: require('../../assets/images/banner_flatlist/imgBanner3.png')
  }
]
const storyAgent = [
  {
    id: 4,
    name: 'Maren Dias',
    Image: require('../../assets/images/imgStoryAgent/dias.png')
  },
  {
    id: 5,
    name: 'Amalia Okta',
    Image: require('../../assets/images/imgStoryAgent/amalia.png')
  },
  {
    id: 6,
    name: 'cheyenne...',
    Image: require('../../assets/images/imgStoryAgent/chey.png')
  },
  {
    id: 7,
    name: 'Madelyn...',
    Image: require('../../assets/images/imgStoryAgent/Madelyn.png')
  },
  {
    id: 8,
    name: 'James Her...',
    Image: require('../../assets/images/imgStoryAgent/James.png')
  },
  {
    id: 9,
    name: 'Sherly For...',
    Image: require('../../assets/images/imgStoryAgent/Sherly.png')
  },
  {
    id: 10,
    name: 'Asepudin...',
    Image: require('../../assets/images/imgStoryAgent/asepudin.png')
  }
]
class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const renderBannerImageFlatList = ({ item }) => (
      <View style={styles.boxAsuransiImg}>
        <Image style={styles.asuransiImgSize} source={item.Image} />
      </View>
    )
    const renderStoryAgent = ({ item }) => (
      <View style={styles.boxStoryAgent}>
        <Image style={styles.imageStoryAgent} source={item.Image} />
      </View>
    )
    return (
      <ScrollView>
        <Container>
          <Header
            logoHeader
            backButton={false}
            rightIcon={() => (
              <>
                <TouchableWithoutFeedback onPress={this.openNotification}>
                  <View style={styles.notif}>
                    <Ionicons
                      name={'notifications'}
                      size={24}
                      color={Appearance.Colors.Primary}
                    />
                    <View style={styles.badge}>
                      <Text fontSize={8} color={'White'}>
                        100+
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
                <Material
                  name={'account-circle'}
                  size={24}
                  color={Appearance.Colors.Primary}
                  onPress={this.openProfile}
                />
              </>
            )}
          />
          <View>
            <View>
              <FlatList
                data={bannerImageFlatList}
                renderItem={renderBannerImageFlatList}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={styles.boxDotText}>
            <View style={styles.boxDotWrap}>
              <View style={styles.boxDotIcon}>
                <Image
                  style={styles.sizeDotIcon}
                  source={require('../../../app/assets/images/banner_flatlist/dotIcon.png')}
                />
              </View>
              <View style={styles.boxTextWrap}>
                <View style={styles.boxTextIcon}>
                  <Text semi color={'Accent'}>
                    Lihat semua
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <ImageBackground
                style={styles.bgPolisku}
                source={require('../../assets/images/BackgroundImagePolisku/bgPoliskuMenu.png')}>
                <View style={styles.boxSalam}>
                  <View style={styles.haloWrap}>
                    <Text style={styles.fontHalo}>Halo,</Text>
                  </View>
                  <View style={styles.nameWrap}>
                    <Text style={styles.fontName}>Randy Saputra</Text>
                  </View>
                </View>
                <View style={styles.boxAsuransiJiwa}>
                  <TouchableOpacity>
                    <Image
                      style={styles.imgCategoryAsuransiJiwa}
                      source={require('../../assets/images/categoryAsuransi/asuransiJiwa.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={styles.imgCategoryAsuransiMobil}
                      source={require('../../assets/images/categoryAsuransi/penyakitKritis.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.boxAsuransiJiwa}>
                  <TouchableOpacity>
                    <Image
                      style={styles.imgCategoryAsuransiJiwa}
                      source={require('../../assets/images/categoryAsuransi/asuransiMobil.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={styles.imgCategoryAsuransiMobil}
                      source={require('../../assets/images/categoryAsuransi/asuransiKendaraan.png')}
                    />
                  </TouchableOpacity>
                </View>
                <ImageBackground
                  style={styles.bgBiru}
                  source={require('../../assets/images/BackgroundImagePolisku/backgroundBiru.png')}
                />
              </ImageBackground>
              <View>
                <FlatList
                  data={storyAgent}
                  renderItem={renderStoryAgent}
                  keyExtractor={(item) => item.id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
            <View style={styles.boxHeaderNews}>
              <View style={styles.tabPopuler}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: '#185ADB'
                  }}>
                  Populer
                </Text>
                <View style={styles.tabTerbaru}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center'
                    }}>
                    Terbaru
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.nasabahCardBox}>
              <View style={styles.profilePhotoNasabahBox}>
                <Image
                  style={styles.imgProfileNasabah}
                  source={require('../../assets/images/nasabahProfile/nasabah.png')}
                />
              </View>
              <View>
                <Text style={styles.fontNasabahProfile}>Talan Aminoff</Text>
                <Text style={styles.lastlogin}>3 menit yang lalu</Text>
              </View>
            </View>
            <View style={styles.boxStatusNasabah}>
              <Text style={styles.postStatusNasabah}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
            <View style={styles.boxHashTag}>
              <View style={styles.boxFontHashTag}>
                <Text style={styles.fontHashTag}>#AIA</Text>
                <View>
                  <Text style={styles.fontHashTag2}>#Claim</Text>
                </View>
              </View>
            </View>
            <View style={styles.boxIcons}>
              <View style={styles.subBoxIcon}>
                <View style={styles.boxLike}>
                  <Image
                    style={styles.imgLike}
                    source={require('../../assets/images/imageIcons/likeOn.png')}
                  />
                  <Text style={styles.fontLike}>20</Text>
                  <Image
                    style={styles.imgShare}
                    source={require('../../assets/images/imageIcons/share.png')}
                  />
                  <Text style={styles.fontShare}>126</Text>
                  <Image
                    style={styles.imgSeen}
                    source={require('../../assets/images/imageIcons/seen.png')}
                  />
                  <Text style={styles.fontSeen}>129</Text>
                </View>
                <View style={styles.subBox2}>
                  <Image
                    style={styles.imgLike}
                    source={require('../../assets/images/imageIcons/comment.png')}
                  />
                  <Text style={styles.fontNumber}>57</Text>
                  <Text style={styles.fontComment}>Komentar</Text>
                </View>
              </View>
            </View>
            <View style={styles.nasabahCardBox}>
              <View style={styles.profilePhotoNasabahBox}>
                <Image
                  style={styles.imgProfileNasabah}
                  source={require('../../assets/images/nasabahProfile/nasabah.png')}
                />
              </View>
              <View>
                <Text style={styles.fontNasabahProfile}>Talan Aminoff</Text>
                <Text style={styles.lastlogin}>3 menit yang lalu</Text>
              </View>
            </View>
            <View style={styles.boxStatusNasabah}>
              <Text style={styles.postStatusNasabah}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
            <View style={styles.boxHashTag}>
              <View style={styles.boxFontHashTag}>
                <Text style={styles.fontHashTag}>#AIA</Text>
                <View>
                  <Text style={styles.fontHashTag2}>#Claim</Text>
                </View>
              </View>
            </View>
            <View style={styles.boxIcons}>
              <View style={styles.subBoxIcons}>
                <View style={styles.boxLike}>
                  <Image
                    style={styles.imgLike}
                    source={require('../../assets/images/imageIcons/likeOn.png')}
                  />
                  <Text style={styles.fontLike}>20</Text>
                  <Image
                    style={styles.imgShare}
                    source={require('../../assets/images/imageIcons/share.png')}
                  />
                  <Text style={styles.fontShare}>126</Text>
                  <Image
                    style={styles.imgSeen}
                    source={require('../../assets/images/imageIcons/seen.png')}
                  />
                  <Text style={styles.fontSeen}>129</Text>
                </View>
                <View style={styles.subBox2}>
                  <Image
                    style={styles.imgLike}
                    source={require('../../assets/images/imageIcons/comment.png')}
                  />
                  <Text style={styles.fontNumber}>57</Text>
                  <Text style={styles.fontComment}>Komentar</Text>
                </View>
              </View>
            </View>
          </View>
        </Container>
      </ScrollView>
    )
  }
}

export default ConnectApplication(true, (store) => {
  return { authData: store.authData }
})(Home)
