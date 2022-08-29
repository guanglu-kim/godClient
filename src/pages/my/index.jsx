import { BottomNav, PrimaryButton } from "../../components";
import MainLayout from "../../components/main_layout";
import styles from "./index.less";
import { Button, DatePicker } from "antd";
import { RightOutlined } from "@ant-design/icons";
import svgShare from "../../img/my/share.svg";
import svgRecharge from "../../img/my/recharge.svg";
import svgTrade from "../../img/my/trade.svg";
import svgNotice from "../../img/my/notice.svg";
import svgSetting from "../../img/my/setting.svg";
import svgService from "../../img/my/service.svg";
import { useModel, history } from "umi";

export default () => {
  const { user } = useModel(`user`);
  console.log(user);
  return (
    <MainLayout nav={<BottomNav />}>
      <div className="flex flex-col h-40 justify-end content-center bg-gradient-to-r from-primary">
        <div className="px-4 flex">
          <img src={require(`../../img/my/girl.png`)} className="h-20" />
          {user.isLogin ? (
            <div className="flex flex-col justify-center pl-4">
              <span className="text-white">{user.name}</span>
              <span className="text-white">{user.userId}</span>
            </div>
          ) : (
            <div className="flex items-center justify-center flex-1">
              <Button onClick={() => history.push(`./login`)}>立即登录</Button>
            </div>
          )}
        </div>
        <div className={styles.vip}>
          <div className="flex justify-between items-baseline p-1 px-4">
            <span className="text-gold">VIP权益畅享中</span>
            <PrimaryButton
              onClick={() => {
                if (user.isLogin) {
                  history.push(`/recharge`);
                } else {
                  history.push(`/login`);
                }
              }}
            >
              立即开通/续费
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div className="flex shadow-2xl mx-2 h-20 justify-around border border-Gray-200">
        <div className="flex flex-col justify-center  items-center">
          <span className="text-orange">{user.coin}</span>
          <span className="text-gray">书币</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-orange">{user.vip}天</span>
          <span className="text-gray">会员</span>
        </div>
      </div>
      <div className="mt-6">
        <TileButton img={svgShare} title={`分享豪礼`} />
        <TileButton img={svgRecharge} title={`充值中心`} />
        <TileButton img={svgTrade} title={`交易明细`} />
        <TileButton img={svgNotice} title={`消息公告`} />
        <TileButton img={svgSetting} title={`个性设置`} />
        <TileButton img={svgService} title={`联系客服`} />
      </div>
    </MainLayout>
  );
};

function TileButton({ img, title, onClick }) {
  return (
    <div className="flex px-4 my-6" onClick={onClick}>
      <img src={img} className="w-6 h-6" />
      <div className="flex-1 pl-4 font-medium">{title}</div>
      <div>
        <RightOutlined style={{ color: `gray` }} />{" "}
      </div>
    </div>
  );
}
