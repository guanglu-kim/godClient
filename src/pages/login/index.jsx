import { Input, Button, message } from "antd";
import { useRef, useState } from "react";
import { BlockButton, CountDownButton } from "../../components";
import { useModel, history } from "umi";
import api from "../../services/api";
export default () => {
  const [state, setState] = useState({ phone: ``, dp: `` });
  const ref = useRef();
  const { user, login } = useModel("global");
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <img
          src={require(`../../img/login/img.png`)}
          className="w-20 h-20 mb-4"
        />
        <div className="w-10/12 border-b border-Gray my-4">
          <Input
            bordered={false}
            placeholder="请输入您的手机号码"
            prefix={<span className="mr-2">+86</span>}
            onChange={(v) => {
              state.phone = v.target.value;
            }}
          />
        </div>
        <div className="w-10/12 border-b border-Gray my-4">
          <Input
            bordered={false}
            placeholder="请输入您的验证码"
            onChange={(v) => {
              state.dp = v.target.value;
            }}
            suffix={
              <CountDownButton
                ref={ref}
                onClick={async (countDown) => {
                  if (!state.phone) {
                    message.warn(`请输入手机号码`);
                    return;
                  }
                  await api.postUserDb({ data: { phone: state.phone } });
                  countDown();
                }}
              >
                发送验证码
              </CountDownButton>
            }
          />
        </div>
        <BlockButton
          onClick={async () => {
            const msg = await login(state.phone, state.dp);
            if (msg) {
              message.error(msg);
              return;
            }
            history.push(`/my`);
          }}
        >
          登录
        </BlockButton>
      </div>
    </>
  );
};
