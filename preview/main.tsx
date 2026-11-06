import { createRoot } from "react-dom/client";
import UiButton from "../components/UiButton";
import UiSwitch from "../components/UiSwitch";
import UiTag from "../components/UiTag";
import "./preview.css";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Missing #root");
}

createRoot(root).render(
  <main>
    <header>
      <p>eslink-react</p>
      <h1>UiButton、UiTag、UiSwitch</h1>
    </header>

    <section>
      <h2>UiButton</h2>
      <div className="row">
        <UiButton label="主要按钮" type="primary" />
        <UiButton label="默认" type="default" />
        <UiButton label="成功" type="success" />
        <UiButton label="警告" type="warning" />
        <UiButton label="危险" type="danger" />
        <UiButton label="朴素" type="primary" plain />
        <UiButton label="文字" type="primary" text />
        <UiButton label="链接" type="primary" link />
        <UiButton label="加载中" type="primary" loading />
        <UiButton label="禁用" type="primary" disabled />
      </div>
    </section>

    <section>
      <h2>UiTag</h2>
      <div className="row">
        <UiTag label="默认" />
        <UiTag label="主要" color="primary" />
        <UiTag label="成功" color="success" variant="solid" />
        <UiTag label="描边" color="warning" variant="outlined" />
        <UiTag label="可关闭" color="danger" closable />
        <UiTag label="禁用" color="info" disabled />
      </div>
    </section>

    <section>
      <h2>UiSwitch</h2>
      <div className="row">
        <UiSwitch />
        <UiSwitch inactiveText="关" activeText="开" />
        <UiSwitch size="large" inlinePrompt activeText="ON" inactiveText="OFF" />
        <UiSwitch size="small" disabled />
      </div>
    </section>
  </main>,
);
