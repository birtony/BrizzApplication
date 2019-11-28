import { createSwitchNavigator } from "react-navigation";
import Login from "./screens/login/Screen";
import Signup from "./screens/signup/Screen";
import RegisterTwo from "./screens/signup/RegisterTwo";
import RegisterThree from "./screens/signup/RegisterThree";
import FinalRegistration from "./screens/signup/FinalRegistration";
import ProgramsMatched from "./screens/programsMatched/Screen";
import UserProfile from "./screens/profile/Screen";
import ProgramDetails from "./screens/programDetails/Screen";

export default navigator = createSwitchNavigator({
  Login,
  Signup,
  RegisterTwo,
  RegisterThree,
  FinalRegistration,
  ProgramsMatched,
  UserProfile,
  ProgramDetails
});
