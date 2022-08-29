import { useRequest } from "ahooks";
import { useState } from "react";
import { BackTitle, BlockButton } from "../../components";
import api from "../../services/api";
import { Skeleton } from "antd";

export default () => {
  // hooks
  const [state, setState] = useState({ type: `coin`, index: 0 });
  const { data, loading } = useRequest(api.getSettingCateSuit);

  return (
    <div>
      <BackTitle>充值</BackTitle>
      <img src={require(`../../img/recharge/top.jpg`)} />

      <Skeleton active={true} loading={loading}>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-4">
            {data?.result.coins.map((item, index) => (
              <SuitItem
                key={index}
                {...item}
                selected={state.type === `coin` && index === state.index}
                onClick={() => setState({ ...state, type: `coin`, index })}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {data?.result.vips.map((item, index) => (
              <SuitItem
                key={index}
                {...item}
                selected={state.type === `vip` && index === state.index}
                onClick={() => setState({ ...state, type: `vip`, index })}
              />
            ))}
          </div>
        </div>
      </Skeleton>

      <BlockButton
        onClick={async () => {
          const ret = await api.postKey({ pre: `or` });
          const id = ret.result.code;
          const obj = {
            orderId: id,
          };
          let item = undefined;
          if (state.type === `coin`) {
            item = data.result.coins[state.index];
            obj.title = `充值${item.price}元价值${item.value}币`;
          } else if (state.type === `vip`) {
            item = data.result.vips[state.index];
            obj.title = `充值${item.price}元价值${item.value}天vip`;
          }
          obj.money = item.price;
          obj.type = state.type;
          obj.value = item.value;
          obj.payType = `alipay`;
          obj.reward = `none`;
          const result = await api.postOrderById({ data: obj, id });
          window.open(result.result.url);
        }}
      >
        立即开通
      </BlockButton>
      <div className="flex justify-center mt-4">
        <span className="font-bold">购买既视为同意</span>
        <span className="text-primary">《涩漫坊VPI会员用户协议》</span>
      </div>
    </div>
  );
};

function SuitItem(props) {
  const { price, value, origin, desc, onClick, selected } = props;
  let style = `flex flex-col justify-center rounded border-primary border items-center ring-2 ring-primary ring-opacity-40 py-2 `;
  if (selected) style += `bg-primary`;
  return (
    <div className={style} onClick={onClick}>
      <div>
        <span>￥</span>
        <span className="text-3xl font-bold">{price}</span>
      </div>

      <span className="line-through text-gray-500">￥{origin}</span>
      <span className="text-gray-600 text-xs">{desc}</span>
    </div>
  );
}
