import { Button } from "antd";
export function BlockButton(props) {
  const { children, onClick } = props;
  return (
    <div className="w-full items-center flex flex-col">
      <div className="w-10/12">
        <Button type="primary" block shape="round" onClick={onClick}>
          {children}
        </Button>
      </div>
    </div>
  );
}

export function PrimaryButton(props) {
  const { children, onClick } = props;
  return (
    <Button type="primary" shape="round" onClick={onClick}>
      {children}
    </Button>
  );
}
