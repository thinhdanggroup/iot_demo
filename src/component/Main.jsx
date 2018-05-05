import React, { Component } from 'react';
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Row,
  Col,
  Button,
  Collapse,
} from 'antd';



const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


class Main extends React.Component {

  constructor() {
    super();
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
    this.callback = this.callback.bind(this);
  }

  callback(key) {
    console.log(key);
  }

  render() {
    const size = 'small';
    const Panel = Collapse.Panel;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        {/* <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
          </Menu>
        </Sider> */}
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}> <h1 style={{ textAlign: "center" }} >  IOT APP </h1></Header>
          <Content style={{ margin: '20px 16px' }}>
            <Row style={{ marginTop: '3px', marginBottom: '3px' }} >
              <Col span={3}></Col>
              <Col span={6}>Hệ thống</Col>
              <Col span={3}>
                <Button type="primary">Toggle</Button>
              </Col>
              <Col span={3}>  </Col>
              <Col span={6}> Trạng thái</Col>
              <Col span={3}> status </Col>
            </Row>

            <Row style={{ marginTop: '3px', marginBottom: '3px' }}>
              <Col span={3}></Col>
              <Col span={6}>Cửa</Col>
              <Col span={3}>
                <Button type="primary">Toggle</Button>
              </Col>
              <Col span={3}>  </Col>
              <Col span={6}> Trạng thái</Col>
              <Col span={3}> status </Col>
            </Row>

            <Row style={{ marginTop: '3px', marginBottom: '3px' }}>
              <Col span={3}></Col>
              <Col span={6}>Nâng kính</Col>
              <Col span={3}>
                <Row >
                  <Col span={12}>
                    <Button type="primary">Up</Button>
                  </Col>
                  <Col span={12}>
                    <Button type="primary">Down</Button>
                  </Col>
                </Row>
              </Col>
              <Col span={3}>  </Col>
              <Col span={6}> Trạng thái</Col>
              <Col span={3}> status </Col>
            </Row>
            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{
              margin: "20px"
            }}>
              < Panel header="Camera" key="0" >
                <p>Link stream camera</p>
              </Panel>
            </Collapse>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018
          </Footer>
        </Layout>
      </Layout >
    );
  }
}
export default Main;