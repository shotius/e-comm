import {DeleteOutlined, EditOutlined, UserOutlined} from '@ant-design/icons'
import {Card, Input, Rate, Button, Form} from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'
import { deleteReview, updateReview, toggleEditMode } from '../../../../redux/actions/reviewsActions'

const Review = ({review, reviewAuthor,  user, dispatch}) => {
  
  // toggles editable reviews mode
    const handleEdit = () => 
        dispatch(toggleEditMode(review))

    // removes review
    const handleRemove = () => 
        dispatch(deleteReview(review.id))
    

    // udpate review and dispatch change
    const onFinish = (values) => {
        const newReview = {
            ...review,
            ...values,
        }
        dispatch(updateReview(newReview))
    }

  return (
    <Card style={{marginBottom: 5}}>
      <div>
        <Avatar icon={<UserOutlined/>} style={{marginRight: 10}}/>
        <span>{reviewAuthor.email}</span>
        {/* if user is owner of the review edit and remove buttons will be shown */}
        {
          reviewAuthor.sub === user.sub
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
      {/* here are two modes, user is editing or not */}
      {
        review.isEditing
            ? (
                <Form
                    onFinish={onFinish}
                    initialValues={
                        {
                            "review": review.review,
                            "stars":  review.stars
                        }
                    }
                >
                    <Form.Item name="stars">
                        <Rate />
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
                    {/* {console.log(review)} */}
                    <Rate disabled defaultValue={review.stars}/>
                    <div>{review.review}</div>
                </div>
            )
    }
    </Card>
  )
}
export default Review