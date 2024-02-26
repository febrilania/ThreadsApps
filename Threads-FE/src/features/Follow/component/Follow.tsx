import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

const Follow: React.FC = () => {
  return (
    <>
      <Tabs isFitted>
        <TabList mb="1em">
          <Tab>Followers</Tab>
          <Tab>Followings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Followers!</p>
          </TabPanel>
          <TabPanel>
            <p>Followings!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
export default Follow;
