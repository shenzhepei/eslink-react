import { useState } from "react";
import { defineProperties } from "figma:react";

/**
 * Figma Sites code layer for UiTag.
 * String props are the code-layer stand-in for variants. Allowed values:
 * variant: filled | solid | outlined
 * color: default | primary | success | warning | danger | error | info | otherflow
 *        | magenta | red | volcano | orange | gold | lime | green | cyan | blue | geekblue | purple | processing
 *        or a CSS color such as #0088ac
 */
const styles = `.ui-tag {
  --ui-tag-color: var(--tag-light-default-text, var(--text-primary-light, #0d142d));
  --ui-tag-border-color: var(--tag-light-default-border, var(--border-default, #d0d0d0));
  --ui-tag-background: var(--tag-light-default-background, var(--fill-light, #f2f4f7));
  --ui-tag-solid-color: var(--tag-dark-default-text, var(--fill-white, #ffffff));
  --ui-tag-solid-border-color: var(--tag-dark-default-border, var(--neutral-default, #6b6b6b));
  --ui-tag-solid-background: var(--tag-dark-default-background, var(--neutral-default, #6b6b6b));
  --ui-tag-font-size: var(--font-body-sm, 12px);
  --ui-tag-line-height: 20px;
  --ui-tag-padding-inline: var(--gap-8, 8px);
  --ui-tag-icon-size: var(--font-body-sm, 12px);

  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  width: fit-content;
  height: var(--ui-tag-height, auto);
  padding: 0 calc(var(--ui-tag-padding-inline) - 1px);
  align-items: center;
  border: 1px solid var(--ui-tag-border-color);
  border-radius: var(--radius-sm, 4px);
  background: var(--ui-tag-background);
  color: var(--ui-tag-color);
  cursor: default;
  font-size: var(--ui-tag-font-size);
  line-height: var(--ui-tag-line-height);
  opacity: 1;
  text-align: start;
  transition: all 0.2s;
  vertical-align: middle;
  white-space: nowrap;
}

.ui-tag--filled {
  border-color: transparent;
}

.ui-tag--outlined {
  background: var(--bg-content, #ffffff);
}

.ui-tag--solid {
  border-color: var(--ui-tag-solid-border-color);
  background: var(--ui-tag-solid-background);
  color: var(--ui-tag-solid-color);
}

.ui-tag--color-primary,
.ui-tag--color-processing {
  --ui-tag-color: var(--tag-light-primary-text, var(--primary-darker, #006689));
  --ui-tag-border-color: var(--tag-light-primary-border, var(--primary-l3, #9ad3dd));
  --ui-tag-background: var(--tag-light-primary-background, var(--primary-l2, #c1e0e3));
  --ui-tag-solid-color: var(--tag-dark-primary-text, var(--fill-white, #ffffff));
  --ui-tag-solid-border-color: var(--tag-dark-primary-border, var(--primary-default, #0088ac));
  --ui-tag-solid-background: var(--tag-dark-primary-background, var(--primary-default, #0088ac));
}

.ui-tag--color-success,
.ui-tag--color-green {
  --ui-tag-color: var(--tag-light-success-text, var(--green3-darker, #006a00));
  --ui-tag-border-color: var(--tag-light-success-border, var(--green3-l3, #acd3b3));
  --ui-tag-background: var(--tag-light-success-background, var(--green3-l2, #cbe0ce));
  --ui-tag-solid-color: var(--tag-dark-success-text, var(--fill-white, #ffffff));
  --ui-tag-solid-border-color: var(--tag-dark-success-border, var(--green3-default, #008c25));
  --ui-tag-solid-background: var(--tag-dark-success-background, var(--green3-default, #008c25));
}

.ui-tag--color-warning,
.ui-tag--color-orange,
.ui-tag--color-gold {
  --ui-tag-color: var(--tag-light-warning-text, var(--yellow1-darker, #794400));
  --ui-tag-border-color: var(--tag-light-warning-border, var(--yellow1-l3, #d6c69b));
  --ui-tag-background: var(--tag-light-warning-background, var(--yellow1-l2, #e2d9c1));
  --ui-tag-solid-color: var(--tag-dark-warning-text, var(--fill-white, #ffffff));
  --ui-tag-solid-border-color: var(--tag-dark-warning-border, var(--yellow1-default, #9b6400));
  --ui-tag-solid-background: var(--tag-dark-warning-background, var(--yellow1-default, #9b6400));
}

.ui-tag--color-danger,
.ui-tag--color-volcano {
  --ui-tag-color: var(--tag-light-danger-text, var(--orange2-darker, #893500));
  --ui-tag-border-color: var(--tag-light-danger-border, var(--orange1-l3, #e5bfa0));
  --ui-tag-background: var(--tag-light-danger-background, var(--orange1-l2, #ebd5c4));
  --ui-tag-solid-color: var(--tag-dark-danger-text, var(--fill-white, #ffffff));
  --ui-tag-solid-border-color: var(--tag-dark-danger-border, var(--orange1-default, #bb4600));
  --ui-tag-solid-background: var(--tag-dark-danger-background, var(--orange1-default, #bb4600));
}

.ui-tag--color-error,
.ui-tag--color-red {
  --ui-tag-color: var(--red1-darker, #9e002d);
  --ui-tag-border-color: var(--red1-l3, #ecb8bb);
  --ui-tag-background: var(--red1-l2, #efd1d2);
  --ui-tag-solid-color: var(--fill-white, #ffffff);
  --ui-tag-solid-border-color: var(--red1-default, #c6264a);
  --ui-tag-solid-background: var(--red1-default, #c6264a);
}

.ui-tag--color-info,
.ui-tag--color-blue,
.ui-tag--color-geekblue {
  --ui-tag-color: var(--tag-light-info-text, var(--blue3-darker, #0055ac));
  --ui-tag-border-color: var(--tag-light-info-border, var(--blue3-l3, #a4cdeb));
  --ui-tag-background: var(--tag-light-info-background, var(--blue3-l2, #c7ddee));
  --ui-tag-solid-color: var(--tag-dark-info-text, var(--fill-white, #ffffff));
  --ui-tag-solid-border-color: var(--tag-dark-info-border, var(--blue3-default, #0076d2));
  --ui-tag-solid-background: var(--tag-dark-info-background, var(--blue3-default, #0076d2));
}

.ui-tag--color-otherflow,
.ui-tag--color-cyan {
  --ui-tag-color: var(--tag-light-otherflow-text, var(--green5-darker, #006d55));
  --ui-tag-border-color: var(--tag-light-otherflow-border, var(--green5-l3, #9dd5c9));
  --ui-tag-background: var(--tag-light-otherflow-background, var(--green5-l2, #c3e1da));
  --ui-tag-solid-color: var(--tag-dark-otherflow-text, var(--fill-white, #ffffff));
  --ui-tag-solid-border-color: var(--tag-dark-otherflow-border, var(--green5-default, #009074));
  --ui-tag-solid-background: var(--tag-dark-otherflow-background, var(--green5-default, #009074));
}

.ui-tag--color-magenta {
  --ui-tag-color: var(--red3-darker, #8c1658);
  --ui-tag-border-color: var(--red3-l3, #e5afd0);
  --ui-tag-background: var(--red3-l2, #efd0e3);
  --ui-tag-solid-color: var(--fill-white, #ffffff);
  --ui-tag-solid-border-color: var(--red3-default, #b83280);
  --ui-tag-solid-background: var(--red3-default, #b83280);
}

.ui-tag--color-lime {
  --ui-tag-color: var(--green1-darker, #416800);
  --ui-tag-border-color: var(--green1-l3, #bfd49d);
  --ui-tag-background: var(--green1-l2, #d9e4c7);
  --ui-tag-solid-color: var(--fill-white, #ffffff);
  --ui-tag-solid-border-color: var(--green1-default, #5f8c00);
  --ui-tag-solid-background: var(--green1-default, #5f8c00);
}

.ui-tag--color-purple {
  --ui-tag-color: var(--blue5-darker, #531dab);
  --ui-tag-border-color: var(--blue5-l3, #d3adf7);
  --ui-tag-background: var(--blue5-l2, #efdbff);
  --ui-tag-solid-color: var(--fill-white, #ffffff);
  --ui-tag-solid-border-color: var(--blue5-default, #722ed1);
  --ui-tag-solid-background: var(--blue5-default, #722ed1);
}

.ui-tag.is-custom-color {
  --ui-tag-color: var(--ui-tag-custom-color);
  --ui-tag-border-color: var(--ui-tag-custom-color);
  --ui-tag-background: var(--ui-tag-custom-background);
  --ui-tag-solid-color: var(--fill-white, #ffffff);
  --ui-tag-solid-border-color: var(--ui-tag-custom-color);
  --ui-tag-solid-background: var(--ui-tag-custom-color);
}

.ui-tag.is-clickable,
a.ui-tag {
  cursor: pointer;
  text-decoration: none;
}

.ui-tag.is-disabled {
  border-color: var(--form-disabled-border, var(--border-default, #d0d0d0));
  background: var(--form-disabled-background, var(--fill-light, #f2f4f7));
  color: var(--text-disabled-light, #9a9da8);
  cursor: not-allowed;
}

.ui-tag.is-hidden {
  display: none;
}

.ui-tag__icon,
.ui-tag__content,
.ui-tag__close {
  display: inline-flex;
  min-width: 0;
  align-items: center;
}

.ui-tag__icon {
  flex: 0 0 auto;
  font-size: var(--ui-tag-icon-size);
}

.ui-tag__icon > svg,
.ui-tag__close > svg {
  width: 1em;
  height: 1em;
}

.ui-tag__icon + .ui-tag__content,
.ui-tag__content + .ui-tag__close,
.ui-tag__icon + .ui-tag__close {
  margin-inline-start: var(--gap-4, 4px);
}

.ui-tag__close {
  flex: 0 0 auto;
  border-radius: var(--radius-min, 2px);
  color: currentColor;
  cursor: pointer;
  font-size: var(--ui-tag-icon-size);
  opacity: 0.65;
  outline: none;
  transition: color 0.2s, opacity 0.2s;
}

.ui-tag__close:hover {
  opacity: 1;
}

.ui-tag__close:focus-visible {
  outline: 2px solid var(--primary-default, #0088ac);
  outline-offset: 1px;
}

.ui-tag.is-disabled .ui-tag__close {
  color: var(--text-disabled-light, #9a9da8);
  cursor: not-allowed;
}

.ui-tag--checkable {
  border-color: transparent;
  background: transparent;
  cursor: pointer;
  user-select: none;
}

.ui-tag--checkable:not(.is-checked):not(.is-disabled):hover {
  background: var(--fill-light, #f2f4f7);
  color: var(--primary-default, #0088ac);
}

.ui-tag--checkable.is-checked {
  border-color: transparent;
  background: var(--primary-default, #0088ac);
  color: var(--fill-white, #ffffff);
}

.ui-tag--checkable.is-checked:not(.is-disabled):hover {
  background: var(--primary-light, #009cbd);
}

.ui-tag--checkable.is-disabled.is-checked {
  background: var(--form-disabled-background, var(--fill-light, #f2f4f7));
}

.ui-tag-checkable-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--gap-8, 8px);
}
`;

