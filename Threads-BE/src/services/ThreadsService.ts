import { promises } from "dns";
import { Threads } from "../entities/Threads";
import { threadId } from "worker_threads";
import { error } from "console";

const ThreadsData = [
  {
    id: 1,
    content: "halo bang, udah makan belum",
    image: "ubing.jpg",
    user: {
      id: 111,
      username: "ubing",
      name: "febrilania",
      profile_picture: "",
    },
    created_at: "7-2-1999",
    likes: 1004,
    replies: 8,
    islike: true,
  },
  {
    id: 2,
    content: "anjay gurinjay kura kura ninjay",
    image: "kura kura.jpg",
    user: {
      id: 112,
      username: "grutul",
      name: "Diaza lania",
      profile_picture: "",
    },
    created_at: "17-9-1912",
    likes: 1123,
    replies: 123,
    islike: true,
  },

  {
    id: 3,
    content: "cilok goreng, tahu pletok",
    image: "cilok.jpg",
    user: {
      id: 113,
      username: "kentung",
      name: "Renova Lania",
      profile_picture: "opop.jpg",
    },
    created_at: "17-9-1929",
    likes: 1143,
    replies: 124,
    islike: true,
  },
];

export default new (class ThreadsService {
  async getAllData(): Promise<any[]> {
    return ThreadsData;
  }

  async getOneThreads(threadId: number): Promise<any> {
    const thread = ThreadsData.find((thread) => thread.id === threadId);
    if (!thread) {
      throw new error("threads not found");
    }
    return thread;
  }
})();
