import { BottomNav } from "../components";
import MainLayout from "../components/main_layout";

export default () => {
  return <MainLayout nav={<BottomNav />}>内容</MainLayout>;
};
