import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./compornents/atoms/button/PrimaryButton";
import { SecondaryButton } from "./compornents/atoms/button/SecondaryButton";
import { SearchInput } from "./compornents/molecules/SearchInput";
import { UserCard } from "./compornents/organisms/user/UserCard";
import { HeaderOnly } from "./compornents/templates/HeaderOnly";
import "./styles.css";

const user = {
  name: "Smile",
  image: "https://images.unsplash.com/photo-1580465446361-8aae5321522b",
  email: "aaaa@aaaa.com",
  phone: "030-3333-4444",
  company: {
    name: "テスト会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <HeaderOnly>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </HeaderOnly>
    </BrowserRouter>
  );
}
