import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { CardFollows } from "./cardFollows";
import React from "react";
import { IFollowings, IFollows } from "../../../interface/Follows";
import { getFollower, getFollowing } from "../../../store/async/follows";
import { useAppDispatch, useAppSelector } from "../../../store/RootReducer";
import { CardFollowing } from "./CardFollowing";

const Follow: React.FC = () => {
  const followers = useAppSelector((state) => state.follower.initialFollower);
  const followings = useAppSelector(
    (state) => state.following.initialFollowing
  );

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getFollower());
    dispatch(getFollowing());
  }, []); // No need to include getFollower in dependency array

  console.log("ini followers", followers);
  console.log("ini data following di follow", followings);
  return (
    <Tabs isFitted>
      <TabList mb="1em">
        <Tab>Followers</Tab>
        <Tab>Followings</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {followers ? (
            Array.isArray(followers) ? (
              followers.map((data: IFollows) => (
                <CardFollows
                  key={data.id} // Ensure each CardFollows component has a unique key prop
                  data={data}
                  userId={data.follower.id}
                />
              ))
            ) : (
              <p>Loading followers...</p>
            )
          ) : (
            <p>No follower...</p>
          )}
        </TabPanel>
        <TabPanel>
          {followings ? (
            Array.isArray(followings) ? (
              followings.map((data: IFollowings) => (
                <CardFollowing
                  key={data.id}
                  data={data}
                  userId={data.following.id}
                />
              ))
            ) : (
              <p>Loading followings...</p>
            )
          ) : (
            <p>No followings...</p>
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Follow;
