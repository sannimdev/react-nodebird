import React from "react";
import PropTypes from "prop-types";
import Link from "next/Link";
import { Menu, Input, Button, Row, Col, Card, Avatar } from "antd";

const dummy = {
  nickname: "inegg",
  Post: [],
  Followings: [],
  Follwers: []
};

const AppLayout = ({ children }) => {
  return (
    <>
      <div>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <Link href="/">
              <a>NodeBird</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="profile">
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="mail">
            <Input.Search enterButton style={{ verticalAlign: "middle" }} />
          </Menu.Item>
          <Button>
            <Link href="/signup">
              <a>Sign up</a>
            </Link>
          </Button>
        </Menu>
        <Row>
          {/* xs:모바일 , sm: 작은화면, md:중간화면, lg:큰 화면 */}
          <Col xs={8} md={6}>
            <Card
              actions={[
                <div key="twit">
                  Posts
                  <br />
                  {dummy.Post.length}
                </div>,
                <div key="following">
                  Followings
                  <br />
                  {dummy.Followings.length}
                </div>,
                <div key="follower">
                  Followers
                  <br />
                  {dummy.Follwers.length}
                </div>
              ]}
            >
              <Card.Meta avatar={<Avatar>{dummy.nickname[0]}</Avatar>} title={dummy.nickname} />
            </Card>
          </Col>
          <Col xs={8} md={12}>
            {children}
          </Col>
          <Col xs={8} md={6}>
            3rd
          </Col>
        </Row>
      </div>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node
};

export default AppLayout;
