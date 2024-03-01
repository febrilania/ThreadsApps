import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { CardFollows } from "./cardFollows";
import { useFollows } from "../hooks/useFollows";
import { useSelector } from "react-redux";
import { rootState } from "../../../store/types/RootState";
import React from "react";
import { IFollows } from "../../../interface/Follows";

const Follow: React.FC = () => {
  const { getFollower } = useFollows();
  const followers = useSelector(
    (state: rootState) => state.follower.initialFollower
  );

  console.log(followers);

  React.useEffect(() => {
    getFollower();
  }, []);

  return (
    <>
      <Tabs isFitted>
        <TabList mb="1em">
          <Tab>Followers</Tab>
          <Tab>Followings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {followers.map((data: IFollows) => {
              return (
                <>
                  <CardFollows
                    id={data.id}
                    user_id={data.user_id}
                    username={data.username}
                    full_name={data.full_name}
                    email={data.email}
                    profile_picture={data.profile_picture}
                    bio={data.bio}
                    is_followed={data.is_followed}
                  />
                </>
              );
            })}
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
