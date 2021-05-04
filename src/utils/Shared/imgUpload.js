export const beforeImageUpload = file => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  const messages = []
  const correctType = allowedTypes.includes(file.type)
  if (!correctType) {
    messages.push("image_type_error");
  }
  const correctSize = file.size / 1024**2 < 5

  if (!correctSize) {
    messages.push("image_size_error")
  }
  return [correctType && correctSize, messages];
}

export const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};