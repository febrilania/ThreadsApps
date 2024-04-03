// import React from "react";
// import FormSearch from "../features/Search/component/FormSearch";
// import ResultSearch from "../features/Search/component/ResultSearch";
// import Layout from "../layout/Layout";
// import { useAppDispatch, useAppSelector } from "../store/RootReducer";
// import { getUsers } from "../store/async/users";
// import { Iuser } from "../interface/Auth";

// const Search: React.FC = () => {
//   const users = useAppSelector((state) => state.users.initialUsers);
//   const dispatch = useAppDispatch();
//   React.useEffect(() => {
//     dispatch(getUsers());
//   }, []);
//   console.log("ini users", users);
//   return (
//     <>
//       <Layout>
//         <FormSearch />
//         {users.map(
//           (
//             user: Iuser // Map setiap user dan berikan properti id
//           ) => (
//             <ResultSearch key={user.id} {...user} />
//           )
//         )}
//       </Layout>
//     </>
//   );
// };
// export default Search;
import React, { useState, useEffect } from "react";
import FormSearch from "../features/Search/component/FormSearch";
import ResultSearch from "../features/Search/component/ResultSearch";
import Layout from "../layout/Layout";
import { useAppDispatch, useAppSelector } from "../store/RootReducer";
import { getUsers } from "../store/async/users";
import { Iuser } from "../interface/Auth";

const Search: React.FC = () => {
  const users = useAppSelector((state) => state.users.initialUsers);
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState<string>(""); // State untuk menyimpan nilai pencarian

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // Fungsi untuk menyaring pengguna berdasarkan pencarian
  // const filteredUsers = users.filter((user) =>
  //   (user.full_name?.toLowerCase() || "").includes(searchTerm.toLowerCase())
  // );
  const filteredUsers = searchTerm
    ? users.filter(
        (user) =>
          user.full_name &&
          user.full_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  console.log("ini users", users);

  return (
    <>
      <Layout>
        <FormSearch setSearchTerm={setSearchTerm} />{" "}
        {/* Mengirimkan setSearchTerm ke komponen FormSearch */}
        {filteredUsers.map((user: Iuser) => (
          <ResultSearch key={user.id} {...user} />
        ))}
      </Layout>
    </>
  );
};
export default Search;
