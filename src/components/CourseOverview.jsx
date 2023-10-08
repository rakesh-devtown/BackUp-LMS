import { Layout, Breadcrumb, Card, Tabs, List, Typography, Button, Collapse } from 'antd';

const { Content, Sider } = Layout;
const { TabPane } = Tabs;
const { Item } = List;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

function CourseOverview() {
  return (
    <Layout>
      <Sider width={200}>
        {/* Add navigation or sidebar content here */}
      </Sider>
      <Content style={{ padding: '20px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {/* Add breadcrumb items here */}
        </Breadcrumb>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Week 1" key="1">
            <Card>
              <Title>Week 1: Introduction</Title>
              <Paragraph>Overview of the course content for Week 1.</Paragraph>
              <List
                dataSource={['Topic 1', 'Topic 2', 'Topic 3']}
                renderItem={item => (
                  <Item>
                    <Button type="link">{item}</Button>
                  </Item>
                )}
              />
            </Card>
          </TabPane>
          {/* Add more TabPanels for each week/day */}
        </Tabs>
      </Content>
    </Layout>
  );
}

export default CourseOverview;
