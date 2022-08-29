import { LeftOutlined } from "@ant-design/icons";

export default (props) => {
  const { children } = props;
  return (
    <div className="h-10 text-center leading-10 relative text-lg">
      {children}
      <LeftOutlined className="left-3 top-3 absolute" onClick={()=>history.back()} />
    </div>
  );
};
