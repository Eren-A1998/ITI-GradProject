import ImagePicker from 'react-native-image-crop-picker';

export default class ImagePickerUtility {
  static options = {
    maxWidth: 2000,
    maxHeight: 2000,
    cropping: true,
  };

  public static imageFromGallary() {
    return ImagePicker.openPicker(this.options);
  }

  public static imageFromCamera() {
    ImagePicker.openCamera(this.options)
      .then(image => {
        const source = {uri: image.path};
        return source;
      })
      .catch(e => {
      });
  }
}
