import React, {useState} from "react"
import {useSelector} from "react-redux";
import {message, Form, Modal} from "antd";
import {useDispatch} from "react-redux";
import {addProduct, closeAddProductModal, editProduct, setNowEditing} from "../../../redux/actions/itemActions";
import {useHistory} from "react-router-dom";
import "./index.css"
import {beforeImageUpload} from "../../../utils/Shared/imgUpload";
import 'react-quill/dist/quill.snow.css';
import dompurify from "dompurify";
import {fetchProducts} from "../../../redux/actions/productsAction";
import ProductForm from "./ProductForm";

const sanitizer = dompurify.sanitize;


const initialImg = {
  uid: "-1",
  name: "no-img.png",
  status: "done",
  url: "https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png",
  thumbUrl: "https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png"
}

const AddProduct = () => {
  const [selectedImg, setSelectedImg] = useState([initialImg]);

  const [form] = Form.useForm();
  const history = useHistory();
  console.log(history, 'history')

  const dispatch = useDispatch();
  const {isModalOpen, addProductLoading, nowEditing} = useSelector(state => state.itemReducer);
  const userId = useSelector(state => state.authReducer.user.sub);

  const handleSubmit = () => {
    form
      .validateFields()
      .then(values => {
        const productInfo = {...values, description: sanitizer(values.description), userId,}
        if (nowEditing) {
          dispatch(editProduct(nowEditing.id, {...productInfo, image: nowEditing.image}));
          history.push("/temp")
          history.goBack()
        } else {
          const image = selectedImg[0].thumbUrl;
          dispatch(addProduct({...productInfo, image}))
            .then(() => {
              dispatch(fetchProducts());
            })
        }
        form.resetFields();
        dispatch(closeAddProductModal());
        setSelectedImg([initialImg])
      })
      .catch(error => {
        console.log(error, 'failed')
      })
  }

  const handleCancel = () => {
    dispatch(closeAddProductModal())
    dispatch(setNowEditing(null))
  }

  const handleImgChange = (info) => {
    let fileList = [...info.fileList]
    setSelectedImg(fileList);
  }

  const beforeImgUpload = (file) => {
    const [status, errors] = beforeImageUpload(file);
    errors.forEach(err => {
      message.error(err)
    })
    return status;
  }

  return <Modal
    title={nowEditing ? "Update product" : "Add a New Product"}
    visible={isModalOpen}
    onOk={handleSubmit}
    okText={nowEditing ? "Update" : "Add"}
    cancelText="Cancel"
    confirmLoading={addProductLoading}
    onCancel={handleCancel}
    width={"auto"}
    style={{maxWidth: "800px"}}
  >
    <ProductForm
      form={form}
      selectedImg={selectedImg}
      beforeImgUpload={beforeImgUpload}
      handleImgChange={handleImgChange}
      nowEditing={!!nowEditing}
    />
  </Modal>
}

export default AddProduct;