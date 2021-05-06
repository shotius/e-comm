import React from 'react'
import { Col, Row, Space } from 'antd'
import { FacebookOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons'
import './index.css'


const Footer = () => {
    return (

            <Row className="footer-container" justify='space-around'>
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
                                <a href="https://www.facebook.com/3bbwXScxJrDiKMZtvjVekA"><FacebookOutlined className="icon-contact"/></a>
                                <a href="https://github.com/VanoAkofashvili"><GithubOutlined className="icon-contact"/></a>
                                <a href="mailto:vanikoakofa@gmail.com"><MailOutlined className="icon-contact"/></a>
                            </Space>

                        </div>
                        <hr className="line"/>
                        <div>
                        Shota <small>(contributor)</small>
                        <br />
                            <Space size="middle">
                                <a href="https://www.facebook.com/profile.php?id=100004930128285"><FacebookOutlined className="icon-contact"/></a>
                                <a href="https://github.com/shotius"><GithubOutlined className="icon-contact"/></a>
                                <a href="mailto:sh.archemashvili@gmail.com"><MailOutlined className="icon-contact"/></a>
                            </Space>
                        </div>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="footer-heading">ADRESS</div>
                    <div className="footer-info">
                        <a href="https://www.google.com/maps/dir/41.7044819,44.8703534/41.7087161,44.7722134/@41.6965017,44.7519414,12z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0">
                            30 Ilia Chavchavadze Avenue, T'bilisi
                        </a>
                    </div>
                    <div style={{textAlign: "center"}}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.539068812983!2d44.76947221543023!3d41.708885179236056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440ccd351d8e19%3A0xab04dee462b58908!2s30%20Ilia%20Chavchavadze%20Avenue%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1620316064926!5m2!1sen!2sge" 
                        className="google-maps"
                        title="map" >
                    </iframe>
                    </div>
                </Col>
                <Col span={24} >
                  <small className="footer-info">&#169;Copyright. Shota and Vaniko are contributors, 2021. All Rights reserved.</small>
                </Col>
            </Row>
    )
}
export default Footer