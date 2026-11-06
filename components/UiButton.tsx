import { defineProperties } from "figma:react";

/**
 * Figma Sites code layer for UiButton.
 * String props are the code-layer stand-in for variants. Allowed values:
 * type: default | primary | success | warning | info | danger | text | secondary
 * size: xlarge | large | default | small | mini
 */
const styles = `.ui-button {
  --ui-button-height: var(--button-md-height, 36px);
  --ui-button-padding-block: var(--button-md-padding, 6px);
  --ui-button-padding-inline: var(--button-md-margin, 20px);
  --ui-button-font-size: var(--button-md-fontsize, 14px);
  --ui-button-radius: var(--button-md-radius, 6px);
  --ui-button-icon-size: var(--button-md-iconsize, 18px);
  --ui-button-semantic-color: var(--text-primary-light, #0d142d);

  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  height: var(--ui-button-height);
  padding: var(--ui-button-padding-block) var(--ui-button-padding-inline);
  align-items: center;
  justify-content: center;
  border-color: var(--button-light-default-normal-border, #d0d0d0);
  border-style: var(--ui-border-style, solid);
  border-width: var(--ui-border-width, 1px);
  border-radius: var(--ui-button-radius);
  background: var(--button-light-default-normal-background, #ffffff);
  color: var(--button-light-default-normal-text, #0d142d);
  column-gap: 6px;
  cursor: pointer;
  font-size: var(--ui-button-font-size);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1;
  opacity: 1;
  text-decoration: none;
  transform: none;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.ui-button:hover:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--button-light-hover-normal-border, #d0d0d0);
  background: var(--button-light-hover-normal-background, #efefef);
  color: var(--button-light-hover-normal-text, #0d142d);
}

.ui-button:active:not(:disabled):not([aria-disabled="true"]),
.ui-button.active:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--button-light-press-normal-border, #dfdfdf);
  background: var(--button-light-press-normal-background, #dfdfdf);
  transform: none;
}

.ui-button[data-size="xlarge"] {
  --ui-button-height: var(--button-xlg-height, 52px);
  --ui-button-padding-block: var(--button-xlg-padding, 10px);
  --ui-button-padding-inline: var(--button-xlg-margin, 28px);
  --ui-button-font-size: var(--button-xlg-fontsize, 20px);
  --ui-button-radius: var(--button-xlg-radius, 10px);
  --ui-button-icon-size: var(--button-xlg-iconsize, 28px);
}

.ui-button[data-size="large"] {
  --ui-button-height: var(--button-lg-height, 44px);
  --ui-button-padding-block: var(--button-lg-padding, 8px);
  --ui-button-padding-inline: var(--button-lg-margin, 24px);
  --ui-button-font-size: var(--button-lg-fontsize, 16px);
  --ui-button-radius: var(--button-lg-radius, 8px);
  --ui-button-icon-size: var(--button-lg-iconsize, 20px);
}

.ui-button[data-size="small"] {
  --ui-button-height: var(--button-sm-height, 28px);
  --ui-button-padding-block: var(--button-sm-padding, 4px);
  --ui-button-padding-inline: var(--button-sm-margin, 14px);
  --ui-button-font-size: var(--button-sm-fontsize, 12px);
  --ui-button-radius: var(--button-sm-radius, 4px);
  --ui-button-icon-size: var(--button-sm-iconsize, 14px);
}

.ui-button[data-size="mini"] {
  --ui-button-height: var(--button-min-height, 18px);
  --ui-button-padding-block: var(--button-min-padding, 4px);
  --ui-button-padding-inline: var(--button-min-margin, 10px);
  --ui-button-font-size: var(--button-min-fontsize, 12px);
  --ui-button-radius: var(--button-min-radius, 9999px);
  --ui-button-icon-size: var(--button-min-iconsize, 14px);
}

.ui-button[data-color-type="primary"] {
  --ui-button-semantic-color: var(--button-light-default-primary-background, #0088ac);
  border-color: var(--button-light-default-primary-border, transparent);
  background: var(--button-light-default-primary-background, #0088ac);
  color: var(--button-light-default-primary-text, #ffffff);
}

.ui-button[data-color-type="primary"]:hover:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--button-light-hover-primary-border, transparent);
  background: var(--button-light-hover-primary-background, #00779c);
  color: var(--button-light-hover-primary-text, #ffffff);
}

.ui-button[data-color-type="primary"]:active:not(:disabled):not([aria-disabled="true"]),
.ui-button[data-color-type="primary"].active:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--button-light-press-primary-border, transparent);
  background: var(--button-light-press-primary-background, #0099bb);
}

.ui-button[data-color-type="secondary"] {
  --ui-button-semantic-color: var(--button-light-default-secondary-background, #4f566f);
  border-color: var(--button-light-default-secondary-border, transparent);
  background: var(--button-light-default-secondary-background, #4f566f);
  color: var(--button-light-default-secondary-text, #ffffff);
}

.ui-button[data-color-type="secondary"]:hover:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--button-light-hover-secondary-border, transparent);
  background: var(--button-light-hover-secondary-background, #333a50);
  color: var(--button-light-hover-secondary-text, #ffffff);
}

.ui-button[data-color-type="secondary"]:active:not(:disabled):not([aria-disabled="true"]),
.ui-button[data-color-type="secondary"].active:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--button-light-press-secondary-border, transparent);
  background: var(--button-light-press-secondary-background, #5f667d);
}

.ui-button[data-color-type="success"] {
  --ui-button-semantic-color: var(--green3-default, #008c25);
  border-color: var(--green3-default, #008c25);
  background: var(--green3-default, #008c25);
  color: var(--button-light-default-primary-text, #ffffff);
}

.ui-button[data-color-type="success"]:hover:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--green3-light, #009c3e);
  background: var(--green3-light, #009c3e);
  color: var(--button-light-default-primary-text, #ffffff);
}

.ui-button[data-color-type="success"]:active:not(:disabled):not([aria-disabled="true"]),
.ui-button[data-color-type="success"].active:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--green3-dark, #007b0b);
  background: var(--green3-dark, #007b0b);
}

.ui-button[data-color-type="warning"] {
  --ui-button-semantic-color: var(--orange1-default, #bb4600);
  border-color: var(--orange1-default, #bb4600);
  background: var(--orange1-default, #bb4600);
  color: var(--button-light-default-primary-text, #ffffff);
}

.ui-button[data-color-type="warning"]:hover:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--orange1-dark, #a93300);
  background: var(--orange1-dark, #a93300);
  color: var(--button-light-default-primary-text, #ffffff);
}

.ui-button[data-color-type="warning"]:active:not(:disabled):not([aria-disabled="true"]),
.ui-button[data-color-type="warning"].active:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--orange1-lighter, #d57500);
  background: var(--orange1-lighter, #d57500);
}

.ui-button[data-color-type="danger"] {
  --ui-button-semantic-color: var(--red1-default, #c6264a);
  border-color: var(--red1-default, #c6264a);
  background: var(--red1-default, #c6264a);
  color: var(--button-light-default-primary-text, #ffffff);
}

.ui-button[data-color-type="danger"]:hover:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--red1-light, #d6445c);
  background: var(--red1-light, #d6445c);
  color: var(--button-light-default-primary-text, #ffffff);
}

.ui-button[data-color-type="danger"]:active:not(:disabled):not([aria-disabled="true"]),
.ui-button[data-color-type="danger"].active:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--red1-dark, #b3003a);
  background: var(--red1-dark, #b3003a);
}

.ui-button[data-plain="true"] {
  border-color: var(--ui-button-semantic-color);
  background: color-mix(in srgb, var(--ui-button-semantic-color), transparent 92%);
  color: var(--ui-button-semantic-color);
}

.ui-button[data-plain="true"]:hover:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--ui-button-semantic-color);
  background: var(--ui-button-semantic-color);
  color: var(--fill-white, #ffffff);
}

.ui-button[data-custom-color="true"] {
  --ui-button-semantic-color: var(--ui-button-color);
  border-color: var(--ui-button-color);
  background: var(--ui-button-color);
  color: var(--fill-white, #ffffff);
}

.ui-button[data-custom-color="true"]:hover:not(:disabled):not([aria-disabled="true"]) {
  border-color: color-mix(in srgb, var(--ui-button-color), black 12%);
  background: color-mix(in srgb, var(--ui-button-color), black 12%);
  color: var(--fill-white, #ffffff);
}

.ui-button[data-dark="true"][data-custom-color="true"]:hover:not(:disabled):not([aria-disabled="true"]) {
  border-color: color-mix(in srgb, var(--ui-button-color), white 12%);
  background: color-mix(in srgb, var(--ui-button-color), white 12%);
}

.ui-button[data-text="true"] {
  padding: var(--ui-button-padding-block) var(--ui-button-padding-inline);
  border: 0;
  background: var(--button-light-default-transparent-background, transparent);
  color: var(--button-light-default-transparent-text, #0d142d);
}

.ui-button[data-link="true"] {
  --ui-button-link-color: var(--button-light-default-transparent-text, #0d142d);
  --ui-button-link-hover-color: var(--button-light-press-transparent-text, rgba(13, 20, 45, 0.6));

  width: auto;
  min-width: 0;
  height: auto;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--ui-button-link-color);
  text-decoration: none;
}

.ui-button[data-text="true"]:hover:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--button-light-hover-transparent-border, transparent);
  background: var(--button-light-hover-transparent-background, rgba(13, 20, 45, 0.02));
  color: var(--button-light-hover-transparent-text, #0d142d);
}

.ui-button[data-text="true"]:active:not(:disabled):not([aria-disabled="true"]),
.ui-button[data-text="true"].active:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--button-light-press-transparent-border, transparent);
  background: var(--button-light-press-transparent-background, rgba(13, 20, 45, 0.04));
}

.ui-button[data-link="true"]:hover:not(:disabled):not([aria-disabled="true"]) {
  border-color: transparent;
  background: transparent;
  color: var(--ui-button-link-hover-color);
  text-decoration: none;
}

.ui-button[data-link="true"]:active:not(:disabled):not([aria-disabled="true"]),
.ui-button[data-link="true"].active:not(:disabled):not([aria-disabled="true"]) {
  border-color: transparent;
  background: transparent;
  color: var(--ui-button-link-color);
}

.ui-button[data-text="true"][data-bg="true"] {
  background: var(--button-light-hover-transparent-background, rgba(13, 20, 45, 0.02));
}

.ui-button[data-text="true"][data-bg="true"]:hover:not(:disabled):not([aria-disabled="true"]) {
  background: var(--button-light-press-transparent-background, rgba(13, 20, 45, 0.04));
}

.ui-button:is([data-text="true"], [data-link="true"])[data-type="primary"] {
  color: var(--button-light-default-primary-background, #0088ac);
}

.ui-button:is([data-text="true"], [data-link="true"])[data-type="primary"]:hover:not(:disabled):not([aria-disabled="true"]) {
  color: var(--button-light-hover-primary-background, #00779c);
}

.ui-button:is([data-text="true"], [data-link="true"])[data-type="info"] {
  color: var(--button-light-default-secondary-background, #4f566f);
}

.ui-button:is([data-text="true"], [data-link="true"])[data-type="info"]:hover:not(:disabled):not([aria-disabled="true"]) {
  color: var(--button-light-hover-secondary-background, #333a50);
}

.ui-button:is([data-text="true"], [data-link="true"])[data-type="success"] {
  color: var(--green3-default, #008c25);
}

.ui-button:is([data-text="true"], [data-link="true"])[data-type="success"]:hover:not(:disabled):not([aria-disabled="true"]) {
  color: var(--green3-default, #008c25);
}

.ui-button:is([data-text="true"], [data-link="true"])[data-type="warning"] {
  color: var(--orange1-default, #bb4600);
}

.ui-button:is([data-text="true"], [data-link="true"])[data-type="warning"]:hover:not(:disabled):not([aria-disabled="true"]) {
  color: var(--orange1-dark, #a93300);
}

.ui-button:is([data-text="true"], [data-link="true"])[data-type="danger"] {
  color: var(--red1-default, #c6264a);
}

.ui-button:is([data-text="true"], [data-link="true"])[data-type="danger"]:hover:not(:disabled):not([aria-disabled="true"]) {
  color: var(--red1-lighter, #e06171);
}

.ui-button[data-link="true"][data-type="primary"] {
  --ui-button-link-color: var(--button-light-default-primary-background, #0088ac);
  --ui-button-link-hover-color: var(--button-light-press-primary-background, #0099bb);
  color: var(--ui-button-link-color);
}

.ui-button[data-link="true"]:is([data-type="secondary"], [data-type="info"]) {
  --ui-button-link-color: var(--button-light-default-secondary-background, #4f566f);
  --ui-button-link-hover-color: var(--button-light-press-secondary-background, #5f667d);
  color: var(--ui-button-link-color);
}

.ui-button[data-link="true"][data-type="success"] {
  --ui-button-link-color: var(--green3-default, #008c25);
  --ui-button-link-hover-color: var(--green3-lighter, #33ab59);
  color: var(--ui-button-link-color);
}

.ui-button[data-link="true"][data-type="warning"] {
  --ui-button-link-color: var(--orange1-default, #bb4600);
  --ui-button-link-hover-color: var(--orange1-lighter, #d57500);
  color: var(--ui-button-link-color);
}

.ui-button[data-link="true"][data-type="danger"] {
  --ui-button-link-color: var(--red1-default, #c6264a);
  --ui-button-link-hover-color: var(--red1-lighter, #e06171);
  color: var(--ui-button-link-color);
}

.ui-button[data-link="true"][data-type]:hover:not(:disabled):not([aria-disabled="true"]) {
  color: var(--ui-button-link-hover-color);
}

.ui-button[data-link="true"][data-type]:active:not(:disabled):not([aria-disabled="true"]),
.ui-button[data-link="true"][data-type].active:not(:disabled):not([aria-disabled="true"]) {
  color: var(--ui-button-link-color);
}

.ui-button[data-round="true"]:not([data-link="true"]) {
  border-radius: 9999px;
}

.ui-button[data-circle="true"]:not([data-link="true"]) {
  width: calc(var(--ui-button-height) + 2px);
  min-width: calc(var(--ui-button-height) + 2px);
  padding: var(--ui-button-padding-block);
}

.ui-button[data-dashed="true"] {
  border-style: dashed;
}

.ui-button:disabled,
.ui-button[aria-disabled="true"] {
  cursor: not-allowed;
  opacity: 1;
}

.ui-button[data-color-type="normal"]:is(:disabled, [aria-disabled="true"]) {
  border-color: var(--button-light-disable-normal-border, #d0d0d0);
  background: var(--button-light-disable-normal-background, #dfdfdf);
  color: var(--button-light-disable-normal-text, rgba(13, 20, 45, 0.25));
}

.ui-button[data-color-type="primary"]:is(:disabled, [aria-disabled="true"]) {
  border-color: var(--button-light-disable-primary-border, transparent);
  background: var(--button-light-disable-primary-background, #a8dce8);
  color: var(--button-light-disable-primary-text, rgba(255, 255, 255, 0.72));
}

.ui-button[data-color-type="secondary"]:is(:disabled, [aria-disabled="true"]) {
  border-color: var(--button-light-disable-secondary-border, transparent);
  background: var(--button-light-disable-secondary-background, #c4c7d0);
  color: var(--button-light-disable-secondary-text, rgba(255, 255, 255, 0.72));
}

.ui-button:is([data-text="true"], [data-link="true"]):is(:disabled, [aria-disabled="true"]) {
  border-color: var(--button-light-disable-transparent-border, transparent);
  background: var(--button-light-disable-transparent-background, transparent);
  color: var(--button-light-disable-transparent-text, rgba(13, 20, 45, 0.25));
}

.ui-button:is([data-text="true"], [data-link="true"])[data-type="primary"]:is(:disabled, [aria-disabled="true"]) {
  color: var(--button-light-disable-primary-text, rgba(0, 136, 172, 0.35));
}

.ui-button:is([data-text="true"], [data-link="true"])[data-type="info"]:is(:disabled, [aria-disabled="true"]) {
  color: var(--button-light-disable-secondary-text, rgba(79, 86, 111, 0.35));
}

.ui-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.ui-button__icon > svg {
  width: var(--ui-button-icon-size);
  height: var(--ui-button-icon-size);
}

.ui-button[data-loading="true"] .ui-button__icon {
  position: absolute;
}

.ui-button[data-loading="true"] .ui-button__content {
  opacity: 0.1;
}

.ui-button__spinner {
  animation: ui-button-spin 0.8s linear infinite;
}
@keyframes ui-button-spin {
  to { transform: rotate(360deg); }
}

.ui-button {
  appearance: none;
  -webkit-appearance: none;
  font-family: inherit;
}
`;

