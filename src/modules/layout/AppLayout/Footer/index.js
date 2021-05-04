import React from 'react'
import { Button, Col, Row, Space } from 'antd'
import { FacebookOutlined, GithubOutlined, TwitterOutlined, MailOutlined } from '@ant-design/icons'
import './index.css'


const Footer = () => {
    return (
        <div className="footer-container">

                <Row className="footer-info" justify='space-around'>
                    <Col span={6}>
                        <div className="footer-heading">COMPANY</div>
                        <div className="footer-info">Sweeft Digital</div>
                    </Col>
                    <Col span={6}>
                        <div className="footer-heading">CONTACT</div>
                        <div className="footer-info">
                            <div>
                            Vaniko
                            <br />
                                <Space size="middle">
                                    <a href="https://www.facebook.com/3bbwXScxJrDiKMZtvjVekA"><FacebookOutlined /></a>
                                    <a href="https://github.com/VanoAkofashvili"><GithubOutlined /></a>
                                    <a href="#"><MailOutlined /></a>
                                </Space>
                            </div>
                            <hr className="line"/>
                            <div>
                            Shota <small>(contributor)</small>
                            <br />
                                <Space size="middle">
                                    <a href="https://www.facebook.com/profile.php?id=100004930128285"><FacebookOutlined /></a>
                                    <a href="https://github.com/shotius"><GithubOutlined /></a>
                                    <a href="mailto:sh.archemashvili@gmail.com"><MailOutlined /></a>
                                </Space>
                            </div>
                        </div>
                       
                        {/* <div className="footer-info">Shota</div> */}
                    </Col>
                    <Col span={6}>
                        <div className="footer-heading">ADRESS</div>
                        <div className="footer-info">
                            <a href="https://www.google.com/maps/dir/41.7044819,44.8703534/41.7087161,44.7722134/@41.6965017,44.7519414,12z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0">
                                28 Ilia Chavchavadze Avenue, T'bilisi
                            </a>
                        </div>
                    </Col>
                    <Col span={24}>
                    <small>&#169;Copyright. Shota and Vaniko are contributors, 2021. All Rights reserved.</small>
                    </Col>
                </Row>
        </div>
    )
}
export default Footer