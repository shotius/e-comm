import {DeleteOutlined, EditOutlined, UserOutlined} from '@ant-design/icons'
import {Card, Input, Rate, Button, Form} from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React, {useState} from 'react'
import {deleteReview, updateReview} from '../../../../redux/actions/reviewsActions'

const Review = ({review, user, dispatch}) => {
  const [isEditing, setIsEditing] = useState(false)

  // toggles editable reviews mode
  const handleEdit = () =>
    setIsEditing(!isEditing)

  // removes review
  const handleRemove = () => {
    dispatch(deleteReview(review.id))
  }

  // create new review and dispatch change
  const onFinish = (values) => {
    const newReview = {
      ...review,
      ...values
    }

    setIsEditing(false)
    dispatch(updateReview(newReview))
  }

  return (
    <Card style={{marginBottom: 5}}>
      <div>
        <Avatar icon={<UserOutlined/>} style={{marginRight: 10}}/>
        <span>{user.email}</span>
        {/* if user is owner of the review edit and remove buttons will be shown */}
        {
          review.userId === user.sub
          &&
          <>
            <Button
              style={{border: 'none'}}
              onClick={handleEdit}>
              <EditOutlined/>
            </Button>
            <Button
              style={{border: 'none'}}
              onClick={handleRemove}>
              <DeleteOutlined/>
            </Button>
          </>
        }
      </div>
      {/* here are two cases, whether user is editing the review or not */}
      {
        isEditing
          ? (
            <Form
              onFinish={onFinish}
              initialValues={
                {
                  "review": review.review
                }
              }
            >
              <Form.Item name="stars">
                <Rate defaultValue={review.stars || 0}/>
              </Form.Item>
              <Form.Item name="review">
                <Input.TextArea
                  autoSize={true}
                  bordered={true}
                />
              </Form.Item>
              <Button type="primary" htmlType="submit">submit</Button>
            </Form>
          )
          : (
            <div>
              <Rate disabled defaultValue={review.stars || 0}/>
              <div>{review.review}</div>
            </div>
          )
      }
    </Card>
  )
}
export default Review