const chineseCharactersPattern = /^[\u4e00-\u9fa5]{2}$/;

function colorTypeOf(type: string) {
  if (type === "secondary" || type === "info") return "secondary";
  if (type === "primary" || type === "success" || type === "warning" || type === "danger") return type;
  return "normal";
}

function Spinner() {
  return (
    <svg className="ui-button__spinner" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <path d="M12 3a9 9 0 0 1 9 9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function UiButton({
  label = "按钮",
  type = "primary",
  size = "default",
  disabled = false,
  loading = false,
  plain = false,
  text = false,
  link = false,
  round = false,
  circle = false,
  dashed = false,
  showIcon = false,
  color = "",
  autoInsertSpace = false,
}: {
  label?: string;
  type?: string;
  size?: string;
  disabled?: boolean;
  loading?: boolean;
  plain?: boolean;
  text?: boolean;
  link?: boolean;
  round?: boolean;
  circle?: boolean;
  dashed?: boolean;
  showIcon?: boolean;
  color?: string;
  autoInsertSpace?: boolean;
}) {
  const isText = text || type === "text";
  const computedDisabled = disabled || loading;
  const textContent = autoInsertSpace && chineseCharactersPattern.test(label)
    ? `${label[0]} ${label[1]}`
    : label;
  const customColor = color.trim();

  return (
    <span style={{ display: "contents" }}>
      <style>{styles}</style>
      <button
        type="button"
        className="ui-button"
        disabled={computedDisabled}
        aria-busy={loading || undefined}
        aria-disabled={computedDisabled || undefined}
        data-color-type={colorTypeOf(type)}
        data-custom-color={customColor ? true : undefined}
        data-dashed={dashed || undefined}
        data-link={link || undefined}
        data-loading={loading || undefined}
        data-plain={plain || undefined}
        data-round={round || undefined}
        data-circle={circle || undefined}
        data-size={size || "default"}
        data-text={isText || undefined}
        data-type={type || "default"}
        style={customColor ? { ["--ui-button-color" as string]: customColor } : undefined}
      >
        {loading || showIcon ? (
          <span className="ui-button__icon" data-icon="inline-start">
            {loading ? <Spinner /> : <PlusIcon />}
          </span>
        ) : null}
        {textContent ? <span className="ui-button__content">{textContent}</span> : null}
      </button>
    </span>
  );
}

defineProperties(UiButton, {
  label: { type: "string", label: "Label", defaultValue: "按钮" },
  type: { type: "string", label: "Type", defaultValue: "primary" },
  size: { type: "string", label: "Size", defaultValue: "default" },
  disabled: { type: "boolean", label: "Disabled", defaultValue: false },
  loading: { type: "boolean", label: "Loading", defaultValue: false },
  plain: { type: "boolean", label: "Plain", defaultValue: false },
  text: { type: "boolean", label: "Text", defaultValue: false },
  link: { type: "boolean", label: "Link", defaultValue: false },
  round: { type: "boolean", label: "Round", defaultValue: false },
  circle: { type: "boolean", label: "Circle", defaultValue: false },
  dashed: { type: "boolean", label: "Dashed", defaultValue: false },
  showIcon: { type: "boolean", label: "Icon", defaultValue: false },
  color: { type: "string", label: "Custom color", defaultValue: "" },
  autoInsertSpace: { type: "boolean", label: "Auto insert space", defaultValue: false },
});