const presetColors = new Set([
  "magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple",
  "success", "processing", "error", "default", "warning", "primary", "info", "danger", "otherflow",
]);

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function UiTag({
  label = "标签",
  color = "default",
  variant = "filled",
  closable = false,
  disabled = false,
}: {
  label?: string;
  color?: string;
  variant?: string;
  closable?: boolean;
  disabled?: boolean;
}) {
  const [visible, setVisible] = useState(true);
  const preset = presetColors.has(color);
  const customColor = !preset && color.trim() ? color.trim() : "";
  const variantName = variant === "solid" || variant === "outlined" || variant === "filled" ? variant : "filled";

  return (
    <span style={{ display: "contents" }}>
      <style>{styles}</style>
      <span
        className={[
          "ui-tag",
          `ui-tag--${variantName}`,
          preset ? `ui-tag--color-${color}` : "",
          customColor ? "is-custom-color" : "",
          disabled ? "is-disabled" : "",
          !visible ? "is-hidden" : "",
        ].filter(Boolean).join(" ")}
        style={customColor ? {
          ["--ui-tag-custom-color" as string]: customColor,
          ["--ui-tag-custom-background" as string]: `color-mix(in srgb, ${customColor} 12%, transparent)`,
        } : undefined}
      >
        {label ? <span className="ui-tag__content">{label}</span> : null}
        {closable ? (
          <span
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-disabled={disabled || undefined}
            aria-label="Close this tag"
            className="ui-tag__close"
            onClick={(event) => {
              if (disabled) return;
              event.stopPropagation();
              setVisible(false);
            }}
            onKeyDown={(event) => {
              if (disabled) return;
              if (event.key !== "Enter" && event.key !== " ") return;
              event.preventDefault();
              setVisible(false);
            }}
          >
            <CloseIcon />
          </span>
        ) : null}
      </span>
    </span>
  );
}

defineProperties(UiTag, {
  label: { type: "string", label: "Label", defaultValue: "标签" },
  color: { type: "string", label: "Color", defaultValue: "default" },
  variant: { type: "string", label: "Variant", defaultValue: "filled" },
  closable: { type: "boolean", label: "Closable", defaultValue: false },
  disabled: { type: "boolean", label: "Disabled", defaultValue: false },
});
