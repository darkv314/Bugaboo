import { Title } from "./Title";
import { SocialIcons } from "./SocialIcons";

export default function Topbar() {
  return (
    <nav className="bg-dark w-full py-4 sm:px-72 backdrop-blur-md flex items-center justify-center md:justify-between">
      <Title />
      <div className="hidden md:block">
        <SocialIcons/>
      </div>
    </nav>
  );
}
