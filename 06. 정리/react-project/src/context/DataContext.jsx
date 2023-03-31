import { createContext, useState } from "react";

const UserContext = createContext({
  state: {
    user: null,
    comments: [{ id: 1, product: "책", user: "green", text: "좋습니다" }],
  },
  action: {
    setUser: () => {},
    addComment: (comment) => {
      this.state.comments.push({ id: 2, user: this.state.user, ...comment });
    },
  },
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([{ id: 1, product: "책", user: "green", text: "좋습니다" }]);
  const value = {
    state: { user, comments },
    action: { setUser, setComments },
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

//const UserConsumer = UserContext.Consumer
const { Consumer: UserContextConsumer } = UserContext;

export { UserContextProvider, UserContextConsumer };
export default UserContext;
