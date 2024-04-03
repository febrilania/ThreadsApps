import React, { useState, useEffect } from "react";
import { api } from "../../../libs/api";
import { Button } from "@chakra-ui/react";

interface FollowButtonProps {
  userId: number; // ID pengguna yang akan diikuti
}

const FollowButton: React.FC<FollowButtonProps> = ({ userId }) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  useEffect(() => {
    // Fetch data to check if the user is already following
    const checkFollowStatus = async () => {
      try {
        const response = await api.get(`/follow/check/${userId}`);
        setIsFollowing(response.data.isFollowing);
      } catch (error) {
        console.error("Error checking follow status:", error);
      }
    };

    checkFollowStatus();
  }, [userId]);

  const handleFollowToggle = async () => {
    try {
      if (isFollowing) {
        // Unfollow user
        await api.delete(`/unfollow/${userId}`);
        setIsFollowing(false); // Update status to false after successful unfollow
      } else {
        // Follow user
        await api.post("/follow", { following: userId });
        setIsFollowing(true); // Update status to true after successful follow
      }
    } catch (error) {
      console.error("Error toggling follow:", error);
    }
  };

  return (
    <Button
      borderRadius={20}
      background={"gray.400"}
      onClick={handleFollowToggle}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default FollowButton;
