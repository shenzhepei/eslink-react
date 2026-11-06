import { useState } from "react";
import { defineProperties } from "figma:react";

/**
 * Figma Sites code layer for UiSwitch.
 * checked uses a setter so a bound Figma variable stays in sync.
 * size: default | large | small
 */
const styles = `.ui-switch {
  --ui-switch-on-color: var(--primary-default, #0088ac);
  --ui-switch-off-color: var(--form-normal-default-border, #d0d0d0);

  position: relative;
  display: inline-flex;
  align-items: center;
  height: 32px;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
}

.ui-switch.is-disabled {
  --ui-switch-on-color: var(--ui-disabled-border-color, var(--form-normal-disable-border, #d0d0d0));
  --ui-switch-off-color: var(--ui-disabled-border-color, var(--form-normal-disable-border, #d0d0d0));
}

.ui-switch__label {
  display: inline-block;
  height: 20px;
  color: var(--form-normal-default-text, #0d142d);
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
  cursor: pointer;
  transition: color 0.2s;
}

.ui-switch__label.is-active {
  color: var(--ui-switch-on-color);
}

.ui-switch__label--left {
  margin-right: 10px;
}

.ui-switch__label--right {
  margin-left: 10px;
}

.ui-switch__core {
  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  min-width: 40px;
  height: 20px;
  padding: 0;
  cursor: pointer;
  background: var(--ui-switch-off-color);
  border: 1px solid var(--ui-switch-off-color);
  border-radius: 10px;
  outline: none;
  transition: border-color 0.2s, background-color 0.2s;
}

.ui-switch.is-checked .ui-switch__core {
  background: var(--ui-switch-on-color);
  border-color: var(--ui-switch-on-color);
}

.ui-switch__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 16px;
  padding: 0 4px 0 18px;
  overflow: hidden;
  transition: all 0.2s;
}

.ui-switch.is-checked .ui-switch__inner {
  padding: 0 18px 0 4px;
}

.ui-switch__inner-wrapper {
  display: flex;
  align-items: center;
  overflow: hidden;
  color: var(--fill-white, #ffffff);
  font-size: 12px;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select: none;
}

.ui-switch__action {
  position: absolute;
  top: 50%;
  left: 1px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: var(--ui-switch-off-color);
  background: var(--fill-white, #ffffff);
  border-radius: 50%;
  transform: translateY(-50%);
  transition: left 0.2s, color 0.2s;
}

.ui-switch__core > [data-slot="switch-thumb"] {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.ui-switch.is-checked .ui-switch__action {
  left: calc(100% - 17px);
  color: var(--ui-switch-on-color);
}

.ui-switch.is-disabled .ui-switch__core,
.ui-switch.is-disabled .ui-switch__label {
  cursor: not-allowed;
}

.ui-switch.is-disabled .ui-switch__label {
  color: var(--ui-disabled-text-color, var(--form-normal-disable-text, rgba(13, 20, 45, 0.25)));
}

.ui-switch.is-disabled .ui-switch__action {
  background: var(--ui-disabled-bg-color, var(--form-normal-disable-background, #dfdfdf));
  color: var(--ui-disabled-text-color, var(--form-normal-disable-text, rgba(13, 20, 45, 0.25)));
}

.ui-switch--large {
  height: 40px;
  line-height: 24px;
}

.ui-switch--large .ui-switch__core {
  min-width: 50px;
  height: 24px;
  border-radius: 12px;
}

.ui-switch--large .ui-switch__action {
  width: 20px;
  height: 20px;
}

.ui-switch--large.is-checked .ui-switch__action {
  left: calc(100% - 21px);
}

.ui-switch--small {
  height: 24px;
  font-size: 12px;
  line-height: 16px;
}

.ui-switch--small .ui-switch__core {
  min-width: 30px;
  height: 16px;
  border-radius: 8px;
}

.ui-switch--small .ui-switch__action {
  width: 12px;
  height: 12px;
}

.ui-switch--small.is-checked .ui-switch__action {
  left: calc(100% - 13px);
}

.ui-switch__action svg {
  width: 12px;
  height: 12px;
}

.ui-switch__spinner {
  width: 12px;
  height: 12px;
  animation: ui-switch-spin 0.8s linear infinite;
}
@keyframes ui-switch-spin {
  to { transform: rotate(360deg); }
}

.ui-switch__core {
  appearance: none;
  -webkit-appearance: none;
  font: inherit;
  color: inherit;
}
.ui-switch__core:disabled {
  opacity: 1;
}
`;

function Spinner() {
  return (
    <svg className="ui-switch__spinner" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <path d="M12 3a9 9 0 0 1 9 9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function UiSwitch({
  checked = false,
  setChecked,
  disabled = false,
  loading = false,
  size = "default",
  activeText = "",
  inactiveText = "",
  inlinePrompt = false,
  width = 0,
}: {
  checked?: boolean;
  setChecked?: (next: boolean) => void;
  disabled?: boolean;
  loading?: boolean;
  size?: string;
  activeText?: string;
  inactiveText?: string;
  inlinePrompt?: boolean;
  width?: number;
}) {
  const [uncontrolled, setUncontrolled] = useState(checked);
  const value = setChecked ? checked : uncontrolled;
  const switchDisabled = disabled || loading;
  const sizeClass = size === "large" || size === "small" ? `ui-switch--${size}` : "";

  const toggle = () => {
    if (switchDisabled) return;
    const next = !value;
    if (setChecked) setChecked(next);
    else setUncontrolled(next);
  };

  const activeContent = activeText;
  const inactiveContent = inactiveText;

  return (
    <span style={{ display: "contents" }}>
      <style>{styles}</style>
      <div
        className={["ui-switch", sizeClass, value ? "is-checked" : "", switchDisabled ? "is-disabled" : "", inlinePrompt ? "ui-switch--wide" : ""].filter(Boolean).join(" ")}
      >
        {!inlinePrompt && inactiveContent ? (
          <span className={`ui-switch__label ui-switch__label--left${value ? "" : " is-active"}`} aria-hidden={value}>
            {inactiveContent}
          </span>
        ) : null}
        <button
          type="button"
          role="switch"
          aria-checked={value}
          aria-busy={loading || undefined}
          disabled={switchDisabled}
          className="ui-switch__core"
          style={width > 0 ? { width: `${width}px` } : undefined}
          onClick={toggle}
        >
          <span className="ui-switch__action">
            {loading ? <Spinner /> : null}
          </span>
          {inlinePrompt ? (
            <span className="ui-switch__inner">
              <span className="ui-switch__inner-wrapper">{value ? activeContent : inactiveContent}</span>
            </span>
          ) : null}
        </button>
        {!inlinePrompt && activeContent ? (
          <span className={`ui-switch__label ui-switch__label--right${value ? " is-active" : ""}`} aria-hidden={!value}>
            {activeContent}
          </span>
        ) : null}
      </div>
    </span>
  );
}

defineProperties(UiSwitch, {
  checked: { type: "boolean", label: "Checked", defaultValue: false, setter: "setChecked" },
  disabled: { type: "boolean", label: "Disabled", defaultValue: false },
  loading: { type: "boolean", label: "Loading", defaultValue: false },
  size: { type: "string", label: "Size", defaultValue: "default" },
  activeText: { type: "string", label: "Active text", defaultValue: "" },
  inactiveText: { type: "string", label: "Inactive text", defaultValue: "" },
  inlinePrompt: { type: "boolean", label: "Inline prompt", defaultValue: false },
  width: { type: "number", label: "Width", defaultValue: 0 },
});
